export const siteData = JSON.parse("{\"base\":\"/hamark-cs.github.io/\",\"lang\":\"zh-CN\",\"title\":\"MarkZhang的博客\",\"description\":\"这是我的第一个 VuePress 站点\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
