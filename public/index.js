const imageForm = document.querySelector('.image-form')

const thumbnail = document.querySelector('.thumbnail img') 

imageForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const res = await fetch('/openai/image', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({prompt: imageForm.prompt.value}),
    method: 'POST'
  })
  const data = await res.json()

  thumbnail.setAttribute('src', data.url)
})