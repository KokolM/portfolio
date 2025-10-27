<template lang="">
  <LayoutSection title="Experience">
    <LayoutSectionExperienceDetail title="Fullstack Developer" subtitle="bAvenir s.r.o." :startDate="new Date(2023, 9)">
      <p>
        I contributed to the development of a decentralized data sharing and governance platform, designing user interfaces and implementing core
        server-side features. The system uses Keycloak for role-based access control and certificate-based authentication to enable secure
        machine-to-machine communication.
      </p>
      <p class="mt-6">
        In collaboration with energy experts, I developed a customer portal for energy communities in Slovakia. The platform enables users and
        administrators to manage communities, share energy, and handle transparent billing for energy production and consumption.
      </p>
      <template #technologiesFronend>
        <TechIconNuxt />
        <TechIconAngular />
        <TechIconPrimeFaces />
        <TechIconTailwind />
        <TechIconFigma />
      </template>
      <template #technologiesBackend>
        <TechIconNuxt />
        <TechIconNode />
        <TechIconPostgres />
        <TechIconPrisma />
      </template>
      <template #technologiesDevOps>
        <TechIconDocker />
        <TechIconTraefik />
        <TechIconNginx />
      </template>
      <template #relatedProjects>
        <LayoutSectionExperienceProjectCard
          title="Data Sharing Platform"
          subtitle="Decentralized platform for data sharing and governance"
          status="production"
          project-link="#data-sharing-platform"
        />
        <LayoutSectionExperienceProjectCard
          title="Greencast"
          subtitle="Energy community management and electricity sharing platform"
          status="production"
          project-link="#greencast"
        />
      </template>
    </LayoutSectionExperienceDetail>
    <LayoutSectionExperienceDetail title="Freelance Developer" subtitle="Multilpe clients" :startDate="new Date(2023, 5)">
      <p>
        As a freelance full-stack developer, I've worked on diverse projects building modern, scalable web applications. My experience includes
        creating a role-based dashboard for an investment company, implementing backend integrations with third-party APIs, and developing a
        Notion-like collaborative app for real-time content editing and teamwork.
      </p>
      <template #technologiesFronend>
        <TechIconAngular />
        <TechIconPrimeFaces />
        <TechIconTailwind />
        <TechIconNode />
        <TechIconPostgres />
      </template>
      <template #technologiesBackend>
        <TechIconDocker />
        <TechIconFigma />
        <TechIconSketch />
        <TechIconNginx />
      </template>
      <template #relatedProjects>
        <LayoutSectionExperienceProjectCard
          title="Omnium Capital Portal"
          subtitle="Client Portal for Investment Company"
          status="production"
          project-link="#omnium-capital-portal"
        />
        <LayoutSectionExperienceProjectCard
          title="HeyMe"
          subtitle="Notion-like collaborative editing platform"
          status="development"
          project-link="#heyme"
        />
      </template>
    </LayoutSectionExperienceDetail>
    <LayoutSectionExperienceDetail
      title="Frontend Developer"
      subtitle="Ministry of Justice - Slovak Republic"
      :startDate="new Date(2021, 3)"
      :endDate="new Date(2023, 9)"
    >
      <p>
        I contributed to the "Chance for Reentry" project, developing a mobile and kiosk application, along with several supporting tools, to support
        the reintegration of formerly incarcerated individuals. These applications are now deployed across all Slovak correctional facilities.
      </p>
      <template #technologiesFronend>
        <TechIconFlutter />
        <TechIconVue />
        <TechIconVuetify />
        <TechIconSketch />
      </template>
      <template #technologiesDevOps>
        <TechIconNginx />
      </template>
      <template #relatedProjects>
        <LayoutSectionExperienceProjectCard
          title="Holup"
          subtitle="Flutter app for reintegration of ex-prisoners"
          status="production"
          project-link="#holup"
        />
      </template>
    </LayoutSectionExperienceDetail>
  </LayoutSection>
</template>

<script setup lang="ts"></script>
<style lang=""></style>
