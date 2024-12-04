<template>
  <section class="">
    <div class="container mx-auto mt-5 mb-10 lg:px-3 space-y-4">
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-gray-300">
        <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 h-60">
          <img src="/imgs/cover-profile.jpg" class="w-full h-full object-cover object-center" loading="lazy"
            alt="dark" />
        </div>
        <div class="p-6">
          <div class="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div class="flex items-center gap-3">
              <img v-if="props.user.photo"
                :src="props.user.oauth_type == null ? `${baseURL}/images/${props.user.photo}` : `${props.user.photo}`"
                alt="avatar"
                class="inline-block shadow-md relative object-cover object-center w-40 h-40 rounded-full" />
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

      <fieldset class="rounded-xl bg-white border border-gray-300 p-6">
        <legend class="text_clip font-bold text-center text-2xl lg:text-4xl">{{ $t("edit_account") }}</legend>
        <form @submit.prevent="onSubmitUpdate" method="post" action @keydown="errors.clear($event.target.name)">
          <div class="grid lg:grid-cols-12 grid-cols-1 gap-5">
            <div class="lg:col-span-6">
              <label for="name_ar"
                class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{ $t("name_ar")
                }}</label>
              <div class="relative">
                <input type="text" id="name_ar"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  :placeholder="$t('name_ar')" v-model="updateValue.name_ar"
                  :class="errors.has('name_ar') ? 'is-invalid' : ''" required />
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <Icon name="solar:user-id-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
                </div>
              </div>
              <p v-if="errors.has('name_ar')" class="mt-2 text-sm text-red-500">{{ errors.get("name_ar") }}</p>
            </div>
            <div class="lg:col-span-6">
              <label for="name_en"
                class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{ $t("name_en")
                }}</label>
              <div class="relative">
                <input type="text" id="name_en"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  :placeholder="$t('name_en')" v-model="updateValue.name_en"
                  :class="errors.has('name_en') ? 'is-invalid' : ''" required />
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <Icon name="solar:user-id-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
                </div>
              </div>
              <p v-if="errors.has('name_en')" class="mt-2 text-sm text-red-500">{{ errors.get("name_en") }}</p>
            </div>
            <div class="lg:col-span-4">
              <label for="phone" class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{
                $t("phone_user") }}</label>
              <div class="relative">
                <input id="phone" type="text"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="201090844348" v-model="updateValue.phone"
                  :class="errors.has('phone') ? 'is-invalid' : ''" required />

                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <Icon name="solar:iphone-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
                </div>
              </div>
              <p v-if="errors.has('phone')" class="mt-2 text-sm text-red-500">{{ errors.get("phone") }}</p>
            </div>
            <div class="lg:col-span-4">
              <label for="birth" class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{
                $t("birth_user") }}</label>
              <div class="relative">
                <input id="birth" type="date"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-14 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="201090844348" v-model="updateValue.birth"
                  :class="errors.has('birth') ? 'is-invalid' : ''" required />
                <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <Icon name="fluent-mdl2:birthday-cake" class="shrink-0 -mt-2 size-6 text-gray-400 dark:text-white" />
                </div>
              </div>
              <p v-if="errors.has('birth')" class="mt-2 text-sm text-red-500">{{ errors.get("birth") }}</p>
            </div>
            <div class="lg:col-span-4">
              <label for="success"
                class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{
                  $t("email_user")
                }}</label>
              <div class="relative">
                <input type="email"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="yourname" v-model="updateValue.email" :class="errors.has('email') ? 'is-invalid' : ''"
                  required />
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <Icon name="hugeicons:mail-at-sign-02" class="shrink-0 size-6 text-gray-400 dark:text-white" />
                </div>
              </div>
              <p v-if="errors.has('email')" class="mt-2 text-sm text-red-500">{{ errors.get("email") }}</p>
            </div>
            <div class="lg:col-span-4">
              <div class="relative">
                <label for="oldPassword" class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{
                  $t("old_password") }}</label>
                <div class="relative">
                  <input id="oldPassword" name="old_password" :placeholder="t('old_password')"
                    class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    v-model="updateValue.old_password" :type="togglePassword ? 'text' : 'password'"
                    :class="errors.has('password') ? 'is-invalid' : ''" />

                  <div class="absolute inset-y-0 start-0 flex items-center justify-center z-20 ps-3">
                    <Icon name="solar:password-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
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
            <div class="lg:col-span-4">
              <label for="password" class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{
                $t("new_password") }}</label>
              <div class="relative">
                <input :type="togglePassword ? 'text' : 'password'"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="********" v-model="updateValue.password"
                  :class="errors.has('password') ? 'is-invalid' : ''" />

                <div class="absolute inset-y-0 start-0 flex items-center justify-center z-20 ps-3">
                  <Icon name="solar:password-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
                </div>

                <button :class="errors.has('password') ? 'is-invalid' : ''" type="button"
                  @click="togglePassword = !togglePassword"
                  class="cursor-pointer w-14 h-full absolute inset-y-0 end-0 flex items-center justify-center">
                  <img :src="togglePassword ? '/imgs/icons/eye-view.png' : '/imgs/icons/eye-hidden.png'" alt="">
                </button>
              </div>
              <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
            </div>
            <div class="lg:col-span-4">
              <label for="cpassword" class="block mb-2 text-sm lg:text-base font-medium text-fpDark2 dark:text-gray-300">{{
                $t("confirm_password") }}</label>
              <div class="relative">
                <input :type="togglePassword ? 'text' : 'password'"
                  class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="********" v-model="updateValue.password_confirmation"
                  :class="errors.has('password') ? 'is-invalid' : ''" />

                <div class="absolute inset-y-0 start-0 flex items-center justify-center z-20 ps-3">
                  <Icon name="solar:password-broken" class="shrink-0 size-6 text-gray-400 dark:text-white" />
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
          <div class="mt-10 flex items-center justify-between">
            <button type="submit" class="custom_btn1 !m-0">
              <Icon name="dashicons-update2" class="size-7" /> {{ $t("update_account") }}
            </button>
            <button type="button" @click="StudentStore.setValueStudentMenu('profile')" class="btn_custom2">
              <Icon name="ri:user-3-fill" class="size-7" /> {{ $t("profile") }}
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  </section>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useTostStore } from "@/store/TostStore";
import { useStudentStore } from "@/store/StudentStore";
const baseURL = useRuntimeConfig().public.baseURL;
const StudentStore = useStudentStore();
const apiUrl = useRuntimeConfig().public.apiURL + "/auth";
const auth = useAuthStore();
const errors = reactive(useErrors());
const { currentLocale, dir } = useLang();
const { t } = useI18n();
let togglePassword = ref(false);
let startValueEmail = ref(auth.user.email.slice(0, auth.user.email.indexOf("@")));
const tost = useTostStore();

