<template>
  <section class="pb-8 lg:pb-24">
    <PageTitle :title="t('classes')" />
    <div class="container mx-auto">
      <div class="mt-10">
        <Skeleton type="image" :count="3" v-if="sections.length == 0" />
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <nuxt-link :to="localePath(`/section/${section.id}`)" v-for="section in sections" :key="section.id"
            class="rounded-2xl relative text-fp1 hover:text-fp3 dark:text-fp2 dark:hover:text-fp3">
            <img :src="`${baseURL}/images/${section.photo}`" class="rounded-2xl" alt="post image" />
            <div class="p-3 pt-0">
              <p class="custom_btn1 hover:animate-gradient-xy !text-xl" v-text="section['name_' + currentLocale]"></p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { currentLocale, dir } = useLang();
const { t } = useI18n();
const baseURL = useRuntimeConfig().public.baseURL;
let sections = ref([]);
const getSections = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/sections`).then(res => {
    if (res.status) {
      sections.value = res.data;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};

await useAsyncData("getSections", async () => {
  return getSections();
});
</script>
<style scoped>
.link_classe:hover img {
  filter: saturate(1.7);
  transform: scale(1.1);
}
</style>
