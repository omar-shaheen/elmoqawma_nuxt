<template>
  <div>
    <div class="page-title bg-[#ede7d1] dark:bg-slate-600 py-12 relative z-10">
      <div class="container mx-auto">
        <div
          class="flex items-center md:flex-row flex-col md:gap-0 gap-y-5 md:justify-between justify-center md:text-start text-center">
          <div><strong v-if="title" class="block text-3xl text-fp3">{{ title }}</strong></div>
          <div>
            <ul class="page-title-links flex justify-end">
              <li class="px-4 relative font-medium">
                <NuxtLink to="/" class="text-fp1 hover:text-fp3">
                  <Icon name="ep:school" class="size-6" /> الرئيسية
                </NuxtLink>
              </li>
              <span class="text-fpDark1 text-lg">/</span>
              <li class="px-4 relative font-medium">
                <NuxtLink v-if="linkUrl" :to="linkUrl" class="text-fp1 hover:text-fp3">
                  <Icon name="iconamoon:category-duotone" class="size-6" />
                  {{ title }}
                </NuxtLink>
                <div v-else class="text-fpDark1">
                  <Icon name="iconamoon:category-duotone" class="size-6" />
                  {{ title }}
                </div>
              </li>
              <span v-if="currentPage" class="text-fpDark1 text-lg">/</span>
              <li v-if="currentPage" class="px-4 relative font-medium">
                <div class="text-fpDark1">
                  <Icon name="iconamoon:category-duotone" class="size-6" />
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
