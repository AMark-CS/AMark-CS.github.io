export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"MarkZhang的博客\",\"children\":[{\"text\":\"Github\",\"link\":\"https://github.com/AMark-CS\"},{\"text\":\"Linkedin\",\"link\":\"https://www.linkedin.com/in/mark-zhang-78920431b/\"},{\"text\":\"Google Scholar\",\"link\":\"/\"}]}],\"sidebar\":[{\"text\":\"前言\",\"collapsible\":false,\"children\":[{\"text\":\"内容介绍\"},{\"text\":\"使用指南\"}]},{\"text\":\"第一篇博客\",\"link\":\"/Crucial/First\",\"collapsible\":false,\"children\":[{\"text\":\"第一篇博客\",\"link\":\"/Crucial/First\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
