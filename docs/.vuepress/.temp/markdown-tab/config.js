import { CodeTabs } from "G:/AMark/AMark-CS.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_ir54zm7gll2clpuv5ixwywbsqm/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "G:/AMark/AMark-CS.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_ir54zm7gll2clpuv5ixwywbsqm/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "G:/AMark/AMark-CS.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_ir54zm7gll2clpuv5ixwywbsqm/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
