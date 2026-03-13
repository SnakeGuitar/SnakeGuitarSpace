export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/variables.css',
    '~/assets/styles/main.css'
  ],
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' },
      { code: 'zh', file: 'zh.json', name: '中文' },
      { code: 'ja', file: 'ja.json', name: '日本語' },
      { code: 'ko', file: 'ko.json', name: '한국어' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true
  }
})
