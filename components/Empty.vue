<template>
  <div class="text-center">
    <img src="/imgs/no-data.svg" class="w-60 mx-auto" alt="" />
    <div class="mt-10">
      <h2 class="lg:text-4xl text-xl text-center text-slate-700 dark:text-white font-bold leading-relaxed pb-1">
        {{ $t("sorry") }}
      </h2>
      <p class="text-center text-yellow-500 lg:text-3xl text-xl font-semibold mt-4" v-text="props.message"></p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
