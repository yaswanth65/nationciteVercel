# Typography Audit & Standards Documentation

## Overview

This document provides a comprehensive audit of typography usage across all pages in the NationCite codebase, identifying where typography classes are used correctly and where deviations exist.

---

## Typography Standards Reference

### Heading 1 - H1

- **Font Size:** 64px (Desktop) / 36px (Mobile)
- **Line Height:** 76px (Desktop) / 44px (Mobile)
- **Font Weight:** 600
- **Where to Use:** Hero Sections
- **CSS Class:** `h1` or `<h1>` tag

### Heading 2 - H2

- **Font Size:** 56px (Desktop) / 32px (Mobile)
- **Line Height:** 68px (Desktop) / 40px (Mobile)
- **Font Weight:** 500
- **Where to Use:** CTA Sections
- **CSS Class:** `h2` or `<h2>` tag

### Heading 3 - H3

- **Font Size:** 36px (Desktop) / 24px (Mobile)
- **Line Height:** 44px (Desktop) / 32px (Mobile)
- **Font Weight:** 500
- **Where to Use:** Section Headings
- **CSS Class:** `h3` or `<h3>` tag

### Heading 4 - H4

- **Font Size:** 28px (Desktop) / 20px (Mobile)
- **Line Height:** 36px (Desktop) / 28px (Mobile)
- **Font Weight:** 500
- **Where to Use:** Card Headings
- **CSS Class:** `h4` or `<h4>` tag

### Paragraph 1 - P1

- **Font Size:** 18px (Desktop) / 14px (Mobile)
- **Line Height:** 28px (Desktop) / 21px (Mobile)
- **Font Weight:** 400
- **Where to Use:** Hero Section, CTA Section
- **CSS Class:** `.p1`

### Paragraph 2 - P2

- **Font Size:** 16px (Desktop) / 14px (Mobile)
- **Line Height:** 24px (Desktop) / 21px (Mobile)
- **Font Weight:** 400
- **Where to Use:** Section Descriptions
- **CSS Class:** `.p2` or default `<p>` tag

### Paragraph 3 - P3

- **Font Size:** 14px
- **Line Height:** 21px
- **Font Weight:** 300
- **Where to Use:** Card Descriptions
- **CSS Class:** `.p3`

---

## Page-by-Page Audit

### 1. Home Page (`app/(site)/page.tsx`)

#### ✅ **Correct Usage**

- **Hero Section H1:** `<h1>` tag used correctly for "India's H-Index Leaderboard Portal"
- **Hero Section P1:** `.p1` class used for hero description text

#### ⚠️ **Deviations Found**

- **CRITICAL:** Components use `<h2>` for regular section headings instead of `<h3>`:
  - `UnderstandingHIndex` - Uses `<h2>` for "Understanding the H-Index" (should be `<h3>`)
  - `TransparencySection` - Uses `<h2>` for "Built on Transparency" (should be `<h3>`)
  - `ResearchIntelligence` - Uses `<h2>` for "Research Intelligence" (should be `<h3>`)
  - `TrustedBy` - Uses `<h3>` ✅ CORRECT
  - `PricingSection` - Uses `<h2>` for "Upgrade your plan" (should be `<h3>`)
  - `FinalCTA` - Uses `<h2>` ✅ CORRECT (this is a CTA section)

---

### 2. Leaderboard Page (`app/(site)/leaderboard/page.tsx`)

#### ✅ **Correct Usage**

- **Hero Section H1:** `<h1>` tag used for "Top Researchers & Institutions Shaping the Future"
- **Hero Section P1:** `.p1` class used for hero description

#### ⚠️ **Deviations Found**

- **CRITICAL:** Components use `<h2>` for regular section headings instead of `<h3>`:
  - `ThreeCardsSection` - Uses `<h2>` for "Lorem Ipsum" (should be `<h3>`)
  - `ConsultancySection` - Uses `<h2>` ✅ CORRECT (this is a CTA section)
  - `ThreeBlocksSection` - Uses `<h3>` ✅ CORRECT
  - `FAQSection` - Uses `<h2>` for "Lorem ipsum dolor self amet" (should be `<h3>`)
  - `LeaderboardFinalCTA` - Uses `<h2>` ✅ CORRECT (this is a CTA section)

