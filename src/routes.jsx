import React from 'react'
import loadable from '@loadable/component'
import pMin from 'p-min-delay'
import useRouter from '@app/hooks/useRouter.js'

const Fallback = () => 'loading...'

const AsyncPage = loadable(
	(props) => pMin(import(`./pages/${props.page}/mod.js`), 500),
	{
		cacheKey: (props) => props.page,
		fallback: <Fallback />,
	},
)

const Routes = () => {
	const [route] = useRouter()

	return <AsyncPage page={route.match.page} />
}

export default Routes
