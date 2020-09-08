import { Server } from 'miragejs'

const createServer = () => {
	const server = new Server({
		routes() {
			this.namespace = '/api'

			this.get('/users', () => [
				{ id: '1', name: 'Luke' },
				{ id: '2', name: 'Leia' },
				{ id: '3', name: 'Anakin' },
			])
		},
	})

	return server
}
