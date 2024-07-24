import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QT",
  description: "诗歌",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: {
      "/en/": [{
        text: '印度',
        items: [
          { text: '泰戈尔-Tagore', link: '/en/tagore' },
          { text: '惠特曼-Whitman', link: '/en/whitman' },
        ]
      }],
      "/cn/": [{
        text: '诗人',
        items: [
          { text: '惠能', link: '/cn/huineng' },
          { text: '王维', link: '/cn/wangwei' },
          { text: '杜甫', link: '/cn/dufu' },
          { text: '佚名', link: '/cn/nameless' },
          { text: '李白', link: '/cn/libai' },
          { text: '辛弃疾', link: '/cn/xinqiji' },
          { text: '刘过', link: '/cn/liuguo' },
          { text: '刘禹锡', link: '/cn/liuyuxi' },
          { text: '元稹', link: '/cn/yuanzhen' },
          { text: '林则徐', link: '/cn/linzexu' },
          { text: '陈毅', link: '/cn/chenyi' },
          { text: '张养浩', link: '/cn/zhangyanghao' },
          { text: '现代', link: '/cn/current' },
        ]
      }],
      "/invest/": [
        {
          text:"投资与投机",link:'/invest/base'
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  ignoreDeadLinks: true,
  head: [
    [
      "script",
      {
        async: "",
        type: "module",
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs",
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],
  base: "/"
})
