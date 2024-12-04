<template>
  <section class="overflow-y-scroll lg:overflow-y-auto h-full no-scroll">
    <div class="text-center mb-6">
      <button class="relative">
        <Icon name="solar:gallery-edit-broken"
          class="bg-fpDark2 text-white hover:bg-fp2 hover:text-fpDark1 transition p-1 size-7 rounded-full absolute bottom-0 end-0 cursor-pointer"
          @click="showInputImage()" />
        <input type="file" hidden id="image" @change="e => getImage(e)" accept="image/*" />
        <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden shadow-xl">
          <img v-if="auth.user.photo"
            :src="auth.user.oauth_type == null ? `${baseURL}/images/${auth.user.photo}` : `${auth.user.photo}`" alt=""
            class="w-full h-full object-cover" />
          <img v-else
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS8TjFE3RRsUZV9JietSrxIY8xke14UuulctZGjudNedC9oVgaJhQK9AE2nM8IXSXvls&usqp=CAU"
            alt="" class="w-full h-full object-cover" />
        </div>
      </button>
      <div class="">
        <span class="font-bold text-xl text_clip">{{ auth.user["name_" + currentLocale] }}</span>
        <p class="dark:text-gray-100">{{ auth.user.email }}</p>
      </div>
    </div>
    <nav class="student overflow-hidden space-y-2 px-2">
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'profile' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('profile')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'profile' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/student.png" class="w-8" alt="">
                <span>{{ $t("profile") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'profile' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'courses' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('courses')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'courses' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/laptop.png" class="w-8" alt="">
                <span>{{ $t("my_courses") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'courses' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'offers' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('offers')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'offers' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/coupon.png" class="w-8" alt="">
                <span>{{ $t("my_offers") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'offers' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'files' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('files')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'files' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/files.png" class="w-8" alt="">
                <span>{{ $t("my_files") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'files' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'certificates' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('certificates')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'certificates' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/certificate.png" class="w-8" alt="">
                <span>{{ $t("my_certificates") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'certificates' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'exams' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('exams')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'exams' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/test.png" class="w-8" alt="">
                <span>{{ $t("my_exams") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'exams' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'invoices' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('invoices')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'invoices' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/bill.png" class="w-8" alt="">
                <span>{{ $t("invoices") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'invoices' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <div class="relative group cursor-pointer">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[StudentStore.showStudentMenu == 'settings' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text" @click="StudentStore.setValueStudentMenu('settings')"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-between gap-3"
              :class="[StudentStore.showStudentMenu == 'settings' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <div class="flex items-center gap-x-3">
                <img src="/imgs/menu-icons/256/control.png" class="w-8" alt="">
                <span>{{ $t("settings") }}</span>
              </div>

              <Icon name="solar:arrow-right-line-duotone" class="size-5 rtl:rotate-180" />
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[StudentStore.showStudentMenu == 'settings' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
    </nav>
    <section class="mt-6">
      <div class="flex flex-col bg-fp1 ms-4 me-6 lg:me-10 p-4 rounded-3xl">
        <p class="text-white text-lg lg:text-xl">{{ $t("support") }} 24/7</p>
        <span class="text-white lg:text-sm">{{ $t("Contact us at any time") }}</span>
        <button type="button"
          class="text-fp1 bg-white hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl px-8 py-2 lg:py-1 mt-2 transition text-center lg:text-xl whitespace-nowrap w-fit"></button>
        <img src="~/assets/images/student/womon.svg" alt="" class="w-40 mx-auto" />
      </div>
    </section>
    <div class="mt-8">
      <button type="button" @click="auth.logout()"
        class="flex items-center text-2xl hover:bg-gray-100 py-4 ps-6 transition w-full">
        <img src="~/assets/images/student/sign-out.svg" alt="" class="pe-6" /> <span class="text-fpDark2">{{
          $t("logout") }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useStudentStore } from "@/store/StudentStore";
const StudentStore = useStudentStore();
const auth = useAuthStore();
const baseURL = useRuntimeConfig().public.baseURL;

const { currentLocale, dir } = useLang();

const showInputImage = () => {
  document.getElementById("image").click();
};
const getImage = async e => {
  const file = e.target.files[0];
  if (!file) return;
  let formData = new FormData();
  formData.append("photo", file);
  // update image
  await useAsyncData("updateImage", () =>
    $fetch(`${apiURL}/auth/updateImage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      body: formData,
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);

        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? t("update_image_message") : `success update your image`,
        });
        document.getElementById("photo-user").src = res.user.photo;
      } else {
        console.log(res);
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
    })
  );
};
</script>
