<script setup lang="ts"></script>

<template>
  <LayoutSection>
    <h1>Matt <span class="text-primary">Kokol</span></h1>
    <div class="flex flex-col md:flex-row items-start md:items-center gap-1">
      <h4>Fullstack software developer ·</h4>
      <h4>(+421) 948 432 249 ·</h4>
      <h4><span class="text-primary">kokol.matej0@gmail.com ·</span></h4>
    </div>
    <div class="mt-10 max-w-[820px]">Hello 👋, I'm a passionate full-stack software developer dedicated to turning innovative ideas into functional, user-friendly solutions.</div>
  </LayoutSection>
  <LayoutSection title="Experience">
    <LayoutSectionExperience title="Fullstack Developer" subtitle="bAvenir s.r.o." :startDate="new Date(2023, 9)">
      <div>
        I played a crucial role in the development of an innovative platform focused on decentralized data sharing and data governance. I was responsible for design and
        implementation of User Interfaces and implementation of Server-facing part of the platform.
      </div>
      <template #technologiesDaily>
        <TechIconAngular17></TechIconAngular17>
        <TechIconPrimeNg></TechIconPrimeNg>
        <TechIconTailwindCss></TechIconTailwindCss>
        <TechIconNodeJs></TechIconNodeJs>
        <TechIconPostgreSql></TechIconPostgreSql>
      </template>
      <template #technologiesOccasinaly>
        <TechIconDocker></TechIconDocker>
        <TechIconFigma></TechIconFigma>
        <TechIconSketch></TechIconSketch>
        <TechIconNginx></TechIconNginx>
      </template>
    </LayoutSectionExperience>
    <LayoutSectionExperience title="Frontend Developer" subtitle="Ministry of Justice - Slovak Republic" :startDate="new Date(2021, 3)" :endDate="new Date(2023, 9)">
      <div>
        I contributed to the "Chance for Reentry" project, focusing on developing a mobile/kiosk application aimed at assisting reintegration efforts for formerly incarcerated
        individuals. Application is currently running in all Slovak correctional facilities.
      </div>
      <template #technologiesDaily>
        <TechIconFlutter></TechIconFlutter>
        <TechIconVuejs></TechIconVuejs>
        <TechIconVuetify></TechIconVuetify>
      </template>
      <template #technologiesOccasinaly>
        <TechIconSketch></TechIconSketch>
        <TechIconNginx></TechIconNginx>
      </template>
    </LayoutSectionExperience>
  </LayoutSection>
  <LayoutSection title="Projects"> Hello </LayoutSection>
  <LayoutSection title="Skills"> Hello </LayoutSection>
  <LayoutSection title="Education"> Hello </LayoutSection>
</template>
