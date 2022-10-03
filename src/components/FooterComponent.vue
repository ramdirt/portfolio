<script setup>
const pageUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
</script>

<template lang="pug">
.ra__block
  .pr-4(class="basis-1/4")

  .flex.gap-4.sm__gap-8.flex-col.sm__flex-row.mt-2(class="basis-3/4")
    span(class="basis-1/3")
      button.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-md.border.border-transparent.bg-gray-900.px-4.py-3.text-base.text-white.shadow-sm.text-sm.print__hidden(
        @click="pageUp"
      ) Вверх
hr.ra__hr
</template>
<style></style>
