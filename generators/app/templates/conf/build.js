module.exports = {
    mongodb: {
        url: 'mongodb://mongo/example-test',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1000,
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000
                }
            }
        }
    },
    redis: {
        url: 'redis://redis/2'
    },
    postgres: {
        host: 'postgres',
        database: 'postgres',
        user: 'postgres'
    },
<% if (setup.indexOf('basics') > -1) { %>
    logger: {
        transport: 'console'
    }
<% } %>
}