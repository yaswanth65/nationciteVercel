import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Capture all query params
    const type = searchParams.get("type");          // scientist | doctor | researcher | org
    const top = parseInt(searchParams.get("top") || "10"); // default 10
    const orgId = searchParams.get("orgId");       // organization filtering

    // -------------------------------
    // 1. If querying PEOPLE (scientists)
    // -------------------------------
    if (type === "scientist" || type === "doctor" || type === "researcher") {
      
      // People filter
      let personWhere: any = {};

      if (type === "doctor") personWhere.personType = "DOCTOR";
      if (type === "researcher") personWhere.personType = "RESEARCHER";
      if (type === "scientist") {
        // scientist = doctor + researcher → no need to filter personType
      }

      // Filter by organization if provided
      if (orgId) {
        personWhere.organizationId = parseInt(orgId);
      }

      const people = await prisma.person.findMany({
        where: personWhere,
        orderBy: { hIndex: "desc" },
        take: top,
        include: {
          organization: true,
        },
      });

      return NextResponse.json({
        status: "success",
        count: people.length,
        data: people,
      });
    }

    // -------------------------------
    // 2. If querying ORGANIZATIONS
    // -------------------------------
    if (type === "org" || type === "organization") {
      
      const orgs = await prisma.organization.findMany({
        orderBy: { hIndex: "desc" },
        take: top,
        include: {
          people: true, // optional, remove if you don’t want full user list
        },
      });

      return NextResponse.json({
        status: "success",
        count: orgs.length,
        data: orgs,
      });
    }

    // -------------------------------
    // 3. If no type provided
    // -------------------------------
    return NextResponse.json(
      {
        status: "error",
        message:
          "Missing type parameter. Valid types: scientist | doctor | researcher | org",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
