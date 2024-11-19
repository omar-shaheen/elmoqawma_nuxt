<template>
  <div class="fixed start-0 top-0 w-screen h-full z-[110] grid place-content-center">
    <span class="backdrop-blur-[3px] bg-[#00000087] w-full h-full absolute"
      @click="PayStore.setPayData('show', false)"></span>
    <div class="relative lg:mx-auto mx-5 bg-white dark:bg-fpDark2 md:p-10 p-4 py-6 rounded-2xl md:w-auto w-[300px]">
      <Icon @click="PayStore.setPayData('show', false)" name="ic-baseline-close"
        class="absolute top-0 start-0 rtl:translate-x-[30%] ltr:translate-x-[-30%] translate-y-[-50%] bg-[#ef4444e0] transition-all hover:bg-red-600 rounded-full z-[60] text-white text-sm cursor-pointer w-8 h-8 flex justify-center items-center p-1" />
      <ul
        class="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-3 gap-x-1 text-sm font-medium text-center text-gray-500 -b border-gray-200 dark:border-fpDark2 dark:text-gray-400 w-full mb-10 whitespace-nowrap">
        <li class="">
          <button type="button" @click.stop="PayStore.setPayData('type', 'cash')" aria-current="page"
            class="flex items-center md:flex-col flex-row-reverse justify-between md:rounded-t-lg dark:bg-fpDark1 dark:text-sky-500 w-full h-full lg:py-4 lg:px-4 py-3 px-2"
            :class="`${payData.type == 'cash' ? 'bg-gray-200 active text-fp1' : 'hover:bg-gray-200 hover:text-fp1'}`">
            <img src="/imgs/payments/vodafonecash.png" alt="" class="w-14 h-14 inline-block ml-2" />
            <span class="mt-2 text-base lg:text-sm">{{ $t("pay_cash") }}</span>
          </button>
        </li>
        <li class="">
          <button type="button" @click.stop="PayStore.setPayData('type', 'code')"
            class="flex items-center md:flex-col flex-row-reverse justify-between md:rounded-t-lg dark:bg-fpDark1 dark:text-sky-500 w-full h-full lg:py-4 lg:px-4 py-3 px-2"
            :class="`${payData.type == 'code' ? 'bg-gray-200 active text-fp1' : 'hover:bg-gray-200 hover:text-main_color_hover_2'}`">
            <img src="/imgs/payments/qr-code.png" alt="" class="w-14 h-14 inline-block ml-2" />
            <span class="mt-2 text-base lg:text-sm"> الدفع عن طريق الكود</span>
          </button>
        </li>
        <li class="">
          <button type="button" @click.stop="PayStore.setPayData('type', 'wallet')"
            class="flex items-center md:flex-col flex-row-reverse justify-between md:rounded-t-lg dark:bg-fpDark1 dark:text-sky-500 w-full h-full lg:py-4 lg:px-4 py-3 px-2"
            :class="`${payData.type == 'wallet' ? 'bg-gray-200 active text-fp1' : 'hover:bg-gray-200 hover:text-main_color_hover_2'}`">
            <img src="~/assets/images/global/wallet.png" alt="" class="w-14 h-14 inline-block ml-2" />
            <span class="mt-2 text-base lg:text-sm"> الدفع عن طريق المحفظة</span>
          </button>
        </li>
        <!-- <li class="w-1/2">
            <button
              type="button"
              @click.stop="payData.type = 'online'"
              href="#"
              class="p-4 rounded-tl-lg dark:hover:bg-fpDark1 dark:hover:text-gray-300 w-full flex justify-center items-center sm:flex-col"
              :class="`${payData.type == 'online' ? 'bg-gray-200 active text-fp1' : 'hover:bg-gray-200 hover:text-main_color_hover_2'}`"
            >
              <img src="~/assets/images/global/cash.png" alt="" class="w-10 h-10 inline-block ml-2" />
              <span class="mt-2"> الدفع عن طريق بطاقة الإئتمان</span>
            </button>
          </li> -->
      </ul>
      <div>
        <form class="">
          <!-- <h2 class="text-center text-3xl font-medium">أختر طريقة الدفع المناسبة لك</h2> -->
          <div class="grid md:grid-cols-2 md:gap-6 gap-2">
            <div
              class="bg-slate-800 rounded flex justify-between items-center md:px-3 px-1 md:py-6 py-2 flex-col gap-y-5"
              v-if="payData.type == 'cash'">
              <p class="md:text-lg lg:text-xl text-white font-bold">{{ $t("pay_cash") }}:</p>
              <p class="md:text-2xl text-white font-bold">{{ globalStore.appSettings.vodafone_cash }}</p>
            </div>
            <div
              class="bg-slate-800 rounded flex justify-between items-center md:px-3 px-1 md:py-6 py-2 flex-col gap-y-5"
              v-if="payData.type == 'cash'">
              <p class="md:text-lg lg:text-xl text-white font-bold">{{ $t("pay_instapay") }}:</p>
              <p class="md:text-2xl text-white font-bold">{{ globalStore.appSettings.instapay }}</p>
            </div>
          </div>

          <div class="w-full mx-auto" v-show="payData.type == 'code' && payData.type != 'wallet'">
            <label for="code" class="block mb-2 font-semibold text-fpDark2 dark:text-gray-300">{{
              $t("code") }}</label>
            <div class="relative mb-6">
              <div
                class="absolute inset-y-0 end-0 flex items-center pointer-events-none bg-slate-200 dark:bg-sky-500 dark:text-white px-4 rounded-e-lg z-10">
                <Icon name="ic:outline-card-giftcard" class="text-start text-2xl text-slate-600" />
              </div>
              <input type="text" id="code"
                class="block w-full px-5 py-4 text-base placeholder-gray-700 placeholder:text-sm transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-[#f0f0f0] focus:bg-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                :placeholder="$t('code')" @input="e => PayStore.setPayData('code', e.target.value)"
                :class="errors.has('code') ? 'is-invalid' : ''" required />
            </div>
            <p v-if="errors.has('code')" class="mt-2 text-sm text-red-500">{{ errors.get("code") }}</p>
          </div>

          <p v-if="payData.type === 'wallet'" class="mt-2 text-4xl text-green-500">
            {{ $t("balance") }} : <span class="font-bold">{{ auth.user.balance }}</span>
          </p>
          <!-- <img src="~/assets/images/global/info_cash.jpg" alt="" /> -->
          <label v-show="payData.type == 'cash'" for="imagePay"
            class="text-sm text-gray-600 dark:text-fpLightBack flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300 dark:bg-sky-500 dark:hover:bg-fp2 p-2 py-4 mt-8 font-bold">
            <input type="file" hidden id="imagePay" @change="e => PayStore.setPayData('photo', e.target)"
              accept="image/*" />
            <span v-if="payData.spinnerPhoto"
              class="w-6 h-6 border-2 border-gray-500 border-t-transparent rounded-full my-rotate ml-2"></span>
            <Icon name="ic-twotone-cloud-upload" class="md:text-4xl text-xl text-slate-600 ml-4" />
            <span class="md:text-2xl text-[12px] whitespace-nowrap">{{ payData.spinnerPhoto ? $t("process_reset") :
              $t("click_upload_reset") }}</span>
          </label>
          <button type="button" @click.prevent="PayStore.sendDataPay()" class="custom_btn1 w-full !text-xl">
            <span>{{ $t("subscription") }}</span>
            <Icon name="ic:baseline-check-circle-outline" class="size-6" />
          </button>
        </form>
        <div v-if="payData.type == 'online'" class="grid grid-cols-1 lg:grid-cols-5 gap-y-4">
          <ul class="flex items-center">
            <li>
              <img src="~/assets/images/global/instapay.png" alt="" class="w-20" />
            </li>
            <li class="mx-3">
              <img src="~/assets/images/global/visa.png" alt="" class="w-20" />
            </li>
            <li>
              <img src="~/assets/images/global/mastercard.png" alt="" class="w-20" />
            </li>
          </ul>
          <button id="pay-online" class="custom_btn1 w-full !text-xl">
            <span class="hidden w-6 h-6 border-2 border-white border-t-transparent rounded-full my-rotate ml-2"></span>
            <Icon name="ic-baseline-payment" class="size-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGlobalStore } from "@/store/GlobalStore";
import { useAuthStore } from "@/store/AuthStore";
import { usePayStore } from "@/store/PayStore";
const PayStore = usePayStore();
const globalStore = useGlobalStore();
const payData = PayStore.getPayData;
const auth = useAuthStore();
const errors = reactive(useErrors());
</script>
