// https://nuxt.com/docs/api/configuration/nuxt-config http://127.0.0.1:8001/ 
const siteName = `منصة المقاومة التعليمية`;
const frontURL = "https://elmoqawma.com";
const logo = "https://backend.elmoqawma.com/images/global/bg-logo.png";
const description = `منصه متخصصه في تعليم مواد الثانوية العامة بكل سهولة! ادخل واستمتع بدروس مبسطة ومفهومة في كل المواد، مع منصة المقاومة هتقدر تفهم وتستوعب المواد بطريقة سهلة وممتعة`;
const facebookURL = `https://www.facebook.com/fingerprintmagency`;
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      apiURL: 'https://backend.elmoqawma.com/api',
      baseURL: 'https://backend.elmoqawma.com',
      // apiURL: 'http://127.0.0.1:8000/api',
      // baseURL: 'http://127.0.0.1:8000',
      score: 50,
    },
  },
  // plugins: ['@/plugins/plyr-youtube.client.js'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/android-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" },
        { rel: 'icon', type: "image/png", sizes: "180x180", href: '/favicon/android-icon-192x192.png' },
        { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: "image/png", sizes: "96x96", href: '/favicon/favicon-96x96.png' },
        { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/manifest.json' },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "description", content: description },
        { name: "keywords", content: description },
        { property: "article:publisher", content: facebookURL },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", content: logo },
        { name: "author", content: siteName },
        { name: "geo.region", content: "مصر" },
        { name: "geo.placename", content: "مدينة نصر" },
        { name: "theme-color", content: "#ffffff" },
        // facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: frontURL },
        { property: "og:title", hid: "og:title", content: siteName },
        { property: "og:description", content: description },
        { property: "og:site_name", content: siteName },
        { property: "og:alt", content: siteName },
        { property: "og:image", hid: "og:image", content: logo },
        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: frontURL },
        { property: "twitter:title", content: siteName },
        { property: "twitter:type", content: "website" },
        { property: "twitter:description", content: description },
        { property: "twitter:image", content: logo },
        { property: "twitter:site", content: siteName },
        { property: "twitter:site_name", content: siteName },
        { property: "twitter:alt", content: siteName },
        // { property: "fb:app_id", hid: "fb:app_id", content: "517999570183481" },
        // { name: "google-signin-client_id", content: "309314815545-qi9o7jvgj7k5ok4kfonlcguauptadasg.apps.googleusercontent.com" },
      ],
      /* script: [
        { src: 'https://apis.google.com/js/platform.js', async: true, defer: true },
        { src: 'https://accounts.google.com/gsi/client', async: true, defer: true },
      ] */
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'ar',
    locales: [
      {
        code: 'ar',
        name: 'العربية',
        file: 'ar.json',
        dir: 'rtl',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        dir: 'ltr',
      },
    ],

  },

})
