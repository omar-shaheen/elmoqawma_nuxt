<template>
  <div class="fixed start-0 top-0 w-full h-full z-[110] flex justify-center items-center">
    <span class="backdrop-blur-[3px] bg-[#00000087] w-full h-full absolute" @click="
      auth.codeWallet = '';
    auth.openModalWallet = false;
    "></span>
    <div class="relative mx-auto bg-white dark:bg-fpDark2 sm:py-4 sm:px-4 md:p-10 rounded-2xl w-[90%] lg:w-[500px]">
      <Icon @click="
        auth.codeWallet = '';
      auth.openModalWallet = false;
      " name="ic-baseline-close"
        class="absolute top-0 start-0 rtl:translate-x-[30%] ltr:translate-x-[-30%] translate-y-[-50%] bg-[#ef4444e0] transition-all hover:bg-red-600 rounded-full z-[60] text-white text-sm cursor-pointer w-8 h-8 flex justify-center items-center p-1" />

      <div>
        <form class="">
          <h2 class="text-center text-3xl font-extrabold text_clip">شحن المحفظة</h2>

          <div class="my-6 w-full mx-auto">
            <label for="code" class="block mb-2 text-sm lg:text-lg font-bold text-fpDark2 dark:text-gray-300">{{
              $t("code") }}</label>
            <div class="relative mb-6">
              <div
                class="absolute inset-y-0 end-0 flex items-center pointer-events-none px-2 rounded-e-lg">
                <!-- <Icon name="mynaui:gift" class="size-7" /> -->
                <img src="/imgs/payments/wallet-charge.png" class="size-7" alt="">
              </div>
              <input type="text" id="code"
                class="bg-gray-50 placeholder-gray-400 text-base lg:text-xl rounded-lg block w-full p-4 dark:bg-fpDark2 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-gray-200 dark:focus:border-gray-500"
                :placeholder="$t('code')" v-model="auth.codeWallet" :class="errors.has('code') ? 'is-invalid' : ''"
                required />
            </div>
            <p v-if="errors.has('code')" class="mt-2 text-sm text-red-500">{{ errors.get("code") }}</p>
          </div>

          <button type="button" @click.prevent="auth.sendCodeWallet()" class="custom_btn1 w-full !text-lg">
            <Icon name="iconoir:send-mail" class="size-7" />
            <span>إرسال</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
const auth = useAuthStore();
const errors = reactive(useErrors());
const { currentLocale } = useLang();
</script>
