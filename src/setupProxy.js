const { createProxyMiddleware } = require('http-proxy-middleware');

// 用于生产模式前后端联调
module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};