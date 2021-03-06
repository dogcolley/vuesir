import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 3000, // default: 3000
  },

  mode: 'universal',

  head: {
    titleTemplate: '',
    title: '서울오빠 관리자',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {
        scr:`//dapi.kakao.com/v2/maps/sdk.js?appkey=5139a4715a28dcd69472527245184ae3`
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/axios.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'vue-daum-postcode/nuxt',
    ['nuxt-vuex-localstorage',{
      JSHToken : ''
    }]
  ],

  //axios
  axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
    baseURL: 'http://test2.seoulouba.kr/api', 
    withCredentials: true,
    common: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },

  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },



  //auth
  auth: {
    strategies: {
      local: {
        JSHToken:''
      }
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: 
      [
        '~/assets/variables.scss',
        '~/assets/jsh.scss',
        '~/assets/dasol.scss',
      ]
    ,
    breakpoint: {
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // user setting commopent end setting 
  
}
