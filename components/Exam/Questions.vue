<template>
  <section>
    <div v-if="ExamStore.related === 'exams'"
      class="absolute left-1/2 -translate-x-1/2 -top-10 w-32 h-32 outline-2 outline-offset-[-1px] outline-fp1 outline-dotted rounded-full">
      <span :style="`transform: ${ExamStore.getTimeQuestions.rotatePoint}`"
        class="rotate-point absolute -top-0.5 -right-0.5 w-[104%] h-[105%] rounded-full bg-transparent before:absolute before:inset-0 before:-top-2 before:right-1/2 before:translate-x-1/2 before:w-6 before:h-6 before:rounded-full before:bg-pink-500 before:z-50 z-10 transition-all duration-1000 ease-linear"></span>
      <span :style="`background: ${ExamStore.getTimeQuestions.roundedBg}`"
        class="rounded-bg absolute -top-1 -right-1 w-[105%] h-[105%] rounded-full shadow-custom3 after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:w-[85%] after:h-[85%] after:bg-white after:shadow-[0px_0px_10px_rgba(0,0,0,0.5)_inset] after:rounded-full">
      </span>
      <span
        class="text-time text-xl font-medium rounded-full flex items-center justify-center text-fp1 dark:text-fpLightBack dark:bg-fpDark2 w-full h-full relative z-50">
        {{ ExamStore.getTimeQuestions.textTime }}
      </span>
    </div>

    <h3
      class="absolute top-10 start-16 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-lg font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
      {{ $t("qution") }} {{ ExamStore.getDetailsQuestions.step }} / {{ ExamStore.getDetailsQuestions.lenQuestions }}
    </h3>

    <TransitionGroup name="questions" tag="div" class="flex overflow-hidden h-auto">
      <div v-for="(question, index) in ExamStore.getQuestions" :key="question.id"
        v-show="ExamStore.getDetailsQuestions.step == ++index" class="mb-10 w-full">

        <div v-if="question.type == 'text'"
          class="lg:text-3xl text-center lg:mt-6 py-4 bg-blue-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white"
          v-html="question['question_' + currentLocale]"></div>

        <div v-else-if="question.type == 'audio'"
          class="lg:text-3xl text-center lg:mt-6 py-4 px-4 bg-blue-200 border-4 border-black rounded-lg shadow-[4px_4px_0px_rgb(0,0,1)] dark:shadow-[4px_4px_0px_rgb(255,255,255)] dark:border-white">
          <audio controls download="off" class="w-full">
            <source :src="`${baseURL}/images/${question.file}`" type="audio/ogg" />
            <source :src="`${baseURL}/images/${question.file}`" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>

        <div v-else-if="question.type == 'video'"
          class="relative max-w-4xl h-72 mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe :src="`${baseURL}/images/${question.file}`" loading="lazy" class="border-0 w-full h-full relative"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
            allowfullscreen="true"></iframe>
        </div>

        <img v-else-if="question.type == 'image'" :src="`${baseURL}/images/${question.file}`"
          class="w-full rounded-xl shadow-md pointer-events-none" />

        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-5 mt-5">
          <div class="lg:col-span-8 grid lg:grid-cols-2 grid-cols-1 gap-3">
            <div v-for="(answer, indexAnswer) in question.answers_random" :key="answer.id">
              <button
                @click="ExamStore.checkAnswer({ answer_id: answer.id, status: answer.status, question_id: question.id })"
                :class="[
                  ExamStore.activeAnswers[question.id] == answer.id && ExamStore.getDetailsQuestions.done == false
                    ? 'after:border-gray-200 before:bg-gray-200 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                    : 'after:border-[#e1e1e1] before:bg-[#e1e1e1]',
                  ExamStore.getDetailsQuestions.done && answer.status == 1 ? ' border-green-400 after:border-green-400 before:bg-green-400 text-green-400' : '',
                  ExamStore.activeAnswers[question.id] == answer.id && ExamStore.getDetailsQuestions.done == true && answer.status == 0
                    ? ' border-red-400 after:border-red-400 before:bg-red-400 text-red-400'
                    : '',
                  answer.answer_type == 'image'
                    ? 'after:[content:unset] before:[content:unset] p-5 h-auto'
                    : 'py-2 lg:py-4 ps-16 lg:ps-20 rounded-lg lg:rounded-full after:start-5 lg:after:start-8 before:start-7 lg:before:start-10',
                ]"
                class="bg-white dark:text-fpLightBack block w-full h-24 text-start border-2 transition-all relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-8 after:h-8 after:border-2 after:rounded-full after:border-dashed before:absolute before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full">
                <span class="text-base lg:text-3xl font-bold" v-if="answer.answer_type == 'text'"
                  v-text="answer.answer"></span>
                <img v-else-if="answer.answer_type == 'image'" :src="`${baseURL}/images/${answer.answer}`"
                  class="lg:w-1/2 object-contain mx-auto pointer-events-none" />
              </button>
              <div
                v-if="ExamStore.activeAnswers[question.id] == answer.id && ExamStore.getDetailsQuestions.done == true && answer.status == 1">
                <button class="flex items-center text-green-400">
                  <span class="ms-3 -mb-1 text-2xl">
                    <svg width="42" height="42" class="inline" viewBox="0 0 42 42" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.0232 22.2207L34.7128 8.53109C35.1441 8.09984 35.7441 7.879 36.3524 7.929C36.9607 7.97692 37.517 8.28942 37.8753 8.78525C37.8753 8.78525 37.9274 8.86025 37.9316 8.86442C40.3857 12.2832 41.8337 16.4728 41.8337 20.9998C41.8337 32.4978 32.4982 41.8332 21.0003 41.8332C9.50241 41.8332 0.166992 32.4978 0.166992 20.9998C0.166992 9.50192 9.50241 0.166504 21.0003 0.166504C24.3253 0.166504 27.4712 0.947754 30.2607 2.33734C31.292 2.84775 31.7107 4.09984 31.1982 5.129C30.6857 6.15817 29.4357 6.579 28.4066 6.0665C26.1753 4.95609 23.6587 4.33317 21.0003 4.33317C11.8024 4.33317 4.33366 11.8019 4.33366 20.9998C4.33366 30.1978 11.8024 37.6665 21.0003 37.6665C30.1982 37.6665 37.667 30.1978 37.667 20.9998C37.667 18.2373 36.9941 15.629 35.8003 13.3353L22.4982 26.6394C21.6837 27.454 20.3649 27.454 19.5503 26.6394L13.3003 20.3894C12.4878 19.5769 12.4878 18.2561 13.3003 17.4436C14.1149 16.6311 15.4337 16.6311 16.2482 17.4436L21.0232 22.2207Z"
                        fill="#3FDB77" />
                    </svg>
                    {{ $t("answer_correct") }} :
                  </span>
                  <p class="text-sm lg:text-2xl text-green-400 ms-2" v-text="answer.answer"></p>
                </button>
                <p class="text-sm lg:text-3xl text-green-400 ms-2 block mt-6" v-text="question.Justify"></p>
              </div>
              <div
                v-if="ExamStore.activeAnswers[question.id] != answer.id && ExamStore.getDetailsQuestions.done == true && answer.status == 1">
                <button class="flex items-center text-red-500">
                  <span class="ms-3 -mb-1 text-2xl text-red-500">
                    <svg width="42" height="42" viewBox="0 0 42 42" class="inline" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.5064 14.4088C16.2082 14.4092 15.9169 14.4984 15.6697 14.665C15.4224 14.8316 15.2305 15.0681 15.1183 15.3443C15.0061 15.6206 14.9787 15.9239 15.0398 16.2157C15.1008 16.5076 15.2474 16.7746 15.4609 16.9828L19.4749 20.9968L15.4609 25.0108C15.3176 25.1492 15.2033 25.3147 15.1247 25.4977C15.0461 25.6807 15.0047 25.8775 15.003 26.0767C15.0013 26.2759 15.0392 26.4733 15.1146 26.6577C15.1901 26.842 15.3014 27.0096 15.4423 27.1504C15.5831 27.2913 15.7506 27.4026 15.9349 27.478C16.1193 27.5534 16.3168 27.5914 16.516 27.5897C16.7151 27.588 16.912 27.5465 17.095 27.4679C17.278 27.3893 17.4435 27.275 17.5819 27.1318L21.5959 23.1179L25.6129 27.1318C25.7512 27.275 25.9167 27.3893 26.0998 27.4679C26.2828 27.5465 26.4796 27.588 26.6788 27.5897C26.8779 27.5914 27.0754 27.5534 27.2598 27.478C27.4441 27.4026 27.6116 27.2913 27.7525 27.1504C27.8933 27.0096 28.0047 26.842 28.0801 26.6577C28.1555 26.4733 28.1935 26.2759 28.1917 26.0767C28.19 25.8775 28.1486 25.6807 28.07 25.4977C27.9914 25.3147 27.8771 25.1492 27.7339 25.0108L23.7199 20.9968L27.7339 16.9828C27.9503 16.772 28.0981 16.5009 28.1578 16.2047C28.2175 15.9086 28.1864 15.6013 28.0685 15.3231C27.9507 15.0449 27.7516 14.8087 27.4973 14.6456C27.243 14.4825 26.9453 14.4 26.6434 14.4088C26.2541 14.4203 25.8845 14.5828 25.6129 14.8619L21.5959 18.8759L17.5819 14.8619C17.442 14.7183 17.2747 14.6042 17.09 14.5264C16.9052 14.4486 16.7068 14.4087 16.5064 14.4088Z"
                        fill="#ED2B2B" />
                      <circle cx="21" cy="21" r="20" stroke="#ED2B2B" stroke-width="2" />
                    </svg>
                    {{ $t("answer_wrong") }} :
                  </span>
                  <p v-if="answer.answer_type == 'text'" class="text-sm lg:text-3xl text-green-400 ms-2"
                    v-text="answer.answer"></p>
                  <img v-else-if="answer.answer_type == 'image'" :src="`${baseURL}/images/${answer.answer}`"
                    class="lg:w-2/6 mx-auto object-cover pointer-events-none" />
                </button>
                <p class="text-sm lg:text-3xl text-green-400 ms-2 block mt-6" v-text="question.Justify"></p>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4">
            <img src="/imgs/questions/exam.svg" class="w-full pointer-events-none" alt="">
          </div>
        </div>

      </div>
    </TransitionGroup>

    <div class="flex items-center">
      <button
        v-if="ExamStore.getDetailsQuestions.step == ExamStore.getDetailsQuestions.lenQuestions && ExamStore.getDetailsQuestions.done == false"
        @click="ExamStore.doneQuestions(true)" type="button" class="custom_btn1 !py-2 !pe-4 !ps-16 !text-2xl relative">
        <img src="/imgs/icons/report-card.png"
          class="w-20 absolute top-1/2 -start-6 -translate-y-1/2 animate-pulse pointer-events-none" alt="" />
        {{ $t("submission") }}
      </button>

      <button v-if="ExamStore.getDetailsQuestions.done"
        @click="+ExamStore.getDetailsQuestions.score >= score ? (ExamStore.activeSection = 'successful') : (ExamStore.activeSection = 'fail')"
        type="button"
        class="text-white bg-green-400 hover:bg-green-400/90 w-1/2 lg:w-auto focus:outline-none focus:ring-4 focus:ring-green-400/70 font-medium rounded-3xl px-3 lg:px-16 py-2 lg:py-3 transition shadow-xl text-center lg:text-xl whitespace-nowrap mx-auto mt-6 block">
        {{ $t("result") }}
      </button>
    </div>

    <div class="flex items-center ltr:flex-row-reverse flex-col md:flex-row gap-5 md:gap-0 justify-between mt-6">
      <button @click="ExamStore.switchTaps('next')" type="button"
        class="btn_custom2 flex items-center justify-center !text-2xl">
        <img src="~/assets/images/student/video_playlist/next-arrow.svg" alt="" class="pointer-events-none" />
        <span class="mt-1 ltr:me-2 rtl:ms-2">{{ $t("next_qution") }}</span>
      </button>
      <button @click="ExamStore.switchTaps('prev')" type="button"
        class="btn_custom2 flex items-center justify-center !text-2xl">
        <span class="mt-1 ltr:ms-2 rtl:me-2">{{ $t("prev_qution") }}</span>
        <img src="~/assets/images/student/video_playlist/prev-arrow.svg" alt="" class="pointer-events-none" />
      </button>
    </div>

    <ExamIndicator />
  </section>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const score = useRuntimeConfig().public.score;
// const questions = ExamStore.getQuestions;
</script>
