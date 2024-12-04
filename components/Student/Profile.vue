<template>
  <section class="px-3 pb-10 mt-5">
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-gray-300">
      <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 h-60">
        <img src="/imgs/cover-profile.jpg" class="w-full h-full object-cover object-center" loading="lazy" alt="dark" />
      </div>
      <div class="p-6">
        <div class="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
          <div class="flex items-center gap-3">
            <img v-if="props.user.photo"
              :src="props.user.oauth_type == null ? `${baseURL}/images/${props.user.photo}` : `${props.user.photo}`"
              alt="avatar" class="inline-block shadow-md relative object-cover object-center w-40 h-40 rounded-full" />
            <img v-else
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS8TjFE3RRsUZV9JietSrxIY8xke14UuulctZGjudNedC9oVgaJhQK9AE2nM8IXSXvls&usqp=CAU"
              alt="" class="w-full h-full object-cover shadow-md" />
            <div class="space-y-1">
              <h6 class="block antialiased tracking-normal text-xl font-semibold leading-relaxed text-blue-gray-900">
                {{ user["name_" + currentLocale] }}
              </h6>
              <p class="block antialiased text-lg leading-normal text-inherit font-normal text-gray-600"
                v-text="props.user.email">
              </p>
              <p class="block antialiased text-lg leading-normal text-inherit font-normal text-gray-600"
                v-text="props.user.phone">
              </p>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full font-medium"
                :class="props.user.status === 1 ? 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500'">
                {{ props.user.status ? 'مفعل' : 'غير مفعل' }}
              </span>
            </div>
          </div>
          <div class="">
            <span
              class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm p-3 rounded-lg border border-gray-400 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-2 shadow-lg">
              <Icon name="solar:calendar-broken" class="-mt-1 size-5" />
              <span> تاريخ انشاء الحساب </span>
              ({{ getDate(props.user.created_at) }})
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-5 relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-gray-300 p-6">
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <div
          class="border border-gray-400 p-4 text-center rounded-lg space-y-4 flex items-center justify-between relative">
          <div class="space-y-4">
            <strong class="block text-3xl font-bold">{{ $t("my_courses") }}</strong>
            <strong class="block text-3xl font-bold">{{ StudentStore.returnData?.courses.length }}</strong>
          </div>
          <img src="/imgs/menu-icons/256/laptop.png" class="w-16 absolute top-5 end-5" alt="">
        </div>
        <div class="border border-gray-400 p-4 text-center rounded-lg space-y-4 flex items-center justify-between relative">
          <div class="space-y-4">
            <strong class="block text-3xl font-bold">{{ $t("my_offers") }}</strong>
            <strong class="block text-3xl font-bold">{{ StudentStore.returnData?.offers.length }}</strong>
          </div>
          <img src="/imgs/menu-icons/256/coupon.png" class="w-16 absolute top-5 end-5" alt="">
        </div>
        <div class="border border-gray-400 p-4 text-center rounded-lg space-y-4 flex items-center justify-between relative">
          <div class="space-y-4">
            <strong class="block text-3xl font-bold">{{ $t("my_files") }}</strong>
            <strong class="block text-3xl font-bold">{{ StudentStore.returnData?.courses.length }}</strong>
          </div>
          <img src="/imgs/menu-icons/256/files.png" class="w-16 absolute top-5 end-5" alt="">
        </div>
        <div class="border border-gray-400 p-4 text-center rounded-lg space-y-4 flex items-center justify-between relative">
          <div class="space-y-4">
            <strong class="block text-3xl font-bold">{{ $t("my_certificates") }}</strong>
            <strong class="block text-3xl font-bold">{{ StudentStore.returnData?.certificates.length }}</strong>
          </div>
          <img src="/imgs/menu-icons/256/certificate.png" class="w-16 absolute top-5 end-5" alt="">
        </div>
        <div class="border border-gray-400 p-4 text-center rounded-lg space-y-4 flex items-center justify-between relative">
          <div class="space-y-4">
            <strong class="block text-3xl font-bold">{{ $t("my_exams") }}</strong>
            <strong class="block text-3xl font-bold">{{ StudentStore.returnData?.courses.length }}</strong>
          </div>
          <img src="/imgs/menu-icons/256/test.png" class="w-16 absolute top-5 end-5" alt="">
        </div>
        <div class="border border-gray-400 p-4 text-center rounded-lg space-y-4 flex items-center justify-between relative">
          <div class="space-y-4">
            <strong class="block text-3xl font-bold">{{ $t("invoices") }}</strong>
            <strong class="block text-3xl font-bold">{{ StudentStore.returnData?.invoices.length }}</strong>
          </div>
          <img src="/imgs/menu-icons/256/bill.png" class="w-16 absolute top-5 end-5" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const baseURL = useRuntimeConfig().public.baseURL;
const { currentLocale } = useLang();
import { useStudentStore } from "@/store/StudentStore";
const StudentStore = useStudentStore();

function getDate(date) {
  var $created_at = new Date(date);
  let year = $created_at.getFullYear();
  let month = $created_at.getMonth() < 10 ? `0${$created_at.getMonth()}` : $created_at.getMonth();
  let dey = $created_at.getDay() < 10 ? `0${$created_at.getDay()}` : $created_at.getDay();

  return `${dey}-${month}-${year}`;
}
const props = defineProps({
  user: { type: Object },
  courses: { type: Object }, // course.attachments + exams
  offers: { type: Object },
  invoices: { type: Object },
  certificates: { type: Object },
});
</script>
