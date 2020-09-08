import React from 'react'
import loadable from '@loadable/component'
import useRouter from 'app/hooks/useRouter'

const Fallback = () => <>loading...</>

const AsyncPage = loadable(
	(props: any) => import(`./pages/${props.page}/index.js`),
	{
		cacheKey: (props: any) => props.page,
		fallback: <Fallback />,
	},
)

const Routes = () => {
	const [route] = useRouter()
	
	return <AsyncPage page={route.match.page} />
}

export default Routes
