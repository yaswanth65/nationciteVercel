interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  maxWidth?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  maxWidth = "100%",
}: SectionHeaderProps) {
  const alignmentClass =
    alignment === "center"
      ? "text-center items-center"
      : alignment === "right"
      ? "text-right"
      : "";

  return (
    <div
      className={`flex flex-col gap-5 w-full ${alignmentClass}`}
      style={{ maxWidth }}
    >
      <h2 className="h2-hero text-[#252525]">{title}</h2>
      {subtitle && <p className="text-large text-[#1E1E1E]">{subtitle}</p>}
    </div>
  );
}
