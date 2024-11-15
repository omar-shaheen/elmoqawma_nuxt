<template>
  <section
    class="relative bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] dark:bg-fpDark2">
    <footer class="bg-header py-10 relative">
      <div class="container mx-auto 2xl:px-0">
        <div class="flex flex-col items-center lg:flex-row lg:items-start gap-x-10">
          <div class="lg:w-1/4 text-center lg:text-start lg:flex flex-col justify-center items-center">
            <div class="flex items-center gap-x-2">
              <!-- <div class="border-e-4 pe-2">
                <p class="text-fp3 text-3xl font-bold">{{ $t(`site_name`) }}</p>
                <p class="text-white dark:text-white text-xs mt-4 whitespace-nowrap">{{ $t("small_text_footer") }}</p>
              </div> -->
              <div class="">
                <img src="~/assets/images/global/logo-regtangle.png" class="rounded-3xl shadow mb-3 w-2/3" alt="background footer" />
              </div>
            </div>
            <p class="text-white dark:text-white text-justify sm:mt-6"
              v-html="globalStore.appSettings.description_footer"></p>
          </div>
          <div class="lg:w-1/4 text-center lg:text-start xl:flex flex-col justify-center items-center sm:mt-6">
            <h2 class="text-white text-4xl font-bold">{{ $t("quick_links") }}</h2>
            <ul class="mt-4 space-y-2 text-xl w-[188px]">
              <li>
                <nuxt-link class="text-white hover:text-fp2 dark:text-white hover:dark:text-fp2 transition"
                  :to="localePath(`/sections`)">{{ $t("sections") }} </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition"
                  :to="localePath(`/teachers`)">{{ $t("teachers") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition"
                  :to="localePath(`/subjects`)">{{ $t("subjects") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition"
                  :to="localePath(`/offers`)">{{ $t("offers") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition"
                  :to="localePath(`/about`)">{{ $t("about") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition"
                  :to="localePath(`/review`)">{{ $t("reviews") }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 text-center lg:text-start xl:flex flex-col justify-center items-center sm:mt-6">
            <h2 class="text-white text-4xl font-bold">{{ $t("important_links") }}</h2>
            <ul class="mt-4 space-y-2 text-xl">
              <li>
                <nuxt-link :to="localePath('/privacyPolicy')"
                  class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition">{{
                    $t("privacy_policy")
                  }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/CommonQuestions')"
                  class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition">{{
                    $t("Frequently_asked_questions")
                  }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/review')"
                  class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition">{{
                    $t("number_ratings")
                  }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/contact')"
                  class="text-white dark:text-white hover:text-fp2 hover:dark:text-fp2 transition">{{ $t("contact")
                  }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div
            class="lg:w-1/4 -mt-3 text-center lg:text-start xl:flex flex-col justify-center items-center relative sm:mt-6">
            <h2 class="text-white text-4xl font-bold">{{ $t("contact") }}</h2>

            <div class="my-5 space-y-4">
              <a :href="`mailto:${globalStore.appSettings.email}`" target="_blank" v-if="globalStore.appSettings.email"
                class="text-white dark:text-white lg:text-2xl hover:text-fp1 hover:dark:text-fp1 transition block">
                <Icon class="text-2xl text-inherit" name="ic-sharp-email" />{{ globalStore.appSettings.email }}
              </a>
              <a :href="`tel: ${globalStore.appSettings.phone}`" target="_blank" v-if="globalStore.appSettings.phone"
                class="text-white dark:text-white lg:text-2xl hover:text-fp1 hover:dark:text-fp1 transition block">
                <Icon class="text-2xl text-inherit" name="ic-baseline-phone-enabled" />{{ globalStore.appSettings.phone
                }}
              </a>
              <a :href="`http://wa.me/${globalStore.appSettings.whatsapp}`" target="_blank"
                class="text-white dark:text-white lg:text-2xl hover:text-fp1 hover:dark:text-fp1 transition block">
                <Icon class="text-2xl text-inherit" name="ic-outline-admin-panel-settings" /> {{ $t("contact_manege") }}
              </a>
            </div>

            <ul class="flex items-center justify-center gap-x-4 mt-4">
              <li>
                <a :href="globalStore.appSettings.facebook" target="_blank">
                  <Icon class="text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:facebook-02" />
                </a>
              </li>
              <li>
                <a :href="globalStore.appSettings.instagram" target="_blank">
                  <Icon class="text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:instagram" />
                </a>
              </li>
              <li>
                <a :href="globalStore.appSettings.youtube" target="_blank">
                  <Icon class="text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:youtube" />
                </a>
              </li>
              <li>
                <a :href="`http://wa.me/${globalStore.appSettings.whatsapp}`" target="_blank">
                  <Icon class="text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:whatsapp-business" />
                </a>
              </li>
              <li>
                <a :href="`${globalStore.appSettings.telegram}`" target="_blank">
                  <Icon class="text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
                    name="hugeicons:telegram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="py-4 mt-10 flex items-center lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-y-6 border-t">
          <p class="text-center text-white font-medium lg:text-xl">
            {{ $t("text_footer") }} {{ $t("site_name") }} {{ $t("by") }}
            <a href="http://knowhow-solution.com/" target="_blank" class="text-fp2 font-bold lg:text-2xl text-xl">{{
              $t("knowhow")
            }}</a>
          </p>

          <ul class="flex items-center gap-1">
            <li class="">
              <img src="/imgs/payments/1.png" class="md:w-14 w-8" alt="" />
            </li>
            <li class="">
              <img src="/imgs/payments/2.png" class="md:w-14 w-8" alt="" />
            </li>
            <li class="">
              <img src="/imgs/payments/3.png" class="md:w-14 w-8" alt="" />
            </li>
            <li class="">
              <img src="/imgs/payments/4.png" class="md:w-14 w-8" alt="" />
            </li>
            <li class="">
              <img src="/imgs/payments/5.png" class="md:w-14 w-8" alt="" />
            </li>
          </ul>
        </div>

      </div>
    </footer>
  </section>
</template>

<script setup>
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const { currentLocale, dir } = useLang();
</script>
