const axios = require('axios')

class Advice {
    static randomAdvice(){
        return axios.get('https://api.adviceslip.com/advice')
    }
}

module.exports = Advice;