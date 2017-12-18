const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const appConfig = {
    'env': ENV,
    'server': {
        'domain': 'localhost',
        'port': 80
    },
    'recaptcha': {
        'enable_recaptcha': true,
        'recaptcha_key': '6LeEeR0UAAAAAEh7so-4pORjFKKQUMVWYpoksVAu'
    }
}

module.exports = appConfig
