<template>
  <div>
    <div
      class="page-title bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] dark:bg-slate-600 md:py-12 py-6 relative z-10">
      <div class="container mx-auto">
        <div
          class="flex items-center md:flex-row flex-col md:gap-0 gap-y-5 md:justify-between justify-center md:text-start text-center">
          <div><strong v-if="title" class="block lg:text-3xl text-xl text-white">{{ title }}</strong></div>
          <div>
            <ul class="page-title-links flex justify-end">
              <li class="md:px-4 px-2 relative font-medium">
                <NuxtLink to="/" class="text-white hover:text-fp2">
                  <Icon name="ep:school" class="md:size-6 size-4" /> الرئيسية
                </NuxtLink>
              </li>
              <span class="text-fp2 md:text-lg text-base">/</span>
              <li class="md:px-4 px-2 relative font-medium">
                <NuxtLink v-if="linkUrl" :to="linkUrl" class="text-white hover:text-fp2">
                  <Icon name="iconamoon:category-duotone" class="md:size-6 size-4" />
                  {{ title }}
                </NuxtLink>
                <div v-else class="text-fp2">
                  <Icon name="iconamoon:category-duotone" class="md:size-6 size-4" />
                  {{ title }}
                </div>
              </li>
              <span v-if="currentPage" class="text-fp2 md:text-lg text-base">/</span>
              <li v-if="currentPage" class="md:px-4 px-2 relative font-medium">
                <div class="text-fp2">
                  <Icon name="iconamoon:category-duotone" class="md:size-6 size-4" />
                  {{ currentPage }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  linkUrl: String,
  linkTitle: String,
  iconName: String,
  currentPage: String,
});
</script>

<style scoped></style>
