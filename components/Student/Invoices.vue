<template>
  <div>
    <section class="container mx-auto lg:px-3 mt-5 bg-white dark:bg-fpDark1 relative">
      <div>
        <div class="flex items-center gap-x-5 border-b mb-4 pb-4">
          <img src="/imgs/menu-icons/256/bill.png" class="w-12" alt="">
          <h2 class="font-bold text-p-dark text-2xl lg:text-4xl text-center lg:text-start text-fpDark2 dark:text-fp1">
            {{
              $t("all_inovoices") }}</h2>
        </div>

        <div v-if="invoices.length > 0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-center text-gray-500 dark:text-gray-100">
            <thead class="text-white uppercase bg-gradient-to-r from-violet-500 to-pink-500">
              <tr class="text-lg">
                <th scope="col" class="px-3 py-3">{{ $t("number") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("course") }}/{{ $t("offer") }}/{{ $t("lecture") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("currency") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("price") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("code") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("status") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("photo_invoice") }}</th>
                <th scope="col" class="px-3 py-3">{{ $t("invoice_created_at") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="invoice in invoices" :key="invoice.id"
                class="text-xl whitespace-nowrap bg-white text-gray-600 dark:text-gray-100 border-b dark:bg-fpDark1 dark:border-fpDark2 hover:bg-gray-100 dark:hover:bg-fpDark2">
                <td class="px-6 py-4" v-text="invoice.id"></td>
                <td class="px-6 py-4">
                  <nuxt-link :to="localePath(`/${invoice.data_type}/${invoice[invoice.data_type].id}`)"
                    v-if="invoice.data_type == 'course' || invoice.data_type == 'offer'" class="btn_custom2 text-sm">
                    {{ invoice.data_type == "course" ? `${invoice.course.name} ${invoice.course.subject["name_" +
                      currentLocale]}` : invoice.offer["name_" + currentLocale] }}
                  </nuxt-link>
                  <nuxt-link :to="localePath(`/course/${invoice.lecture.course_id}`)" v-else
                    class="btn_custom2 text-sm">
                    {{ invoice.lecture.title }}
                  </nuxt-link>
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">{{
                      invoice.currency.name }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">{{
                      invoice.price }}</span>
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-gray-50 text-gray-500 dark:bg-white/10 dark:text-white">
                    {{ invoice.code == "null" || invoice.code == null ? "--" : invoice.code }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium"
                    :class="invoice.status == 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500' : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500'">
                    {{ invoice.status == 1 ? $t('Accepted') : $t('Rejected') }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="block rounded-md font-bold mx-auto">
                    <button
                      @click="globalStore.HashURLFile(`${invoice.photo != null ? `${baseURL}/images/${invoice.photo}` : ``}`)"
                      target="_blank">
                      <img v-if="invoice.photo" :src="`${baseURL}/images/${invoice.photo}`"
                        class="sm:mb-4 object-cover w-14 h-14 rounded-full inline" alt="user photo" />
                      <img v-else src="/imgs/invoices.jpeg" class="sm:mb-4 object-cover w-14 h-14 rounded-full inline"
                        alt="user photo" />
                    </button>
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-base font-medium bg-gray-50 text-gray-500 dark:bg-white/10 dark:text-white">
                    {{
                      new Date(invoice.created_at)
                        .toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })
                        .split(" ")
                        .join("/")
                    }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Empty v-else :message="$t('not_inovoices')" />
      </div>
    </section>
  </div>
</template>
<script setup>
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const props = defineProps({
  invoices: {
    type: Array,
    // required: true,
  },
});
</script>
