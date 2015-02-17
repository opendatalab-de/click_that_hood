var port = process.env.PORT || 3000
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  env: process.env.NODE_ENV,
  port: port,
  app_host_port: 'gamehost:' + port
}