---

### 3. Methodology Page (`app/(site)/methodology/page.tsx`)

#### ✅ **Correct Usage**

- **Hero Section H1:** `<h1>` tag used for "Nationcite's H-Index Methodology"
- **Hero Section P1:** `.p1` class used for hero description and intro text sections
- **Section H3:** `<h3>` tag used for "Lorem ipsum dolor self amet" section heading

#### ⚠️ **Deviations Found**

- None identified - page follows typography standards

---

### 4. About Page (`app/(site)/about/page.tsx`)

#### ✅ **Correct Usage**

- **Hero Section H1:** `<h1>` tag used for "Building the Digital Infrastructure for Tomorrow's Brands"
- **Hero Section P1:** `.p1` class used in hero description box and body text
- **Section P2:** `.p2` class used for section descriptions

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for regular section headings instead of `<h3>`:
  - "Where Vision Meets Engineering Excellence" - Uses `<h2>` (should be `<h3>`)
  - "The Minds Powering Nationcite" - Uses `<h2>` (should be `<h3>`)
  - "15 Reasons to Join Us" - Uses `<h2>` (should be `<h3>`)
  - "Everything You Need to Know About Us" - Uses `<h2>` (should be `<h3>`)
- **Note:** These are NOT CTA sections, they are regular content sections

---

### 5. Contact Page (`app/(site)/contact/page.tsx`)

#### ✅ **Correct Usage**

- **Hero Section H1:** `<h1>` tag with custom class `.sub-head` used for "Let's Build India's Research Transparency Together"

#### ⚠️ **Deviations Found**

- **Custom Classes Used:** Uses custom classes `.head-or`, `.sub-head`, `.para-graph`, `.title-footer` instead of standard typography classes
- **Recommendation:** Should use standard `h1`, `.p1`, `.p2` classes for consistency

---

### 6. Pricing Page (`app/(site)/pricing/page.tsx`)

#### ⚠️ **Status**

- Page is not yet implemented (shows placeholder "Pricing Page")
- **Recommendation:** When implemented, follow typography standards

---

## Component-Level Audit

### FinalCTA Component (`components/site/FinalCTA.tsx`)

#### ✅ **Correct Usage**

- **CTA Section H2:** `<h2>` tag used for "Claim Your Academic Identity"
- **CTA Section P1:** `.p1` class used for description text

#### ⚠️ **Deviations Found**

- None identified

---

### UnderstandingHIndex Component (`components/site/UnderstandingHIndex.tsx`)

#### ✅ **Correct Usage**

- **Section P2:** `.p2` class used for section description
- **Card H4:** `<h4>` tags used for card headings ("What is the H-Index?", "Why H-Index Matters", etc.)
- **Card P2:** `.p2` class used for card descriptions

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for section heading "Understanding the H-Index" - should be `<h3>` (NOT a CTA section)
- **Inconsistent Card Text:** Uses `.p2` in cards where `.p3` should be used per standards
- **Recommendation:**
  1. Change `<h2>` to `<h3>` for section heading
  2. Change card descriptions from `.p2` to `.p3`

---

### PricingSection Component (`components/site/PricingSection.tsx`)

#### ✅ **Correct Usage**

- None - multiple issues found

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for section heading "Upgrade your plan" - should be `<h3>` (NOT a CTA section)
- **No P1/P2/P3 Classes:** Card titles and descriptions don't use typography classes
- **Recommendation:**
  1. Change `<h2>` to `<h3>` for section heading
  2. Add `.p3` to feature list text

---

### TransparencySection Component (`components/site/TransparencySection.tsx`)

#### ✅ **Correct Usage**

