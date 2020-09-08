import { createElement } from 'react'
import { createStoreon } from 'storeon'
import { StoreContext } from 'storeon/react'
import router, { State as RouterState } from './router'

// const { SNOWPACK_PUBLIC_PRODUCTION } = import.meta.env

export type State = RouterState

const plugins = [router]

const store = createStoreon(plugins)

export default store

export const StoreProvider: React.FC = ({ children }) =>
	createElement(StoreContext.Provider, { value: store }, children)
