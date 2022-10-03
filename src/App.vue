<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<template lang="pug">
Header
main
  RouterView
Footer
</template>
