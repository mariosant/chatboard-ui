import { createRouter, routerKey } from '@storeon/router'

export interface State {
	[routerKey]: {
		path: string
		params: string[]
		match: { page: string; params: any }
	}
}

const router = createRouter([
	['/', () => ({ page: 'homepage' })],
	['/dashboards/*', (id) => ({ page: 'dashboards', params: { id } })],
	['*', () => ({ page: 'not-found' })],
])

export default router
