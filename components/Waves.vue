<template>
  <div class="relative pt-10 bg-linearGradient mb-10">
    <div class="container mx-auto flex justify-between items-center" :class="class2">
      <strong class="block text-2xl md:text-5xl text-white font-bold" data-aos="fade-right" data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom" v-if="title">
        {{ title }}
      </strong>
      <NuxtLink :to="linkUrl" class="custom_btn1 hover:animate-gradient-xy !text-lg !m-0" v-if="linkUrl && linkTitle">
        {{ linkTitle }}
        <Icon :name="iconName ? iconName : `solar:map-arrow-left-line-duotone`" class="size-6 rotate-45" />
      </NuxtLink>
    </div>
    <div>
      <svg class="relative w-full max-h-[100px] min-h-[50px]" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none"
        shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="footer-wave-parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgb(255,255,255,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgb(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgb(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(255,255,255,1)" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  isPage: Boolean,
  linkUrl: String,
  linkTitle: String,
  iconName: String,
  class2: String
});
</script>

<style scoped>
.footer-wave-parallax>use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.footer-wave-parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.footer-wave-parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.footer-wave-parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.footer-wave-parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

.dark .footer-wave-parallax>use:nth-child(1) {
  fill: rgb(9 12 20 / 70%);
}

.dark .footer-wave-parallax>use:nth-child(2) {
  fill: rgb(9 12 20 / 50%);
}

.dark .footer-wave-parallax>use:nth-child(3) {
  fill: rgb(9 12 20 / 30%);
}

.dark .footer-wave-parallax>use:nth-child(4) {
  fill: rgb(9 12 20 / 100%);
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
