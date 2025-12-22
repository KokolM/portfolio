import type { Education } from '~/models/education.models'

export const educationData: Record<string, Education> = {
    stu: {
        id: 'stu',
        institution: 'Slovak University of Technology in Bratislava',
        degree: "Bachelor's Degree",
        field: 'Internet Technologies',
        location: 'Bratislava, Slovakia',
        startDate: new Date(2015, 8), // September 2015
        endDate: new Date(2019, 5), // June 2019
        description: [
            'Studied at the Faculty of Informatics and Information Technologies (FIIT), focusing on modern web technologies, software engineering, and mobile application development.',
            'Gained expertise in full-stack development, database systems, and user interface design, which laid the foundation for my professional career as a software developer.',
        ],
        thesis:
            'Mobile Application for Prisoners - Developed a Flutter-based mobile application designed to support the reintegration of prisoners into society. This project evolved into the Holup app, which is now deployed across all Slovak correctional facilities.',
    },
}
