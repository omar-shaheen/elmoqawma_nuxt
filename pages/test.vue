<template>
  <div class="flex flex-col md:flex-row">
    <!-- Left Side: Client Images -->
    <div class="w-full md:w-1/3 flex flex-wrap">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.id"
        class="w-1/2 p-2"
      >
        <img
          :src="testimonial.image"
          :alt="testimonial.name"
          class="cursor-pointer rounded-lg border-2"
          :class="{
            'border-blue-500': selectedTestimonial.id === testimonial.id,
            'border-transparent': selectedTestimonial.id !== testimonial.id,
          }"
          @click="selectTestimonial(testimonial)"
        />
      </div>
    </div>

    <!-- Right Side: Testimonial Content -->
    <div class="w-full md:w-2/3 p-4">
      <h2 class="text-xl font-bold mb-2">{{ selectedTestimonial.name }}</h2>
      <p class="text-gray-700">{{ selectedTestimonial.feedback }}</p>
    </div>
  </div>
</template>

<script setup>
// Import `ref` from Vue
import { ref } from 'vue';

// Sample testimonials data
const testimonials = ref([
  {
    id: 1,
    name: 'Client One',
    image: '/images/client1.jpg',
    feedback: 'This is a testimonial from client one.',
  },
  {
    id: 2,
    name: 'Client Two',
    image: '/images/client2.jpg',
    feedback: 'This is a testimonial from client two.',
  },
  // Add more testimonials as needed
]);

// Reactive variable to hold the selected testimonial
const selectedTestimonial = ref(testimonials.value[0]);

// Method to update the selected testimonial
const selectTestimonial = (testimonial) => {
  selectedTestimonial.value = testimonial;
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
