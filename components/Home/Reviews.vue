<template>
  <ClientOnly>

    <div class="flex flex-col lg:flex-row place-content-center">

      <!-- Left Side: Selected Testimonial -->
      <div class="lg:p-4 lg:w-5/12 order-2 lg:order-1">
        <div v-if="selectedReview">
          <div class="shadow-md rounded-lg dark:bg-fpDark2 border border-gray-100 flex flex-col h-full">
            <div class="p-3 lg:p-10 rounded-md relative">
              <div class="flex flex-col justify-center items-center text-center">
                <div class="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden">
                  <img :src="selectedReview.user.photo ? getPhotoUrl(selectedReview.user) : defaultAvatar"
                    class="w-full h-full object-cover" alt="user photo" />
                </div>
                <div class="mt-3">
                  <p class="text-fp1 font-bold text-lg lg:text-xl block"
                    v-text="selectedReview.user['name_' + currentLocale]"></p>
                  <nuxt-link :to="localePath(`/section/${selectedReview.section.id}`)"
                    class="text-fp1 font-bold text-sm lg:text-sm block">
                    <span class="text-fpDark3">{{ $t('section') }}: </span>
                    {{
                      selectedReview.section.id == 1
                        ? $t('general')
                        : selectedReview.section['name_' + currentLocale]
                    }}
                  </nuxt-link>

                  <div class="my-3 flex justify-center">
                    <Icon v-for="i in 5" :key="i" class="text-3xl text-fp2"
                      name="solar:stars-minimalistic-bold-duotone" />
                  </div>

                  <p class="relative font-medium text-sm lg:text-base dark:text-fpLightGray"
                    v-html="selectedReview.comment"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: Client Images -->
      <div class="lg:p-4 lg:w-7/12 order-1 lg:order-2 lg:mb-0 mb-16">
        <div class="flex items-center flex-wrap justify-center md:gap-4 gap-3">
          <div v-for="review in props.reviews" :key="review.id">
            <div
              class="md:w-20 md:h-20 w-12 h-12 rounded-full overflow-hidden shadow-sm bg-white relative z-[1] border border-gray-100"
              @click="selectReview(review)">
              <img :src="review.user.photo
                ? review.user.oauth_type == null
                  ? `${baseURL}/images/${review.user.photo}`
                  : `${review.user.photo}`
                : defaultAvatar
                " class="cursor-pointer w-full h-full object-contain block"
                :class="selectedReview && selectedReview.id === review.id ? 'opacity-100 shadow-2xl' : 'opacity-80'"
                alt="user photo" />

              <div v-if="selectedReview && selectedReview.id === review.id"
                class="absolute top-0 left-0 p-1 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 w-full h-full aspect-square rounded-full z-[-1]">
                <div class="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </ClientOnly>
</template>

<script setup>
const { currentLocale } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const selectedReview = ref(null);
const currentIndex = ref(0);
const autoPlayInterval = ref(null);
const defaultAvatar = '/imgs/avatar.png';

const selectReview = (review, index = null) => {
  selectedReview.value = review;
  if (index !== null) currentIndex.value = index;
  restartAutoPlay();
};

const getPhotoUrl = (user) => {
  return user.oauth_type == null
    ? `${baseURL}/images/${user.photo}`
    : `${user.photo}`;
};

const autoPlayReviews = () => {
  autoPlayInterval.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.reviews.length;
    selectedReview.value = props.reviews[currentIndex.value];
  }, 3000);
};

const restartAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value);
  autoPlayReviews();
};

onMounted(() => {
  if (props.reviews.length > 0) {
    selectedReview.value = props.reviews[0];
    currentIndex.value = 0;
    autoPlayReviews();
  }
});
onUnmounted(() => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value);
});
</script>


<style>
.reviews .splide__arrows {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* margin-top: -65px; */
  gap: 0 14px;
}

.reviews .splide__arrow:hover {
  background-color: #f4d237;
}

.reviews .splide__arrow {
  border-color: #f4d237;
  @apply rounded-full border-2 border-solid flex items-center justify-center w-14 h-14;
}

.reviews .splide__arrow:hover svg {
  fill: white !important;
}

.reviews .splide__arrow splide__arrow--next {
  transform: rotate(180deg);
  margin-top: -26px;
}

.reviews .splide__arrow svg {
  fill: #f4d237;
  font-size: 12px;
}
</style>
