export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HalaqahKu',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'id'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Google font module configuration : https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 700],
      'Work+Sans': [300, 400, 500, 700]
    }
  },

  // https://firebase.nuxtjs.org/guide/options
  firebase: {
    config: {
      apiKey: "AIzaSyDT6_yCTd-GBiWlnCdPunNGa7WpzssyZtg",
      authDomain: "halaqahku.firebaseapp.com",
      databaseURL: "https://halaqahku-default-rtdb.firebaseio.com",
      projectId: "halaqahku",
      storageBucket: "halaqahku.appspot.com",
      messagingSenderId: "454617018544",
      appId: "1:454617018544:web:677dd96f695e829d5e4b75",
      measurementId: "G-24TLTTG18X"
    },
    services: {
      auth: true,
      database: true,
      analytics: true,
    },
    auth: {
      persistence: 'local',
      initialize: {
        onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
        onAuthStateChangedAction: 'onAuthStateChangedAction',
        subscribeManually: false
      },
      ssr: false, // default
      emulatorPort: 9099,
      emulatorHost: 'http://localhost',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
