import { jsPDF } from 'jspdf'
import {
    personalData,
    experienceData,
    educationData,
    skillsData,
} from '~/data'

export const useCVGeneratorCompact = () => {
    const generateCV = async (
        companyName?: string,
        companyAddress?: string,
    ) => {
        const doc = new jsPDF()

        // ── Colours ────────────────────────────────────────────────────────
        const accent   = { r: 189, g:  93, b:  56 } // #BD5D38
        const dark     = { r:  52, g:  58, b:  64 } // #343a40
        const mid      = { r: 100, g: 110, b: 120 } // grey for dates/meta
        const PAGE_W   = 210
        const MARGIN   = 15
        const TEXT_W   = PAGE_W - MARGIN * 2  // 180 mm
        let y          = 0

        // ── Helpers ─────────────────────────────────────────────────────────

        /** Plain word-wrapped text; returns height consumed */
        const text = (
            str: string,
            x: number,
            yy: number,
            maxW: number,
            size: number,
            style: 'normal' | 'bold' | 'italic' = 'normal',
            color = dark,
        ): number => {
            doc.setFontSize(size)
            doc.setFont('helvetica', style)
            doc.setTextColor(color.r, color.g, color.b)
            const lines = doc.splitTextToSize(str, maxW)
            doc.text(lines, x, yy)
            return lines.length * size * 0.42
        }

        /** Inline bold+normal mixed text (strips <strong> tags for ATS) */
        const richText = (
            raw: string,
            x: number,
            yy: number,
            maxW: number,
            size: number,
        ): number => {
            // ATS safe: strip HTML tags, render as plain
            const plain = raw.replace(/<[^>]+>/g, '')
            return text(plain, x, yy, maxW, size)
        }

        /** Thin rule under section headings */
        const rule = (yy: number) => {
            doc.setDrawColor(accent.r, accent.g, accent.b)
            doc.setLineWidth(0.3)
            doc.line(MARGIN, yy, PAGE_W - MARGIN, yy)
        }

        /** Section heading – returns new y */
        const heading = (title: string, yy: number): number => {
            doc.setFontSize(10)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(accent.r, accent.g, accent.b)
            doc.text(title, MARGIN, yy)
            rule(yy + 1)
            return yy + 5
        }

        /** Right-aligned label (used for dates) */
        const rightText = (
            str: string,
            yy: number,
            size: number,
            color = mid,
        ) => {
            doc.setFontSize(size)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(color.r, color.g, color.b)
            const w = doc.getTextWidth(str)
            doc.text(str, PAGE_W - MARGIN - w, yy)
        }

        const newPageIfNeeded = (neededMm: number) => {
            if (y + neededMm > 278) {
                doc.addPage()
                y = 18
            }
        }

        // ════════════════════════════════════════════════════════════════════
        // HEADER
        // ════════════════════════════════════════════════════════════════════
        y = 18

        // Name
        doc.setFontSize(22)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(dark.r, dark.g, dark.b)
        doc.text(`${personalData.name} ${personalData.surname}`, MARGIN, y)
        y += 7

        // Title
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(mid.r, mid.g, mid.b)
        doc.text('Full Stack Software Developer', MARGIN, y)
        y += 5

        // Contact bar – single line, pipe-separated
        const contacts = [
            personalData.email,
            personalData.phone,
            personalData.location,
            personalData.linkedin,
            personalData.github,
            personalData.website,
        ].join('  |  ')
        text(contacts, MARGIN, y, TEXT_W, 8, 'normal', mid)
        y += 4

        // Thin divider
        doc.setDrawColor(dark.r, dark.g, dark.b)
        doc.setLineWidth(0.2)
        doc.line(MARGIN, y, PAGE_W - MARGIN, y)
        y += 5

        // ════════════════════════════════════════════════════════════════════
        // SUMMARY
        // ════════════════════════════════════════════════════════════════════
        y = heading('SUMMARY', y)
        const summaryPlain = personalData.aboutMe.replace(/<[^>]+>/g, '')
        const summaryH = text(summaryPlain, MARGIN, y, TEXT_W, 8.5)
        y += summaryH + 5

        // ════════════════════════════════════════════════════════════════════
        // EXPERIENCE
        // ════════════════════════════════════════════════════════════════════
        y = heading('EXPERIENCE', y)

        const experiences = Object.values(experienceData).sort(
            (a, b) => b.startDate.getTime() - a.startDate.getTime(),
        )

        const fmtDate = (d: Date) =>
            d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

        for (const exp of experiences) {
            newPageIfNeeded(22)

            // Job title (left) + date range (right) on the same baseline
            const dateRange = `${fmtDate(exp.startDate)} – ${exp.endDate ? fmtDate(exp.endDate) : 'Present'}`
            rightText(dateRange, y, 8.5)

            doc.setFontSize(10)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(dark.r, dark.g, dark.b)
            doc.text(exp.position, MARGIN, y)
            y += 4.5

            // Company
            doc.setFontSize(9)
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(accent.r, accent.g, accent.b)
            doc.text(exp.company, MARGIN, y)
            y += 4.5

            // Bullets
            const bullets = exp.description
            for (const bullet of bullets) {
                newPageIfNeeded(8)
                doc.setFontSize(8)
                doc.setFont('helvetica', 'normal')
                doc.setTextColor(dark.r, dark.g, dark.b)
                doc.text('-', MARGIN, y)
                const bh = richText(bullet, MARGIN + 4, y, TEXT_W - 4, 8)
                y += bh + 2
            }

            y += 3
        }

        // ════════════════════════════════════════════════════════════════════
        // SKILLS
        // ════════════════════════════════════════════════════════════════════
        newPageIfNeeded(30)
        y = heading('SKILLS', y)

        const skills = Object.values(skillsData).sort(
            (a, b) => b.yearsOfExperience - a.yearsOfExperience,
        )

        const byCategory: Record<string, typeof skills> = {}
        for (const s of skills) {
            if (!byCategory[s.category]) byCategory[s.category] = []
            byCategory[s.category]!.push(s)
        }

        const categoryOrder = ['Frontend', 'Backend', 'Programming', 'DevOps']
        for (const cat of categoryOrder) {
            const list = byCategory[cat]
            if (!list?.length) continue

            newPageIfNeeded(7)
            const label = `${cat}: `
            const skillLine = list.map((s) => s.name).join(', ')

            doc.setFontSize(8.5)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(dark.r, dark.g, dark.b)
            doc.text(label, MARGIN, y)
            const labelW = doc.getTextWidth(label)

            doc.setFont('helvetica', 'normal')
            const sh = text(skillLine, MARGIN + labelW, y, TEXT_W - labelW, 8.5)
            y += sh + 3
        }

        y += 2

        // ════════════════════════════════════════════════════════════════════
        // EDUCATION
        // ════════════════════════════════════════════════════════════════════
        newPageIfNeeded(25)
        y = heading('EDUCATION', y)

        const educations = Object.values(educationData).sort(
            (a, b) => b.startDate.getTime() - a.startDate.getTime(),
        )

        for (const edu of educations) {
            newPageIfNeeded(18)

            const dateRange = `${fmtDate(edu.startDate)} – ${fmtDate(edu.endDate)}`
            rightText(dateRange, y, 8.5)

            doc.setFontSize(10)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(dark.r, dark.g, dark.b)
            doc.text(edu.degree, MARGIN, y)
            y += 4.5

            doc.setFontSize(9)
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(accent.r, accent.g, accent.b)
            doc.text(`${edu.institution} — ${edu.field}`, MARGIN, y)
            y += 4.5

            doc.setFontSize(8.5)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(mid.r, mid.g, mid.b)
            doc.text(edu.location, MARGIN, y)
            y += 5
        }

        // ════════════════════════════════════════════════════════════════════
        // FOOTER (GDPR consent)
        // ════════════════════════════════════════════════════════════════════
        const pageCount = doc.getNumberOfPages()
        doc.setPage(pageCount)
        doc.setFontSize(6.5)
        doc.setFont('helvetica', 'italic')
        doc.setTextColor(mid.r, mid.g, mid.b)
        const consentText = `Wyrazam zgode na przetwarzanie moich danych osobowych przez ${companyName ?? ''} z siedziba w ${companyAddress ?? ''} w celu przeprowadzenia rekrutacji na aplikowane przeze mnie stanowisko. Wyrazam rowniez dobrowolna zgode na przetwarzanie moich danych osobowych na potrzeby przyszlych rekrutacji prowadzonych przez tego pracodawce.`
        const consentLines = doc.splitTextToSize(consentText, TEXT_W)
        const lineH = 2.8
        const consentY = 282 - consentLines.length * lineH
        doc.text(consentLines, MARGIN, consentY, { lineHeightFactor: 1.1 })

        doc.setFontSize(8)
        doc.setFont('helvetica', 'normal')
        doc.text(
            `Generated on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
            PAGE_W / 2,
            285,
            { align: 'center' },
        )

        // ════════════════════════════════════════════════════════════════════
        // SAVE
        // ════════════════════════════════════════════════════════════════════
        const fileName = `CV_${personalData.name}_${personalData.surname}_Compact_${new Date().toISOString().split('T')[0]}.pdf`
        doc.save(fileName)
    }

    return { generateCV }
}

