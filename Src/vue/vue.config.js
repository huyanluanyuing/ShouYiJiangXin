module.exports = {
  configureWebpack: {},
  devServer: {
    // 环境配置
    host: "127.0.0.1",
    public: "127.0.0.1:8081", // 此处是自己电脑IP地址！
    port: "8081",
    https: false,
    disableHostCheck: true,
    open: false, // 配置自动启动浏览器
  },
};
