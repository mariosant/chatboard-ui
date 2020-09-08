import { routerKey } from '@storeon/router'
import useStoreon from 'app/hooks/useStoreon'

const useRouter = () => {
	const { [routerKey]: route } = useStoreon(routerKey)

	const push = (url: string) => (window.location.href = url)
	const replace = (url: string) => window.location.replace(url)

	return [route, { push, replace }] as [
		typeof route, {
			push: typeof push,
			replace: typeof replace
		}
	]
}

export default useRouter
