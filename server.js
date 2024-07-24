const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// connect to express app
const app = express()
// connect to mongoDB
const dbURI = 'mongodb+srv://apeexperience:QJbG5GbMhlu6vMLi@ape.pvr3vqh.mongodb.net/APEdb?retryWrites=true&w=majority&appName=APE'
mongoose
.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log('Server and MongoDB are connected')
    })
})
.catch ((error) => {
    console.log('Unable to connect to Server and MongoDB:', error)
})

//middleware
app.use(bodyParser.json())
app.use(cors())

// SCHEMA

//Routes
//GET newsletter
app.get('/newsletter', (req, res) => {
    const newsletter = newsletters.find()
    .then((newsletter) => {
        res.json(newsletter)
    })
    .catch((error) => {
        res.json({ message: 'Unable to get newsletter:', error })
    })
})

//GET newsletter by ID
app.get('/newsletter/:id', (req, res) => {
    const { id } = req.params
    const singlenewsletters = newsletters.findById(id)
    .then((singlenewsletters) => {
        res.json(singlenewsletters)
    })
    .catch((error) => {
        res.json({ message: 'El newsletter no ha podido registrar una ID', error })
    })
})

//POST newsletter
app.post('/newsletter', (req, res) => {
    const { name, email } = req.body
    const newsletter = new newsletters({ name, email })
    newsletter.save()
    .then((newsletter) => {
        res.json({ message: 'El newsletter ha sido creado con éxito' })
    })
    .catch((error) => {
        res.json({ message: 'El newsletter no ha podido crearse:', error })
    })

})

//UPDATE newsletter
app.put('/newsletter/:id', (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    const updatednewsletters = newsletters.findByIdAndUpdate(id,
        { name, email },
        { value: true })
        .then((updatednewsletters) => {
            res.json({ message: 'El newsletter se ha actualizado con éxito' })
        })
        .catch((error) => {
            res.json({ message: 'El newsletter no se ha podido actualizar:', error })
        })
})

// DELETE newsletter
app.delete('/newsletter/:id', (req, res) => {
    const { id } = req.params
    const deletednewsletters = newsletters.findByIdAndDelete(id)
    .then((deletednewsletters) => {
        res.json({ message: 'El newsletter ha sido eliminado con éxito' })
    })
    .catch((error) => {
        res.json({ message: 'El newsletter no ha podido eliminarse:', error })
    })
    
})

// Create // POST
// Read // GET
// Update // PUT OR PATCH
// Delete // DELETE
