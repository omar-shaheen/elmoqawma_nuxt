<template>
  <main class="">
    <div class="container mx-auto">
      <iframe class="w-full h-[60vh]" :src="returnQueryData(route.query.plan)" height="458" frameborder="0" marginheight="0" marginwidth="0">جارٍ التحميل…</iframe>
      <nuxt-link
        :to="{path: localePath(`/course/${route.params.course_id}`)}"
        type="button"
        class="text-white bg-fp1 hover:bg-fp2 border-2 border-fp2 focus:outline-none focus:ring-4 focus:ring-fp2/70 font-medium rounded-3xl py-2 transition text-center lg:text-xl w-40 block mx-auto my-6"
      >
        {{ $t("backt_to_course") }}
      </nuxt-link>
    </div>
  </main>
</template>
<script setup>
import {useTostStore} from "@/store/TostStore";
const tost = useTostStore();
const route = useRoute();
const localePath = useLocalePath();
const {t} = useI18n();
const returnQueryData = data => atob(data);
// globalStore.showHeaders = false;
// route.params.course_id
if (route.query.plan == undefined || route.query.plan == "") {
  navigateTo(localePath(`/course/${route.params.course_id}`));
}
useHead({
  title: `${t("exam")}`,
});
if (process.client) {
  console.log(localStorage.getItem("user"));
  if (localStorage.getItem("user") == null) {
    tost.add({
      type: "error",
      message: t("login_first"),
    });
    navigateTo(localePath("/login"));
  }
}
</script>
