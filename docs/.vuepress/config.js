module.exports = {
  base: "/Blogs/",
  title: "puzi",
  description: "myBlog",
  //   head: [
  //       ['link', { rel: 'icon', href: '/img/logo.ico' }],
  //       ['link', { rel: 'manifest', href: '/manifest.json' }],
  //   ]
  themeConfig: {
      theme:'foo',
    // 显示所有页面的标题链接
    displayAllHeaders: false, // 默认值：false
    // 活动的标题链接
    activeHeaderLinks: true, // 默认值：true
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/zhenzipu" },
      {
        text: "外链",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/zhenzipu"
          },
          {
            text: "tco-ui",
            link: "https://www.npmjs.com/package/tco-ui"
          }
        ]
      },
      { text: "External", link: "https://google.com" }
    ],
    // sidebar: 'auto',
    // sidebar: {
    //   "/js/": [
    //     "" /* /js/ */,
    //     "one" /* /js/one.html */,
    //     "two" /* /js/two.html */
    //   ],
    //   "/vue/": [
    //     "" /* /vue/ */,
    //     "one" /* /vue/one.html */,
    //     "two" /* /vue/two.html */
    //   ],
    //   "/react/": [
    //     "" /* /react/ */,
    //     "one" /* /react/one.html */,
    //     "two" /* /react/two.html */
    //   ]
    // },
    sidebar: [
      {
        title: "JS",
        collapsable: false,
        children: ["/js/", "/js/one", "/js/two"]
      },
      {
        title: "Vue",
        children: ["/vue/", "/vue/one", "/vue/two"]
      },
      {
        title: "React",
        children: [["/react/", "test"], "/react/one", "/react/two"]
      },
      {
        title: "Interview",
        children: ["/interview/"]
      },
      {
        title: "TCO-UI",
        children: ["/tco-ui/"]
      }
    ],
    //   嵌套的标题链接深度，默认的深度为1。
    sidebarDepth: 2,
    // 内置搜索
    search: false,
    // 调整默认搜索框显示的搜索结果数量
    searchMaxSuggestions: 10,
    //   最后更新时间
    lastUpdated: "最后更新时间", //Last Updated

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "zhenzipu/Blogs",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: "vuejs/vuepress",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    // docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我改善此页面！"
  },
  //   VuePress默认支持PWA配置的，需要在基本配置中开启serviceWorker。
  serviceWorker: {
    updatePopup: true // Boolean | Object, 默认值是 undefined.
    // 如果设置为 true, 默认的文本配置将是:
    // updatePopup: {
    //    message: "New content is available.",
    //    buttonText: "Refresh"
    // }
  }
};