- **Section P2:** `.p2` class used for section description
- **Card H4:** `<h4>` tags used for card headings
- **Card P3:** `.p3` class used correctly for card descriptions

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for section heading "Built on Transparency" - should be `<h3>` (NOT a CTA section)
- **Recommendation:** Change `<h2>` to `<h3>` for section heading

---

### ResearchIntelligence Component (`components/site/ResearchIntelligence.tsx`)

#### ✅ **Correct Usage**

- **Section P1:** `.p1` class used for section description
- **Card H4:** `<h4>` tags used for card titles
- **Card P3:** `.p3` class used for card descriptions

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for section heading "Research Intelligence & Academic Insight" - should be `<h3>` (NOT a CTA section)
- **Recommendation:** Change `<h2>` to `<h3>` for section heading

---

### FAQSection Component (`components/site/FAQSection.tsx`)

#### ✅ **Correct Usage**

- **Section P1:** `.p1` class used for section description

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for section heading "Lorem ipsum dolor self amet" - should be `<h3>` (NOT a CTA section)
- **FAQ Items:** No typography classes used for FAQ question/answer text
- **Recommendation:**
  1. Change `<h2>` to `<h3>` for section heading
  2. Add `.p2` or `.p3` classes to FAQ text

---

### ThreeCardsSection Component (`leaderboard/components/ThreeCardsSection.tsx`)

#### ✅ **Correct Usage**

- **Section P1:** `.p1` class used for section description
- **Card H4:** `<h4>` tags used for card headings
- **Card P3:** `.p3` class used for card descriptions

#### ⚠️ **Deviations Found**

- **CRITICAL:** Uses `<h2>` for section heading "Lorem Ipsum" - should be `<h3>` (NOT a CTA section)
- **Recommendation:** Change `<h2>` to `<h3>` for section heading

---

### ConsultancySection Component (`leaderboard/components/ConsultancySection.tsx`)

#### ✅ **Correct Usage**

- **CTA Section H2:** `<h2>` tag used for "Custom Consultancy Calls"
- **CTA Section P1:** `.p1` class used for description

#### ⚠️ **Deviations Found**

- **Feature List:** No typography classes for feature text
- **Recommendation:** Add `.p2` or `.p3` to feature list items

---

## Summary of Deviations

### Critical Issues - H2 vs H3 Misuse

**MAJOR PROBLEM:** Multiple components use `<h2>` for regular section headings when H2 is ONLY for CTA sections. H3 should be used for section headings.

**Components using H2 incorrectly (should be H3):**

1. `UnderstandingHIndex` - "Understanding the H-Index"
2. `TransparencySection` - "Built on Transparency"
3. `ResearchIntelligence` - "Research Intelligence & Academic Insight"
4. `PricingSection` - "Upgrade your plan"
5. `FAQSection` - "Lorem ipsum dolor self amet"
6. `ThreeCardsSection` - "Lorem Ipsum"
7. About Page - 4 section headings using H2

**Components using H2 correctly (CTA sections):**

- ✅ `FinalCTA` - "Claim Your Academic Identity"
- ✅ `ConsultancySection` - "Custom Consultancy Calls"
- ✅ `LeaderboardFinalCTA`

**Components using H3 correctly:**

- ✅ `TrustedBy` - "Trusted by Leading Academic Institutions"
- ✅ `ThreeBlocksSection` - All headings use H3

### Other Issues

1. **Contact Page:** Uses completely custom typography classes (`.head-or`, `.sub-head`, `.para-graph`) instead of standard classes
2. **UnderstandingHIndex Component:** Uses `.p2` in cards where `.p3` should be used
3. **PricingSection Component:** Missing typography classes on card content
4. **ConsultancySection Component:** Missing typography classes on feature list

---

## Recommendations

### URGENT - Fix H2 vs H3 Misuse (Priority 1)

**Replace ALL `<h2>` tags with `<h3>` in the following components (they are NOT CTA sections):**

