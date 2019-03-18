module.exports = {
    title: 'VUE组件库',
    description: 'VUE组件库',
    base: '/',
    themeConfig: {
         logo:'/psb.jpg',
        nav: [{ text: '指南', link: '/guide/' }, { text: '关于', link: '/about/' }, { text: 'Github', link: 'https://github.com/cokucoku' }],
        sidebar: [{
            title: '指南',
            collapsable: false,
            children: [
                '/guide/',
                '/guide/Button',
                '/guide/Pagination',
                '/guide/InputNumber',
                '/guide/Alert',
                '/guide/Badge',
                '/guide/PasswordInput',
                '/guide/Pay'
            ]
        }],
        sidebarDepth: 1, //这样h2,h3都能提取到
        lastUpdated: '最后更新', // string | boolean

    },
    markdown: {
        lineNumbers: false
    }
}