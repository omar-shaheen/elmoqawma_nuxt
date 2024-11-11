<template>
  <div class="lg:container lg:mx-auto my-24" v-show="!globalStore.homeData.show">
    <Skeleton type="image_text" :count="6" />
  </div>
  <!-- {{ $nuxt.$route.name }}  thaa-->
  <div v-if="globalStore.homeData.show && Object.keys(globalStore.appSettings).length != 0">
    <HomeHero />
    <!-- <HomeNumbers /> -->

    <section class="py-8 lg:pt-24" v-if="globalStore.homeData.teachers.length > 0">
      <Waves :title="t('teachers')" />
      <div class="container mx-auto">
        <HomeTeachers :teachers="globalStore.homeData.teachers" />
      </div>
    </section>
    <section class="lg:py-0" v-if="globalStore.homeData.subjects.length > 0">
      <Waves :title="t('classes_courses')" />
      <div class="lg:container mx-auto">
        <HomeSubjects :subjects="globalStore.homeData.subjects" />
      </div>
    </section>
    <section class="lg:py-0" v-if="globalStore.homeData.sections.length > 0">
      <Waves :title="t('classes')" />
      <div class="container mx-auto">
        <HomeSections :sections="globalStore.homeData.sections" />
      </div>
    </section>
    <section class="py-8 lg:py-0" v-if="globalStore.homeData.offers.length > 0">
      <Waves :title="t('all_offers')" />
      <div class="container mx-auto">
        <HomeOffers :offers="globalStore.homeData.offers" />
      </div>
    </section>
    <section id="reviews" class="reviews pt-24" v-if="globalStore.homeData.reviews.length > 0">
      <div class="container mx-auto">
        <HomeReviews :reviews="globalStore.homeData.reviews" />
        <nuxt-link :to="localePath('/review')"
          class="text-white bg-fp2 hover:bg-fp1 transition-colors focus:ring-4 focus:ring-fp2 font-bold rounded-lg text-lg px-4 py-2.5 my-10 block focus:outline-none dark:focus:ring-fp2 w-fit mx-auto mt-10">
          <Icon name="ic-outline-mode-edit-outline" class="text-3xl -mt-2" />
          {{ $t("write_review") }}
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const { t } = useI18n();
globalStore.showHeaders = true;

await useAsyncData("getData", async () => {
  return globalStore.getDataHome();
});
useHead({
  title: t("home"),
  meta: [{ name: "title", content: t("home") }],
});
</script>

<style>
[dir="rtl"] .rounded-bs-main {
  border-bottom-right-radius: 10rem;
}

[dir="ltr"] .rounded-bs-main {
  border-bottom-left-radius: 10rem;
}

.absolute {
  position: absolute !important;
}

.hero-section .splide__track.splide__track--slide {
  height: 100% !important;
}

.hero-section .splide__track {
  height: 100%;
}
</style>
