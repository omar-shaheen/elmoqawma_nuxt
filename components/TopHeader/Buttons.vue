<template>
  <div class="w-1/3 hidden lg:flex items-center justify-end gap-x-4">
    <nuxt-link :to="localePath('/login')" class="custom_btn1 hover:animate-gradient-xy !text-sm !m-0 !p-1"
      v-if="!auth.isLoggedIn">
      <Icon name="lets-icons:sign-in-squre" class="text-2xl me-1" />
      {{ $t("login") }}
    </nuxt-link>
    <nuxt-link :to="localePath('/register')" class="custom_btn1 hover:animate-gradient-xy !text-sm !m-0 !p-1"
      v-if="!auth.isLoggedIn">
      <Icon name="mdi-account-plus" class="text-2xl me-1" />
      {{ $t("create_new_account") }}
    </nuxt-link>
    <button @click.stop="auth.openModalWallet = true" v-if="auth.isLoggedIn"
      class="custom_btn1 hover:animate-gradient-xy !text-sm !m-0 !p-1">
      <Icon name="solar:wallet-money-bold-duotone" class="text-2xl me-1" />
      إشحن محفظتك الأن
    </button>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
const auth = useAuthStore();
const { currentLocale } = useLang();
</script>
