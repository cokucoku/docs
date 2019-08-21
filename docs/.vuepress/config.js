module.exports = {
    title: 'VUE组件库',
    description: 'VUE组件库',
    base: '/',
    themeConfig: {
         logo:'/logo.png',
        nav: [{ text: '指南', link: '/guide/' }, { text: '关于', link: '/about/' }, { text: 'Github', link: 'https://github.com/cokucoku' }],
        sidebar: [{
            title: '指南',
            collapsable: false,
            children: [
                '/guide/',
                '/guide/Alert',
                '/guide/Badge',
                '/guide/Button',
                '/guide/Collapse',
                '/guide/Dialog',
                '/guide/InputNumber',
                '/guide/ImgEffect',
                //'/guide/LoadImg',
                '/guide/Loading',
                '/guide/Notification',
                '/guide/Pagination',
                '/guide/PasswordInput',
                '/guide/Pay',
                '/guide/Radio',
                '/guide/Switch',
                '/guide/Select',
                '/guide/Steps',
                '/guide/TimeLine',
                '/guide/ToolTip',
                '/guide/TagCloud',
                '/guide/Tag',
                '/guide/Transfer',
            ]
        }],
        sidebarDepth: 1, //这样h2,h3都能提取到
        lastUpdated: '最后更新', // string | boolean

    },
    markdown: {
        lineNumbers: false
    }
}