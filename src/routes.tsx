import React from 'react'
import loadable from '@loadable/component'
import useRouter from 'app/hooks/useRouter'

const Fallback = () => <>loading...</>

const AsyncPage = loadable(
	(props: any) => {
        console.log(props)
        
        return import(`./pages/${props.page}/index.js`)
    },
	{
		cacheKey: (props: any) => props.page,
		fallback: <Fallback />,
	},
)

const Routes = () => {
	const [route] = useRouter()
	const page = React.useMemo(() => route.match.page, [route])

	return <AsyncPage page={page} />
}

export default Routes
