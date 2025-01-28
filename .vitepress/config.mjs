import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auth.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的一个文档项目",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家',  items: [{ text: 'Home', link: '/' },
                             { text: 'About', link: '/about' }
        ]},
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright: 'Copyright © 2023 Albert Yang'
    }
  }
})
