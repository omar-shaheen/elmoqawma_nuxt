<template>
  <div class="mb-0 py-24 relative z-[1]">
    <div class="lg:max-w-7xl mx-auto relative z-10">
      <div class="container px-3 mx-auto">
        <div class="grid lg:grid-cols-5 gap-10 lg:items-center">
          <div class="lg:col-span-2">
            <h2 class="sm:mt-4 font-bold text-center text-3xl lg:text-5xl text-white mb-10">{{ $t("welcome_back") }}</h2>
            <img src="/imgs/contact-01.png" class="lg:w-full w-2/3 mx-auto mb-10" alt="">
          </div>
          <div class="lg:col-span-3">
            <div class="bg-white dark:bg-fpDark2 shadow-custom1 rounded-lg py-10 px-8">
              <strong class="lg:text-3xl text-xl block text_clip text-center">{{ $t("new_account") }}</strong>
              
              <div
                class="text-center mt-2 mb-6 bg-blue-100 border border-blue-200 text-sm lg:text-lg text-blue-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500"
                role="alert" tabindex="-1" aria-labelledby="hs-soft-color-info-label">
                <span id="hs-soft-color-info-label" class="font-bold">انتبه!</span>
                يرجا كتابة اﻹسم صحيح لانه يكتب في الشهادة
              </div>

              <form @submit.prevent="submitUserRegister" method="post" action
                @keydown="errors.clear($event.target.name)">

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  <div class="lg:col-span-6">
                    <!-- <label for="name_ar"
                      class="block mb-2 text-sm lg:text-md font-medium text-fpDark2 dark:text-gray-300">{{ $t("name")
                      }}</label> -->

                    <div class="relative">
                      <input type="text" id="name_ar"
                        class="block w-full rounded-md bg-gray-50 py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        :placeholder="$t('name')" v-model="register.name_ar"
                        :class="errors.has('name_ar') ? 'is-invalid' : ''" required />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <Icon name="solar:user-id-broken" class="shrink-0 size-6 text-gray-400 dark:text-neutral-600" />
                      </div>
                    </div>

                    <p v-if="errors.has('name_ar')" class="mt-2 text-sm text-red-500">{{ errors.get("name_ar") }}</p>
                  </div>
                  <div class="lg:col-span-6">
                    <!-- <label for="phone"
                      class="block mb-2 text-sm lg:text-md font-medium text-fpDark2 dark:text-gray-300">{{
                        $t("phone_user") }}</label> -->
                    <div class="relative">
                      <input id="phone" type="text"
                        class="block w-full rounded-md bg-gray-50 py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        :placeholder="t('phone_user')" v-model="register.phone"
                        :class="errors.has('phone') ? 'is-invalid' : ''" required />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <Icon name="solar:iphone-broken" class="shrink-0 size-6 text-gray-400 dark:text-neutral-600" />
                      </div>
                    </div>
                    <p v-if="errors.has('phone')" class="mt-2 text-sm text-red-500">{{ errors.get("phone") }}</p>
                  </div>
                  <div class="lg:col-span-6">
                    <!-- <label for="phone_parent"
                      class="block mb-2 text-sm lg:text-md font-medium text-fpDark2 dark:text-gray-300">{{
                        $t("phone_parent_user") }}</label> -->
                    <div class="relative">
                      <input id="phone_parent" type="text"
                        class="block w-full rounded-md bg-gray-50 py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        :placeholder="t('phone_parent_user')" v-model="register.phone_parent"
                        :class="errors.has('phone_parent') ? 'is-invalid' : ''" required />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <Icon name="solar:smartphone-rotate-orientation-broken"
                          class="shrink-0 size-6 text-gray-400 dark:text-neutral-600" />
                      </div>
                    </div>
                    <p v-if="errors.has('phone_parent')" class="mt-2 text-sm text-red-500">{{
                      errors.get("phone_parent")
                    }}</p>
                  </div>
                  <div class="lg:col-span-6">
                    <!-- <label for="birth"
                      class="block mb-2 text-sm lg:text-md font-medium text-fpDark2 dark:text-gray-300">{{
                        $t("birth_user") }}</label> -->
                    <div class="relative">
                      <input id="birth" type="date"
                        class="block w-full rounded-md bg-gray-50 py-4 px-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        placeholder="201090844348" v-model="register.birth"
                        :class="errors.has('birth') ? 'is-invalid' : ''" required />
                    </div>
                    <p v-if="errors.has('birth')" class="mt-2 text-sm text-red-500">{{ errors.get("birth") }}</p>
                  </div>
                  <div class="lg:col-span-6">
                    <!-- <label for="success"
                      class="block mb-2 text-sm lg:text-md font-medium text-fpDark2 dark:text-gray-300">{{
                        $t("email_user") }}</label> -->
                    <div class="relative">
                      <input type="email"
                        class="block w-full rounded-md bg-gray-50 py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        v-model="register.email" placeholder="example@gmail.com"
                        :class="errors.has('email') ? 'is-invalid' : ''" required />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <Icon name="hugeicons:mail-at-sign-02"
                          class="shrink-0 size-6 text-gray-400 dark:text-neutral-600" />
                      </div>
                    </div>
                    <p v-if="errors.has('email')" class="mt-2 text-sm text-red-500">{{ errors.get("email") }}</p>
                  </div>
                  <div class="lg:col-span-6">
                    <!-- <label for="success"
                      class="block mb-2 text-sm lg:text-md font-medium text-fpDark2 dark:text-gray-300">{{
                        $t("password_user") }}</label> -->
                    <div class="relative">
                      <input :type="togglePassword ? 'text' : 'password'"
                        class="block w-full rounded-md bg-gray-50 py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        :placeholder="t('EnterPass')" v-model="register.password" required
                        :class="errors.has('password') ? 'is-invalid' : ''" />

                      <div class="absolute inset-y-0 start-0 flex items-center justify-center z-20 ps-3">
                        <Icon name="solar:password-broken"
                          class="shrink-0 size-6 text-gray-400 dark:text-neutral-600" />
                      </div>

                      <button :class="errors.has('password') ? 'is-invalid' : ''" type="button"
                        @click="togglePassword = !togglePassword"
                        class="cursor-pointer w-14 h-full absolute inset-y-0 end-0 flex items-center justify-center">
                        <img :src="togglePassword ? '/imgs/icons/eye-view.png' : '/imgs/icons/eye-hidden.png'" alt="">
                      </button>
                    </div>
                    <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
                  </div>
                </div>

                <button type="submit" class="custom_btn1 lg:w-9/12 w-full !text-xl !mt-10">
                  {{ $t("create_new_account") }}
                </button>

                <div class="text-md lg:text-xl mt-5 lg:my-10 text-center">
                  <span class="dark:text-gray-300">{{ $t("have_account") }}</span>
                  <nuxt-link :to="localePath(`/login`)" class="text-fp1 hover:text-fp3 font-bold ms-1">{{ $t("login")
                    }}</nuxt-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gradient lg:h-[400px] md:h-[250px] h-[200px] absolute top-0 w-full z-0">
      <div class="absolute bottom-0 left-0 z-[-1] w-full -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
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
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
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
import { useAuthStore } from "@/store/AuthStore";
import { useTostStore } from "@/store/TostStore";
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const route = useRoute();
const baseURL = useRuntimeConfig().public.baseURL;
const apiUrl = useRuntimeConfig().public.apiURL + "/auth";
const errors = reactive(useErrors());
const { currentLocale, dir } = useLang();
const auth = useAuthStore();
const tost = useTostStore();
const { t } = useI18n();
const localePath = useLocalePath();
let togglePassword = ref(false);

