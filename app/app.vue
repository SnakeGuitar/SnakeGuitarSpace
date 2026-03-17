<template>
  <div>
    <NuxtRouteAnnouncer />

    <Head>
      <Title>SnakeGuitar — Luis Donaldo Ortiz García</Title>
      <Link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&display=swap"
        rel="stylesheet" />
      <Link rel="icon" type="image/x-icon" href="/fox.ico" />
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
  script: [
    {
      innerHTML: `(function() {
        try {
          var theme = localStorage.getItem('sg-theme') || 'light';
          document.documentElement.setAttribute('data-theme', theme);
        } catch (e) {}
      })();`
    }
  ]
});
</script>