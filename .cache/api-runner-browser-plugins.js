module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":false,"transpileTemplateLiterals":true,"pure":true,"namespace":"","topLevelImportPaths":[],"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":630,"backgroundColor":"transparent","linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"quality":50,"withWebp":false,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-decap-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"/Users/mp-adm/Documents/VSCode/mprado/src/netlify-cms/index.js","enableIdentityWidget":true,"publicPath":"admin","htmlTitle":"Content Manager","includeRobots":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Matthew Prado","short_name":"mapoztate.com","start_url":"/","background_color":"#ffffff","theme_color":"#000000","display":"minimal-ui","icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b7808232381a787f58f57afc3d72db2e"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
