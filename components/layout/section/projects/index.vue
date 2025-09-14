<template>
  <LayoutSection id="projects" title="Projects">
    <LayoutSectionProjectsDetail
      title="Holup"
      subtitle="Flutter app for reintegration of ex-prisoners"
      status="production"
      :screenshots="['/images/holup/holup-kiosk.png', '/images/holup/holup-mobile.png']"
      description="Holup is a cross-platform app (kiosks, iOS, Android) built for the Slovak government to help ex-prisoners reintegrate into society. It offers job search (Profesia.sk), CV creation, housing assistance, and practical guidance for life after release. It currently runs on kiosks in all Slovak prisons."
      :features="[
        'Job search & CV builder',
        'Emergency housing finder',
        'Step-by-step reentry guidance',
        'User-friendly & secure',
        'Runs on kiosks as Flutter Web App in all Slovak prisons',
        'Downloadable app for iOS and Android after release',
      ]"
      contribution="Developed the Flutter app for kiosks, iOS, and Android. Integrated job and housing features, and focused on usability and security for a sensitive user base."
    >
      <template #techstack>
        <TechIconFlutter />
        <TechIconDart />
      </template>
      <template #links>
        <a
          href="https://play.google.com/store/apps/details?id=sk.sancananavrat.holup"
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition-colors duration-150"
        >
          <i class="devicon-google-plain colored text-2xl"></i>
          <span class="text-base">Google Play</span>
        </a>
        <a
          href="https://apps.apple.com/sk/app/holup/id6503700108"
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition-colors duration-150"
        >
          <i class="devicon-apple-original colored text-2xl"></i>
          <span class="text-base">App Store</span>
        </a>
      </template>
    </LayoutSectionProjectsDetail>

    <LayoutSectionProjectsDetail
      title="Data Sharing Platform"
      subtitle="Decentralized platform for data sharing and governance"
      status="production"
      :screenshots="['/images/spade/spade-1.png', '/images/spade/spade-2.png']"
      description="A decentralized platform for secure data sharing and governance, developed for EU Horizon projects (Auroral, Spade, Circuless) at bAvenir s.r.o. The platform enables organizations to share data and manage identities across Europe, supporting innovative and sustainable data ecosystems."
      :features="[
        'Frontend for decentralized data tools',
        'Centralized backend for identity & relationships',
        'API & service development',
        'Secure, compliant data management',
        'Collaboration on EU Horizon projects',
        'Decentralized governance features',
      ]"
      contribution="Full stack development: built user-facing components, managed backend for identities and relationships, and contributed to EU Horizon projects (Auroral, Spade, Circuless) to advance data sharing across Europe."
    >
      <template #techstack>
        <TechIconVue />
        <TechIconTypescript />
        <TechIconTailwind />
        <TechIconNode />
        <TechIconDocker />
      </template>
      <template #links>
        <a
          href="https://spade.example.com"
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition-colors duration-150"
        >
          <i class="devicon-chrome-plain colored text-2xl"></i>
          <span class="text-base">Live Demo</span>
        </a>
        <a
          href="https://github.com/KokolM/spade"
          target="_blank"
          class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition-colors duration-150"
        >
          <i class="devicon-github-original colored text-2xl"></i>
          <span class="text-base">GitHub</span>
        </a>
      </template>
    </LayoutSectionProjectsDetail>

    <LayoutSectionProjectsDetail
      title="Omnium Capital Portal"
      subtitle="Client Portal for Investment Company"
      status="production"
      :screenshots="['/images/omnium/omnium-desktop.png', '/images/omnium/omnium-mobile.png']"
      description="Engineered a secure, full-stack client portal for Omnium Capital, providing clients and staff with role-based access to investment data and tools. The platform integrates with upstream investment systems and automates data flows."
      :features="[
        'Django REST API with data sync & transformation',
        'Role-based access for clients, staff, brokers, admins',
        'Responsive Vue.js + PrimeVue frontend',
        'Secure authentication & authorization',
        'VM-based deployment with Nginx & HTTPS',
        'Scalable, robust system architecture',
      ]"
      contribution="Built the backend (Django REST), designed RBAC, developed the Vue.js frontend, and handled deployment and system architecture."
    >
      <template #techstack>
        <TechIconVue />
        <TechIconTypescript />
        <TechIconPrimeNg />
        <TechIconNode />
        <TechIconDocker />
        <TechIconNginx />
        <TechIconPostgre />
        <TechIconPython />
        <TechIconDjango />
      </template>
      <template #links>
        <span class="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 font-medium shadow-sm cursor-not-allowed"
          >Private Project</span
        >
      </template>
    </LayoutSectionProjectsDetail>

    <LayoutSectionProjectsDetail
      title="GreenCast"
      subtitle="Management portal for energy communities"
      status="production"
      :screenshots="['/images/greencast/greencast-desktop.png', '/images/greencast/greencast-mobile.png']"
      description="A client-server Nuxt application that integrates with Slovakia's Energetic Data Center (EDC) to provide simplified access and role management for renewable energy source owners. The dashboard enables solar panel owners to organize into energy communities and manage their renewable energy assets."
      :features="[
        'Integration with Slovakia EDC',
        'User role & access management',
        'Energy community management',
        'Dashboard with analytics',
        'Billing & consumption tracking',
        'Simplified EDC interface layer',
        'Client-server Nuxt architecture',
      ]"
      contribution="Developed the full Nuxt application, integrated with EDC APIs, implemented role management system, and created user-friendly interface for energy community management."
    >
      <template #techstack>
        <TechIconVue />
        <TechIconNuxt />
        <TechIconTypescript />
        <TechIconTailwind />
        <TechIconNode />
        <TechIconDocker />
      </template>
      <template #links>
        <span class="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 font-medium shadow-sm cursor-not-allowed"
          >Private Project</span
        >
      </template>
    </LayoutSectionProjectsDetail>

    <LayoutSectionProjectsDetail
      title="Heyme"
      subtitle="Task and collaboration software platform"
      status="development"
      :screenshots="['/images/heyme/heyme-desktop.png', '/images/heyme/heyme-mobile.png']"
      description="A task and collaboration software platform similar to Notion, designed to streamline team productivity and project management. The platform provides intuitive tools for task organization, team collaboration, and project tracking."
      :features="[
        'Task management & organization',
        'Team collaboration tools',
        'Project tracking & monitoring',
        'RESTful API architecture',
        'Real-time data synchronization',
        'Scalable backend infrastructure',
      ]"
      contribution="Developed the complete backend architecture and RESTful API, ensuring robust data management, real-time synchronization, and scalable infrastructure to support the collaboration platform."
    >
      <template #techstack>
        <TechIconNode />
        <TechIconTypescript />
        <TechIconPostgre />
        <TechIconDocker />
        <TechIconNginx />
      </template>
      <template #links>
        <span class="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 font-medium shadow-sm cursor-not-allowed"
          >Private Project</span
        >
      </template>
    </LayoutSectionProjectsDetail>
  </LayoutSection>
</template>
<script setup lang="ts">
// No manual imports needed for tech icons in Nuxt (auto-imported)
</script>