1. **components/site/UnderstandingHIndex.tsx** - Line 27
2. **components/site/TransparencySection.tsx** - Line 9
3. **components/site/ResearchIntelligence.tsx** - Line 9
4. **components/site/PricingSection.tsx** - Line 66
5. **components/site/FAQSection.tsx** - Line 11
6. **app/(site)/leaderboard/components/ThreeCardsSection.tsx** - Line 9
7. **app/(site)/about/page.tsx** - Lines 56, 83, 110, 138

### Immediate Actions (Priority 2)

1. **Refactor Contact Page** to use standard typography classes:

   - Replace `.sub-head` with `<h1>`
   - Replace `.para-graph` with `.p1`
   - Replace `.title-footer` with `.p2`

2. **Update UnderstandingHIndex Component**:

   - Change card descriptions from `.p2` to `.p3`

3. **Add Typography Classes**:
   - PricingSection: Add `.p3` to feature list
   - FAQSection: Add `.p2` or `.p3` to FAQ text
   - ConsultancySection: Add `.p2` to feature list

### Best Practices Going Forward

1. Always use semantic HTML tags (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<p>`) when possible
2. Apply utility classes (`.p1`, `.p2`, `.p3`) when semantic tags aren't appropriate
3. Refer to typography standards before implementing new sections
4. Hero sections should always use `<h1>` + `.p1`
5. CTA sections should always use `<h2>` + `.p1`
6. Section headings should use `<h3>` + `.p2`
7. Cards should use `<h4>` + `.p3`

---

## Typography Class Quick Reference

```html
<!-- Hero Section -->
<h1>Hero Heading</h1>
<p class="p1">Hero description text</p>

<!-- CTA Section -->
<h2>CTA Heading</h2>
<p class="p1">CTA description text</p>

<!-- Section Heading -->
<h3>Section Title</h3>
<p class="p2">Section description text</p>

<!-- Card -->
<h4>Card Title</h4>
<p class="p3">Card description text</p>
```

---

## Compliance Score by Page

| Page        | Compliance | Notes                                             |
| ----------- | ---------- | ------------------------------------------------- |
| Home        | ⚠️ 40%     | Multiple H2/H3 violations in components           |
| Leaderboard | ⚠️ 50%     | H2/H3 violations in ThreeCardsSection, FAQSection |
| Methodology | ✅ 100%    | Perfect implementation                            |
| About       | ⚠️ 30%     | 4 sections use H2 instead of H3                   |
| Contact     | ⚠️ 60%     | Custom classes instead of standard                |
| Pricing     | ⏸️ N/A     | Not yet implemented                               |

## Component Compliance Score

| Component            | Compliance | Notes                                                      |
| -------------------- | ---------- | ---------------------------------------------------------- |
| FinalCTA             | ✅ 100%    | Perfect - H2 used correctly for CTA                        |
| ConsultancySection   | ✅ 95%     | H2 used correctly for CTA, minor feature text issues       |
| LeaderboardFinalCTA  | ✅ 100%    | Perfect - H2 used correctly for CTA                        |
| TrustedBy            | ✅ 100%    | Perfect - H3 used correctly                                |
| ThreeBlocksSection   | ✅ 100%    | Perfect - H3 used correctly                                |
| UnderstandingHIndex  | ❌ 40%     | **Uses H2 instead of H3**, `.p2` instead of `.p3` in cards |
| TransparencySection  | ❌ 60%     | **Uses H2 instead of H3**                                  |
| ResearchIntelligence | ❌ 60%     | **Uses H2 instead of H3**                                  |
| PricingSection       | ❌ 50%     | **Uses H2 instead of H3**, missing classes                 |
| FAQSection           | ❌ 50%     | **Uses H2 instead of H3**, missing classes                 |
| ThreeCardsSection    | ❌ 60%     | **Uses H2 instead of H3**                                  |

---

**Last Updated:** December 11, 2025
**Audited By:** GitHub Copilot
**Total Pages Audited:** 6
**Total Components Audited:** 8
