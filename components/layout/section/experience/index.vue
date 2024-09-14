<template lang="">
  <LayoutSection title="Experience">
    <LayoutSectionExperienceDetail title="Fullstack Developer" subtitle="bAvenir s.r.o." :startDate="new Date(2023, 9)">
      <div>
        I played a crucial role in the development of an innovative platform focused on decentralized data sharing and
        data governance. I was responsible for design and implementation of User Interfaces and implementation of
        Server-facing part of the platform.
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
    </LayoutSectionExperienceDetail>
    <LayoutSectionExperienceDetail title="Freelance Developer" subtitle="jabono.sk and others" :startDate="new Date(2023, 5)">
      <div>
        I played a crucial role in the development of an innovative platform focused on decentralized data sharing and
        data governance. I was responsible for design and implementation of User Interfaces and implementation of
        Server-facing part of the platform.
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
    </LayoutSectionExperienceDetail>
    <LayoutSectionExperienceDetail
      title="Frontend Developer"
      subtitle="Ministry of Justice - Slovak Republic"
      :startDate="new Date(2021, 3)"
      :endDate="new Date(2023, 9)"
    >
      <div>
        I contributed to the "Chance for Reentry" project, focusing on developing a mobile/kiosk application aimed at
        assisting reintegration efforts for formerly incarcerated individuals. Application is currently running in all
        Slovak correctional facilities.
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
    </LayoutSectionExperienceDetail>
  </LayoutSection>
</template>

<script setup lang="ts"></script>
<style lang=""></style>
