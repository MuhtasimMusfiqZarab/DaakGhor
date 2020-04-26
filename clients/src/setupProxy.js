//There is no need to import this file anywhere, CRA looks for a file by this name and loads it.
//this is only used while development
//this lets the domain address change for the authentication and we can use realatiove path
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
