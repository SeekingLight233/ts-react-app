const { createProxyMiddleware } = require("http-proxy-middleware")

//将后端接口代理到本地
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/**/*.action", {
      target: "http://localhost:4000",
      pathRewrite(path) {
        return path.replace("/api", "/").replace(".action", ".json")
      },
    })
  )
}
