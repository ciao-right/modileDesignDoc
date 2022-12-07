import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'BC-Design',
    nav:[
      {
        title:"Button",
        link:'/components/components/Button'
      }
    ],
  },
});