useHead({
  title: t("new_account"),
  meta: [{ name: "title", content: t("new_account") }],
});
let register = reactive({
  name_ar: "",
  phone: "",
  phone_parent: "",
  birth: "",
  email: "",
  password: "",
  roles_name: [null],
});

function validatePhoneNumber(phoneNumber) {
  // يحتوي على 11 رقم ويبدأ بـ 010، 011، 012، أو 015
  const phoneRegex = /^(010|011|012|015)\d{8}$/;
  return phoneRegex.test(phoneNumber);
}
function validateData() {
  if (register.name_ar.split(" ").length < 3) {
    tost.add({
      type: "error",
      message: "يجل ان يكون الإسم ثلاثي",
    });
    errors.record({ name_ar: "يجل ان يكون الإسم ثلاثي" });
    return false;
  }
  if (!validatePhoneNumber(register.phone)) {
    let messagePhone = "يجب ان يبداء الرقم ب (015, 012, 011, 010) وطول الرقم هوا 11 رقم";
    tost.add({
      type: "error",
      message: messagePhone,
    });
    errors.record({ phone: messagePhone });
    return false;
  }
  if (!validatePhoneNumber(register.phone_parent)) {
    let messagePhone = "يجب ان يبداء الرقم ب (015, 012, 011, 010) وطول الرقم هوا 11 رقم";
    tost.add({
      type: "error",
      message: messagePhone,
    });
    errors.record({ phone_parent: messagePhone });
    return false;
  }
  if (register.phone === register.phone_parent) {
    let messagePhoneParent = "يجب ان يكون رقم ولي الامر مختلف عن رقم الطالب";
    tost.add({
      type: "error",
      message: messagePhoneParent,
    });
    errors.record({ phone_parent: messagePhoneParent });
    return false;
  }
  return true;
}
async function submitUserRegister() {
  if (!validateData()) return false;
  try {
    await useAsyncData("register", () =>
      $fetch(`${apiUrl}/register`, {
        method: "POST",
        body: { locale: currentLocale.value, ...register },
      }).then(res => {
        if (res.status) {
          auth.setUser(res.user);
          tost.add({
            type: "success",
            message: `تم انشاء الحساب ${res.user.name_ar}`,
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
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}
</script>
