const Base64 = require('js-base64').Base64
const md5 = require('js-md5')
const qs = require('qs')

function createVoice(req, res) {
    // const text = req.query.text
    // const lang = req.query.lang
    const text = '测试科大讯飞在线语音合成api的功能，比如说，我们输入一段话，科大讯飞api会在线实时生成语音返回客户端'
    const lang = 'cn'

    let engineType = 'intp65'
    if (lang.toLowerCase() === 'en') {
        engineType = 'intp65_en'
    }
    const speed = '30'
    const voiceParam = {
        auf: 'audio/L16;rate = 16000',
        aue: 'lame',
        voice_name: 'xiaoyan',
        speed,
        volume: '50',
        pitch: '50',
        engine_type: engineType,
        text_type: 'text'
    }

    const currentTime = Math.floor(new Date().getTime() / 1000)
    const appId = '5eaee02c'
    const apiKey = 'f8595c33aab961c4855c20d36626d68a'
    const xParam = Base64.encode(JSON.stringify(voiceParam))
    const checkSum = md5(apiKey + currentTime + xParam)
    const hesders = {}
    hesders['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    hesders['X-Param'] = xParam
    hesders['X-Appid'] = appId
    hesders['X-CheckSum'] = checkSum
    hesders['X-Real-Ip'] = ''
    const data = qs.stringify({
        text: text
    })
}

module.exports = createVoice