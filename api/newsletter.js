const fetchNewsletters = () => {
  axios
  .get('/api/Newsletters') // Cambia la URL absoluta por una relativa
  .then((res) => {
    console.log(res.data)
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  axios
  .post('./api/Newsletters', { name, email }) // Cambia la URL
  .then(() => {
    setName('')
    setEmail('')
    fetchNewsletters();
  })
  .catch((error) => {
    console.log('No ha podido enviarse sus suscripción')
  })
}
