import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  const locale = app.$cookies.get('locale') || 'en'
  app.i18n = new VueI18n({
    locale,
    fallbackLocale: 'en',
    messages: {
      ja: require('~/lang/ja.json'),
      en: require('~/lang/en.json'),
    },
  })
}
