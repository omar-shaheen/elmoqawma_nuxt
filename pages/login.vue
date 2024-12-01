<template>
  <div class="mb-0 lg:py-24 py-10 relative z-[1] dark:bg-fpDark2">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="container px-3 mx-auto">
        <div class="grid lg:grid-cols-2 lg:gap-20 gap-10">
          <div class="order-2 lg:order-1">
            <div class="bg-white dark:bg-fpDark3 shadow-custom1 rounded-lg lg:pt-16 lg:pb-16 pt-5 pb-10 lg:px-8 px-4">
              <h1 class="sm:mt-10 font-bold text-center text-3xl text_clip mb-10">{{
                $t("login")
              }}</h1>
              <form @submit.prevent="submitUserLogin" @keydown="errors.clear($event.target.name)" method="post">
                <div class="mb-6">
                  <!-- <label for="success"
                    class="block mb-2 text-sm lg:text-sm font-medium text-fpDark2 dark:text-gray-300">{{
                      $t("email_user")
                    }}</label> -->
                  <div class="relative mb-6">
                    <div class="relative">
                      <input type="email"
                        class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 px-4 ps-11 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        v-model="login.email" placeholder="EX:(example@gmail.com)"
                        :class="errors.has('email') ? 'is-invalid' : ''" required />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                        <Icon name="hugeicons:mail-at-sign-02"
                          class="shrink-0 size-6 text-gray-400 dark:text-white dark:text-neutral-600" />
                      </div>
                    </div>
                    <p v-if="errors.has('email')" class="mt-2 text-sm text-red-500">{{ errors.get("email") }}</p>
                  </div>
                </div>

                <div class="mb-6">
                  <!-- <label for="success"
                    class="block mb-4 text-sm lg:text-sm font-medium text-fpDark2 dark:text-gray-300">{{
                      $t("password_user") }}</label> -->
                  <div class="relative">

                    <div class="relative">
                      <input :type="togglePassword ? 'text' : 'password'"
                        class="block w-full rounded-md bg-gray-50 dark:bg-fpDark2 dark:text-white py-4 ps-11 pe-14 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        :placeholder="t('EnterPass')" v-model="login.password"
                        :class="errors.has('password') ? 'is-invalid' : ''" required />

                      <div class="absolute inset-y-0 start-0 flex items-center justify-center z-20 ps-3">
                        <Icon name="solar:password-broken"
                          class="shrink-0 size-6 text-gray-400 dark:text-white dark:text-neutral-600" />
                      </div>

                      <button :class="errors.has('password') ? 'is-invalid' : ''" type="button"
                        @click="togglePassword = !togglePassword"
                        class="cursor-pointer w-14 h-full absolute inset-y-0 end-0 flex items-center justify-center">
                        <img :src="togglePassword ? '/imgs/icons/eye-view.png' : '/imgs/icons/eye-hidden.png'" alt="">
                      </button>
                    </div>
                  </div>
                  <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
                </div>
                <div class="flex justify-between items-center flex-wrap gap-5">
                  <!-- Remeber me -->
                  <div class="flex gap-3">
                    <div class="flex h-6 shrink-0 items-center">
                      <div class="group grid size-4 grid-cols-1">
                        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                          checked value=""
                          class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-violet-500 checked:bg-violet-500 indeterminate:border-violet-500 indeterminate:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto cursor-pointer">
                        <svg
                          class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          viewBox="0 0 14 14" fill="none">
                          <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                          <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div class="text-sm/6">
                      <label for="comments" class="font-medium text-lg text-gray-900 dark:text-white hover:text-fp1 cursor-pointer">{{
                        $t("remember")
                      }}</label>
                    </div>
                  </div>

                  <!-- Call us to change passsword -->
                  <a :href="`http://wa.me/${globalStore.appSettings.whatsapp}`" target="_blank"
                    class="font-medium text-fpDark3 dark:text-white hover:text-fp3">{{ $t("forgot_password") }}</a>
                </div>
                <button type="submit" class="custom_btn1 lg:w-9/12 w-full !text-xl mt-10">
                  {{ $t("login") }}
                </button>

                <div class="flex items-center justify-center gap-5 mt-10">
                  <span class="w-2/6 h-1 bg-linearGradient3 rounded-full"></span>
                  <p class="text_clip font-bold !text-xl lg:!text-2xl">{{ $t("or_register_from") }}</p>
                  <span class="w-2/6 h-1 bg-linearGradient3 rounded-full"></span>
                </div>
                <div class="text-sm lg:text-xl mt-5 lg:mt-10 text-center">
                  <span class="dark:text-gray-300">{{ $t("dont_account") }}</span>
                  <nuxt-link :to="localePath(`/register`)"
                    class="text-fp1 dark:text-fp2 hover:text-fp3 font-bold ms-1">{{
                      $t("new_account") }}</nuxt-link>
                </div>
              </form>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="md:py-10 w-full h-full flex flex-col items-center">
              <h2 class="font-bold text-center text-2xl lg:text-3xl text-white my-10">{{ $t("login_video") }}</h2>
              <div class="lg:w-full md:w-2/3 w-full rounded-3xl shadow-2xl overflow-hidden"
                v-if="globalStore.appSettings.bg_login">
                <vue-plyr ref="plyr">
                  <div data-plyr-provider="youtube" :data-plyr-embed-id="globalStore.appSettings.bg_login"></div>
                </vue-plyr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gradient md:h-[400px] h-[300px] absolute top-0 w-full z-0">
      <div class="absolute bottom-0 left-0 z-[-1] w-full -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" :fill="globalStore.mode == 'dark' ? '#25293c' : '#fff'" fill-rule="nonzero">
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
            <g transform="translate(-4.000000, 76.000000)" :fill="globalStore.mode == 'dark' ? '#25293c' : '#fff'" fill-rule="nonzero">
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
const baseURL = useRuntimeConfig().public.baseURL;
const { currentLocale, dir } = useLang();
const errors = reactive(useErrors());
let togglePassword = ref(false);
const apiUrl = useRuntimeConfig().public.apiURL + "/auth";
const auth = useAuthStore();
const tost = useTostStore();
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("login"),
  meta: [{ name: "title", content: t("login") }],
});
if (process.client && localStorage.getItem("user") != null) {
  navigateTo(localePath("/"));
}

