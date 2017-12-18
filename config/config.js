const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const appConfig = {
    'env': ENV,
    'recaptcha': {
        'enable_recaptcha': true,
        'recaptcha_key': '6LeEeR0UAAAAAEh7so-4pORjFKKQUMVWYpoksVAu'
    }
}

module.exports = appConfig
