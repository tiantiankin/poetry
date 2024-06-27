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
        ]
      }],
      "/cn/": [{
        text: '诗人',
        items: [
          { text: '王维', link: '/cn/wangwei' },
          { text: '杜甫', link: '/cn/dufu' },
          { text: '李白', link: '/cn/libai' },
          { text: '辛弃疾', link: '/cn/xinqiji' },
        ]
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
