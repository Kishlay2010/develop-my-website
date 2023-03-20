<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <VLayout>
    <VAppBar>
      <VSpacer />
      <VTabs align-tabs="center" :model-value="route.path">
        <VTab value="/" to="/">Home</VTab>
        <VTab value="/about" to="/about">About</VTab>
      </VTabs>
      <VSpacer />
    </VAppBar>
    <VMain>
      <VParallax src="/img/background.jpg">
        <VContainer>
          <NuxtPage />
        </VContainer>
      </VParallax>
    </VMain>
  </VLayout>
</template>
