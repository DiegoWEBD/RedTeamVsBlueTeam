import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.static('html'))

app.listen(PORT, () => {
	console.log(`Servidor HTML corriendo en el puerto ${PORT}`)
})
