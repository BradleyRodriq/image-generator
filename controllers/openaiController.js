const openai = require('../config/openaiConfig')

const generateImage = async (req, res) => {

  const image = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: '1024x1024'
  })

  res.json({
    url: image.data.data[0].url
  })
}

module.exports = { generateImage }