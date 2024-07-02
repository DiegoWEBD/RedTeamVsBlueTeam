import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import registerUser from './register-user.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Api disponible',
	})
})

app.post('/register', (req, res) => {
	const userData = req.body
	console.log(userData)
	registerUser(userData.username, userData.email, userData.birth_date)
		.then((user) => {
			res.status(201).json({
				message: 'Usuario registrado correctamente.',
				user,
			})
		})
		.catch((error) => {
			res.status(400).json({
				message: error.message,
			})
		})
})

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`)
})
