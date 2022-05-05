
export default {
  title: 'pwp.app',
  subtitle: 'Transform ideas into code.',
  locale: 'en',
  theme: {
    package: '@fragy/oneslot',
    config: {
      gfont: {
        enable: true,
      },
      landing: {
        banner: {
          bgComponent: 'pwpBannerBg',
          avatar: '/images/pwp_square.png',
          showSubtitle: true,
        },
      },
    },
    markVue: {
      enable: false,
    },
  },
}