let updateValue = reactive({
  name_ar: auth.user.name_ar,
  name_en: auth.user.name_en,
  phone: auth.user.phone,
  birth: auth.user.birth,
  email: auth.user.email,
  old_password: "",
  password: "",
  password_confirmation: "",
});

const props = defineProps({
  user: { type: Object },
});

function getDate(date) {
  var $created_at = new Date(date);
  let year = $created_at.getFullYear();
  let month = $created_at.getMonth() < 10 ? `0${$created_at.getMonth()}` : $created_at.getMonth();
  let dey = $created_at.getDay() < 10 ? `0${$created_at.getDay()}` : $created_at.getDay();

  return `${dey}-${month}-${year}`;
}

const onSubmitUpdate = async () => {
  if (updateValue.old_password == "" || updateValue.password == "" || updateValue.password_confirmation == "") {
    delete updateValue.old_password;
    delete updateValue.password;
    delete updateValue.password_confirmation;
  }
  try {
    await useAsyncData("update", () =>
      $fetch(`${apiUrl}/update`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: { locale: currentLocale.value, ...updateValue },
      }).then(res => {
        if (res.status) {
          auth.setUser(res.user);
          tost.add({
            type: "success",
            message:
              currentLocale.value == "ar" ? `تم تعديل المستخدم ${res.user["name_" + currentLocale.value]}` : `success update user ${res.user["name_" + currentLocale.value]}`,
          });
        } else {
          if (res.errCode == 422) {
            let ob = {};
            for (const [key, value] of Object.entries(res.message)) {
              ob[key] = value[0];
              /* tost.add({
                type: "error",
                message: value[0],
              }); */
            }
            errors.record(ob);
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
};
</script>
