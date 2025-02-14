import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QT",
  description: "诗歌",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: {
      "/en/": [{
        text: '',
        items: [
          { text: '鲁思-贝本梅尔-ruth-bebermeyer', link: '/en/ruthBebermeyer' },
          { text: '泰戈尔-Tagore', link: '/en/tagore' },
          { text: '惠特曼-Whitman', link: '/en/whitman' },
          { text: '塞涅卡-Seneca', link: '/en/seneca' },
          { text: '雷蒙德-钱德勒', link: '/en/chandler' },
          { text: '威廉-尼采', link: '/en/nietzsche' }
        ]
      }],
      "/cn/": [{
        text: '诗人',
        items: [
          { text: '惠能', link: '/cn/huineng' },
          { text: '王维', link: '/cn/wangwei' },
          { text: '庄子', link: '/cn/zhuangzi' },
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
          { text: '韩愈', link: '/cn/hanyu' },
          { text: '现代', link: '/cn/current' },
        ]
      }],
      "/story/": [
        {
          text: "趣闻", link: '/story/index'
        }
      ],
      "/invest/": [
        {
          text: "投资与投机", link: '/invest/base'
        }
      ],
      "/less-route": [
        {
          text: "总结", link: '/less-route/index'
        }
      ],
      "/nvc": [
        {
          text: "总结", link: '/nvc/index'
        }
      ],
      "/person": [
        {
          text: "对概率的理解",
          link: "/person/possible/index"
        },
        {
          text: "悲剧的核心-如何写作随记",
          link: "/person/tragedy/index"
        },
        {
          text: "关于自由",
          link: "/person/freedom/index"
        },
        {
          text: "关于财富",
          link: "/person/wealth/index"
        },
        {
          text: "穷与富",
          link: "/person/poor-and-rich/index"
        },
        {
          text: "关于经济",
          link: "/person/money/index"
        },
        {
          text: "生活趣事",
          link: "/person/funny/index"
        },
        {
          text:"年",
          link:"/person/years/index"
        }
        // {
        //   text:'实事',
        //   link:"/person/social/index"
        // },
        {
          text:"愚者的图书馆",
          link:"/person/skill/index"
        }
      ],
      "/tragedy": [{
        text: "悲剧的核心",
        link: '/tragedy/index'
      }],
      "/ninth": [{
        text: "第九艺术收集",
        link: '/ninth/index'
      }]
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