let login = reactive({
  email: "",
  password: "",
});
let user = reactive({
  id: "",
  oauth_type: "",
  name: "",
  email: "",
  photo: null,
});

async function submitUserLogin() {
  await useAsyncData("login", () =>
    $fetch(`${apiUrl}/login`, {
      method: "POST",
      body: { locale: currentLocale.value, ...login },
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);
        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? `مرحبًا بعودتك ${res.user["name_" + currentLocale.value]}` : `Welcome back ${res.user["name_" + currentLocale.value]}`,
        });
        globalStore.notificationsUser();
        navigateTo(localePath(globalStore.redirectUrl ?? "/"));
      } else {
        if (res.errCode == 422) {
          errors.record({ password: res.message });
        }
        tost.add({
          type: "error",
          message: res.message,
        });
      }
    })
  );
}

async function onResponceLoginSocial() {
  await useAsyncData("socialLogin", () =>
    $fetch(`${apiUrl}/socialLogin`, {
      method: "POST",
      body: { locale: currentLocale.value, ...user },
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);
        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? `مرحبًا بعودتك ${res.user["name_" + currentLocale.value]}` : `Welcome back ${res.user["name_" + currentLocale.value]}`,
        });
        navigateTo(localePath("/"));
      } else {
        if (res.errCode == 422) {
          errors.record({ password: res.message });
        }
        tost.add({
          type: "error",
          message: res.message,
        });
      }
    })
  );
}
const returnDataGoogle = credential => {
  const res = fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`).then(res => {
    return res.json();
  });
  res.then(res => {
    user.id = res.sub;
    user.oauth_type = "google";
    user["name_" + currentLocale.value] = res.name;
    user.email = res.email;
    user.photo = res.picture;
    onResponceLoginSocial();
  });
};
/* onMounted(() => {
  function handleCredentialResponse(response) {
    returnDataGoogle(response.credential);
  }
  google.accounts.id.initialize({
    client_id: "309314815545-qi9o7jvgj7k5ok4kfonlcguauptadasg.apps.googleusercontent.com",
    callback: handleCredentialResponse, //method to run after user clicks the Google sign in button
  });
  google.accounts.id.renderButton(document.getElementById("googleButton"), {theme: "outline", size: "large"});
  //google.accounts.id.prompt(); // also display the One Tap dialog

  // ==================================== facebook ==================================================================
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v15.0&appId=517999570183481&autoLogAppEvents=1";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
  window.checkLoginState = function () {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };

  function statusChangeCallback(response) {
    if (response.status === "connected") {
      testAPI(response.authResponse);
    }
  }

  window.fbAsyncInit = function () {
    FB.init({
      appId: "517999570183481",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
  };

  function testAPI(resInfoUser) {
    FB.api(`/${resInfoUser.userID}?fields=id,name,email,picture&access_token=${resInfoUser.accessToken}`, function (response) {
      user.id = response.id;
      user.oauth_type = "facebook";
      user["name_" + currentLocale.value] = response.name;
      user.email = response.email;
      user.photo = response.picture.data.url;
      onResponceLoginSocial();
    });
    FB.api("/me", function (response) {
    });
  }
}); */
</script>
