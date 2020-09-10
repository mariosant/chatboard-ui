import { createRouter, routerKey } from '@storeon/router'

export interface State {
	[routerKey]: {
		path: string
		params: string[]
		match: { page: string; params: any }
	}
}

const router = createRouter([
	['/', () => ({ page: 'overview' })],
	['/dashboards/*/chats', (dashboardId) => ({ page: 'chats', params: { dashboardId } })],
	['/dashboards/*/settings', (dashboardId) => ({ page: 'settings', params: { dashboardId } })],
	[/^dashboards\/(\w+)/, (dashboardId) => ({ page: 'dashboard', params: { dashboardId } })],
	['*', () => ({ page: 'not-found' })],
])

export default router
