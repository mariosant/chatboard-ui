import { createRouter } from '@storeon/router'

const router = createRouter([
	['/', () => ({ page: 'homepage' })],
	['/dashboards/*', (id) => ({ page: 'dashboards', params: { id } })],
	['*', () => ({ page: 'not-found' })],
])

export default router
