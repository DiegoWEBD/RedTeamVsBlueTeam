import fs from 'fs'
import childProcess, { ChildProcess } from 'child_process'
import util from 'util'

const execAsync = util.promisify(childProcess.exec)

const registerUser = async (username, email, birthDate) => {
	const users = fs.readdirSync('users')
	console.log(users)

	/*if (users.find((user) => user === username)) {
		throw new Error(`El nombre de usuario ${username} ya está registrado`)
	}*/

	try {
		await execAsync(`mkdir users/${username}`)

		return {
			username,
			email,
			birth_date: new Date(birthDate),
			registeredAt: new Date(),
		}
	} catch (err) {
		throw new Error(err.message)
	}
}

export default registerUser
