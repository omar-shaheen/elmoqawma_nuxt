<template>
  <div class="mb-0 py-24 relative z-[1] dark:bg-fpDark2">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="container px-3 mx-auto">
        <div class="grid lg:grid-cols-2 lg:gap-20 gap-10">
          <div class="order-2 lg:order-1">
            <div class="bg-white dark:bg-fpDark3 shadow-custom1 rounded-lg py-10 px-8">
              <strong class="lg:text-2xl text-xl block text_clip text-center">{{ $t("desc_contact") }}</strong>
              <form @submit.prevent="sendMessage" method="post" action @keydown="errors.clear($event.target.name)">
                <div class="mb-6 mt-10">
                  <div class="relative">
                    <input type="text"
                      class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      :class="errors.has('title') ? 'is-invalid' : ''" v-model="contact.title"
                      :placeholder="$t('title')" required>
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <Icon name="solar:pen-new-round-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
                    </div>
                  </div>

                  <p v-if="errors.has('title')" class="mt-2 text-sm text-red-500">{{ errors.get("title") }}</p>
                </div>
                <div class="mb-6">
                  <div class="relative">
                    <textarea id="message" rows="4"
                      class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      :placeholder="$t('write_message')" :class="errors.has('message') ? 'is-invalid' : ''"
                      v-model="contact.message" required></textarea>
                    <div class="absolute top-4 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <Icon name="material-symbols:edit-note" class="shrink-0 size-7 text-gray-400 dark:text-white" />
                    </div>
                  </div>

                  <p v-if="errors.has('message')" class="mt-2 text-sm text-red-500">{{ errors.get("message") }}</p>
                </div>
                <button type="submit" class="custom_btn1 lg:w-9/12 w-full !text-xl mt-10">
                  {{ $t("submit") }}
                </button>
              </form>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <img src="/imgs/contact-01.png" class="lg:w-2/3 w-2/3 mx-auto mb-10" alt="">
            <h2 class="border-b pb-4 text-xl md:text-3xl font-bold dark:text-white">{{ $t("contact") }}</h2>
            <div class="space-y-3 mt-5">
              <a :href="`tel: ${globalStore.appSettings.phone}`" target="_blank" class="block text-xl dark:text-white hover:text-fp3">
                <Icon class="text-3xl text-inherit me-2" name="solar:phone-calling-broken" />
                {{ globalStore.appSettings.phone }}
              </a>
              <a :href="`mailto:${globalStore.appSettings.email}`" target="_blank" class="block text-xl dark:text-white hover:text-fp3">
                <Icon class="text-3xl text-inherit me-2" name="solar:streets-navigation-broken" />
                {{ globalStore.appSettings.email }}
              </a>
            </div>

            <ul class="flex items-center justify-center gap-x-4 mt-8">
              <li>
                <a :href="globalStore.appSettings.facebook" target="_blank">
                  <Icon class="text-fpDark2 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:facebook-02" />
                </a>
              </li>
              <li>
                <a :href="globalStore.appSettings.instagram" target="_blank">
                  <Icon class="text-fpDark2 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:instagram" />
                </a>
              </li>
              <li>
                <a :href="globalStore.appSettings.youtube" target="_blank">
                  <Icon class="text-fpDark2 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:youtube" />
                </a>
              </li>
              <li>
                <a :href="`http://wa.me/${globalStore.appSettings.whatsapp}`" target="_blank">
                  <Icon class="text-fpDark2 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:whatsapp-business" />
                </a>
              </li>
              <li>
                <a :href="`${globalStore.appSettings.telegram}`" target="_blank">
                  <Icon class="text-fpDark2 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:telegram" />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
    <div class="gradient lg:h-[400px] md:h-[250px] h-[200px] absolute top-0 w-full z-0">
      <div class="absolute bottom-0 left-0 z-[-1] w-full -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" :fill="globalStore.mode == 'dark' ? '#25293c' : '#fff'"
              fill-rule="nonzero">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" :fill="globalStore.mode == 'dark' ? '#25293c' : '#fff'"
              fill-rule="nonzero">
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/GlobalStore";
import { useAuthStore } from "@/store/AuthStore";
import { useTostStore } from "@/store/TostStore";
const baseURL = useRuntimeConfig().public.baseURL;
const auth = useAuthStore();
const tost = useTostStore();
const apiUrl = useRuntimeConfig().public.apiURL;
const errors = reactive(useErrors());
const globalStore = useGlobalStore();
const { currentLocale, dir } = useLang();
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("contact"),
  meta: [{ name: "title", content: t("contact") }],
});

let contact = reactive({
  title: "",
  message: "",
});
const sendMessage = async () => {
  /* if (Object.keys(auth.user).length <= 0 && localStorage.getItem("user") == null) {
    localePath("/login");
    tost.add({
      type: "error",
      message: "يجب تسجيل الدخول اولا",
    });
  } */
  try {
    await useAsyncData("sendMessage", () =>
      $fetch(`${apiUrl}/sendMessage`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: { locale: currentLocale.value, ...contact },
      }).then(res => {
        if (res.status) {
          tost.add({
            type: "success",
            message: currentLocale.value == "ar" ? `تم ارسال رسالتك الي المسؤولين` : `success send your message`,
          });
          navigateTo(localePath("/"));
        } else {
          if (res.errCode == 422) {
            let ob = {};
            for (const [key, value] of Object.entries(res.message)) {
              ob[key] = value[0];
              tost.add({
                type: "error",
                message: value[0],
              });
            }
            errors.record(ob);
          } else if (res.errCode == 0) {
            navigateTo(localePath("/login"));
            tost.add({
              type: "error",
              message: res.message,
            });
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
};
</script>
