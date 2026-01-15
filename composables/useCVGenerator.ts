import { jsPDF } from 'jspdf'
import { personalData, experienceData, educationData, skillsData, projectsData } from '~/data'

export const useCVGenerator = () => {
    const generateCV = async () => {
        const doc = new jsPDF()
        let yPosition = 25
        
        // Color scheme matching your project
        const primaryColor = { r: 189, g: 93, b: 56 } // #BD5D38
        const darkGray = { r: 52, g: 58, b: 64 } // #343a40
        const lightGray = { r: 134, g: 142, b: 150 } // #868e96

        // Helper function to add text with word wrap
        const addText = (
            text: string,
            x: number,
            y: number,
            maxWidth: number,
            fontSize: number = 10
        ) => {
            doc.setFontSize(fontSize)
            const lines = doc.splitTextToSize(text, maxWidth)
            doc.text(lines, x, y)
            return lines.length * (fontSize * 0.5) // Return height used
        }

        // Helper function to draw a section header with underline
        const addSectionHeader = (title: string, y: number) => {
            doc.setFontSize(14)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
            doc.text(title, 20, y)
            
            // Underline
            doc.setDrawColor(primaryColor.r, primaryColor.g, primaryColor.b)
            doc.setLineWidth(0.5)
            doc.line(20, y + 1, 190, y + 1)
            
            doc.setTextColor(0, 0, 0)
            return y + 8
        }

        // Header with colored background
        doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b)
        doc.rect(0, 0, 210, 35, 'F')
        
        // Name
        doc.setFontSize(28)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(255, 255, 255)
        doc.text(`${personalData.name} ${personalData.surname}` || 'Matej Kokol', 20, 18)
        
        // Title
        doc.setFontSize(12)
        doc.setFont('helvetica', 'normal')
        doc.text('Full Stack Software Developer', 20, 27)
        
        yPosition = 45

        // Contact Information in a clean layout
        doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
        doc.setFontSize(9)
        doc.setFont('helvetica', 'normal')
        
        let contactY = yPosition
        const contactItems = []
        
        if (personalData?.email) contactItems.push({ label: 'Email', text: personalData.email })
        if (personalData?.phone) contactItems.push({ label: 'Phone', text: personalData.phone })
        if (personalData?.location) contactItems.push({ label: 'Location', text: personalData.location })
        if (personalData?.website) contactItems.push({ label: 'Website', text: personalData.website })
        if (personalData?.github) contactItems.push({ label: 'GitHub', text: personalData.github })
        if (personalData?.linkedin) contactItems.push({ label: 'LinkedIn', text: personalData.linkedin })
        
        // Split into two columns
        const midpoint = Math.ceil(contactItems.length / 2)
        const leftColumn = contactItems.slice(0, midpoint)
        const rightColumn = contactItems.slice(midpoint)
        
        leftColumn.forEach((item, i) => {
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
            doc.text(`${item.label}: `, 20, contactY + (i * 5))
            const labelWidth = doc.getTextWidth(`${item.label}: `)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.text(item.text, 20 + labelWidth, contactY + (i * 5))
        })
        
        rightColumn.forEach((item, i) => {
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
            doc.text(`${item.label}: `, 110, contactY + (i * 5))
            const labelWidth = doc.getTextWidth(`${item.label}: `)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.text(item.text, 110 + labelWidth, contactY + (i * 5))
        })
        
        yPosition = contactY + (Math.max(leftColumn.length, rightColumn.length) * 5) + 8
        doc.setTextColor(0, 0, 0)

        // Experience Section
        yPosition = addSectionHeader('WORK EXPERIENCE', yPosition)

        const experiences = Object.values(experienceData)
        experiences.sort(
            (a, b) => b.startDate.getTime() - a.startDate.getTime()
        )

        for (const exp of experiences) {
            // Check if we need a new page
            if (yPosition > 245) {
                doc.addPage()
                yPosition = 25
            }

            // Position and Company
            doc.setFontSize(11)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.text(exp.position, 20, yPosition)
            
            // Date range on the right
            doc.setFontSize(9)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
            const dateRange = exp.endDate
                ? `${exp.startDate.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                  })} - ${exp.endDate.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                  })}`
                : `${exp.startDate.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                  })} - Present`
            const dateWidth = doc.getTextWidth(dateRange)
            doc.text(dateRange, 190 - dateWidth, yPosition)
            
            yPosition += 5

            // Company name
            doc.setFontSize(10)
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
            doc.text(exp.company, 20, yPosition)
            yPosition += 4

            // Company website link if exists
            if (exp.website) {
                doc.setFontSize(8)
                doc.setFont('helvetica', 'normal')
                doc.textWithLink(`Visit website (${exp.website})`, 20, yPosition, { url: exp.website })
                yPosition += 5
            } else {
                yPosition += 2
            }

            // About section
            if (exp.about) {
                doc.setFont('helvetica', 'italic')
                doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
                doc.setFontSize(9)
                const aboutHeight = addText(exp.about, 20, yPosition, 170, 9)
                yPosition += aboutHeight + 4
            }

            // Description with bullets
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.setFontSize(9)
            for (const desc of exp.description) {
                // Check if we need a new page before adding each bullet
                if (yPosition > 270) {
                    doc.addPage()
                    yPosition = 25
                }
                
                // Use a simple dash instead of Unicode bullet
                doc.setFont('helvetica', 'bold')
                doc.text('-', 20, yPosition)
                doc.setFont('helvetica', 'normal')
                const height = addText(desc, 25, yPosition, 165, 9)
                yPosition += height + 2
            }

            yPosition += 6
        }

        // Skills Section
        if (yPosition > 220) {
            doc.addPage()
            yPosition = 25
        }

        yPosition = addSectionHeader('SKILLS', yPosition)

        const skills = Object.values(skillsData).sort((a, b) => {
            // Sort by years of experience (descending), then by name
            if (b.yearsOfExperience !== a.yearsOfExperience) {
                return b.yearsOfExperience - a.yearsOfExperience
            }
            return a.name.localeCompare(b.name)
        })

        // Group skills by category
        const skillsByCategory: Record<string, typeof skills> = {}
        for (const skill of skills) {
            if (!skillsByCategory[skill.category]) {
                skillsByCategory[skill.category] = []
            }
            skillsByCategory[skill.category]!.push(skill)
        }

        // Display skills by category
        const categories = ['Frontend', 'Backend', 'Programming', 'DevOps', 'Design']
        for (const category of categories) {
            const categorySkills = skillsByCategory[category]
            if (!categorySkills || categorySkills.length === 0) continue

            // Check if we need a new page
            if (yPosition > 240) {
                doc.addPage()
                yPosition = 25
            }

            // Category name
            doc.setFontSize(10)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
            doc.text(category, 20, yPosition)
            yPosition += 5

            // Skills in this category
            doc.setFontSize(9)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            
            const skillsText = categorySkills
                .map(s => `${s.name} (${s.yearsOfExperience}y)`)
                .join(' • ')
            
            const height = addText(skillsText, 20, yPosition, 170, 9)
            yPosition += height + 6
        }

        yPosition += 4

        // Education Section
        if (yPosition > 200) {
            doc.addPage()
            yPosition = 25
        }

        yPosition = addSectionHeader('EDUCATION', yPosition)

        const educations = Object.values(educationData)
        educations.sort(
            (a, b) => b.startDate.getTime() - a.startDate.getTime()
        )

        for (const edu of educations) {
            // Check if we need a new page
            if (yPosition > 235) {
                doc.addPage()
                yPosition = 25
            }

            // Degree and Institution
            doc.setFontSize(11)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.text(edu.degree, 20, yPosition)
            
            // Date range on the right
            doc.setFontSize(9)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
            const dateRange = `${edu.startDate.toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
            })} - ${edu.endDate.toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
            })}`
            const dateWidth = doc.getTextWidth(dateRange)
            doc.text(dateRange, 190 - dateWidth, yPosition)
            
            yPosition += 5

            // Institution name
            doc.setFontSize(10)
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
            doc.text(edu.institution, 20, yPosition)
            yPosition += 4

            // Field and Location
            doc.setFontSize(9)
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
            doc.text(`${edu.field} | ${edu.location}`, 20, yPosition)
            yPosition += 6

            // Description
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.setFontSize(9)
            for (const desc of edu.description) {
                doc.setFont('helvetica', 'bold')
                doc.text('-', 20, yPosition)
                doc.setFont('helvetica', 'normal')
                const height = addText(desc, 25, yPosition, 165, 9)
                yPosition += height + 2
            }

            // Thesis
            if (edu.thesis) {
                yPosition += 2
                doc.setFont('helvetica', 'bold')
                doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
                doc.setFontSize(8)
                doc.text('BACHELOR THESIS', 20, yPosition)
                yPosition += 4
                
                doc.setFont('helvetica', 'normal')
                doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
                doc.setFontSize(9)
                const thesisHeight = addText(edu.thesis, 20, yPosition, 170, 9)
                yPosition += thesisHeight + 6
            }

            yPosition += 4
        }

        // Projects Section
        if (yPosition > 200) {
            doc.addPage()
            yPosition = 25
        }

        yPosition = addSectionHeader('KEY PROJECTS', yPosition)

        const projects = Object.values(projectsData)

        for (const project of projects) {
            // Check if we need a new page
            if (yPosition > 235) {
                doc.addPage()
                yPosition = 25
            }

            // Project title
            doc.setFontSize(11)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.text(project.title, 20, yPosition)
            yPosition += 5

            // Subtitle
            doc.setFontSize(9)
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
            doc.text(project.subtitle, 20, yPosition)
            yPosition += 5

            // Description with bullet
            doc.setFont('helvetica', 'normal')
            doc.setTextColor(darkGray.r, darkGray.g, darkGray.b)
            doc.setFontSize(9)
            doc.setFont('helvetica', 'bold')
            doc.text('-', 20, yPosition)
            doc.setFont('helvetica', 'normal')
            const height = addText(
                project.longDescription ?? 'No description provided.',
                25,
                yPosition,
                165,
                9
            )
            yPosition += height + 3

            // Tech Stack
            if (project.techStack && project.techStack.length > 0) {
                doc.setFont('helvetica', 'normal')
                doc.setFontSize(8)
                doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
                const techNames = project.techStack
                    .map((t) => t.name)
                    .join(' | ')
                const techHeight = addText(
                    techNames,
                    20,
                    yPosition,
                    170,
                    8
                )
                yPosition += techHeight + 2
            }

            // Project link
            doc.setFontSize(8)
            doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
            doc.setFont('helvetica', 'italic')
            const projectUrl = `${personalData.website}/projects/${project.id}`
            doc.textWithLink(`View project details (www.${projectUrl})`, 20, yPosition, { url: `https://${projectUrl}` })
            yPosition += 6

            yPosition += 2
        }

        // Footer on last page
        const pageCount = doc.getNumberOfPages()
        doc.setPage(pageCount)
        doc.setFontSize(8)
        doc.setTextColor(lightGray.r, lightGray.g, lightGray.b)
        doc.text(
            `Generated on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
            105,
            285,
            { align: 'center' }
        )

        // Save the PDF
        const fileName = `CV_${
            `${personalData.name}_${personalData.surname}`.replace(/\s+/g, '_') || 'Matej_Kokol'
        }_${new Date().toISOString().split('T')[0]}.pdf`
        doc.save(fileName)
    }

    return {
        generateCV,
    }
}
