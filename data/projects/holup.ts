import type { Project } from '~/models/project.models'

export const holup: Project = {
    id: 'holup',
    title: 'Holup',
    subtitle: 'Flutter app for reintegration of ex-prisoners',
    description: 'Flutter app for reintegration of ex-prisoners',
    longDescription:
        'Holup is a cross-platform app (kiosks, iOS, Android) built for the Slovak government to help ex-prisoners reintegrate into society. It offers job search (Profesia.sk), CV creation, housing assistance, and practical guidance for life after release. It currently runs on kiosks in all Slovak prisons.',
    features: [
        'Job search & CV builder',
        'Emergency housing finder',
        'Step-by-step reentry guidance',
        'User-friendly & secure',
        'Runs on kiosks as Flutter Web App in all Slovak prisons',
        'Downloadable app for iOS and Android after release',
    ],
    status: 'Production',
    layout: 'image-right',
    image: '/images/holup/holup-kiosk.webp',
    screenshots: [
        '/images/holup/holup-kiosk.webp',
        '/images/holup/holup-mobile.webp',
    ],
    techStack: [
        { name: 'Flutter', component: 'TechIconFlutter' },
        { name: 'Dart', component: 'TechIconDart' },
    ],
    links: [
        {
            text: 'Google Play',
            url: 'https://play.google.com/store/apps/details?id=sk.sancananavrat.holup',
            icon: 'devicon-google-plain',
        },
        {
            text: 'App Store',
            url: 'https://apps.apple.com/sk/app/holup/id6503700108',
            icon: 'devicon-apple-original',
        },
    ],
    contribution:
        'Developed the Flutter app for kiosks, iOS, and Android. Integrated job and housing features, and focused on usability and security for a sensitive user base.',
}
