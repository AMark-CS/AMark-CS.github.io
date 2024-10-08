import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
 
export default defineUserConfig({
    base:'/amark-cs.github.io/',
    bundler: viteBundler(),
    theme: defaultTheme({
        // 在这里进行配置
        navbar: [
            // NavbarItem
            { text: '首页', link: '/', },
            // NavbarGroup
            {
                text: 'MarkZhang的博客',
                children: [
                    { text: 'Github', link: 'https://github.com/AMark-CS' },
                    { text: 'Linkedin', link: 'https://www.linkedin.com/in/mark-zhang-78920431b/' },
                    { text: 'Google Scholar', link: '/' },
                ],
            },
        ],
        sidebar: [
            {
                text: '前言',
                collapsible: false,
                children: [
                    { text: '内容介绍' },
                    { text: '使用指南' }
                ]
            },
            {
                text: '第一篇博客',
                link: '/Crucial/First',
                collapsible: false,
                children: [
                    { text: '第一篇博客', link: '/Crucial/First' }
                ],
            }
        ]
    }),
 
    lang: 'zh-CN',
    title: 'MarkZhang的博客',
    description: '这是我的第一个 VuePress 站点',
})