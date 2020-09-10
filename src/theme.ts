import { theme as defaultTheme } from 'app/components'

const theme = {
	...defaultTheme,
	fonts: {
		heading:
			'"Cabin",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif',
		body:
			'"Cabin",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif',
		mono: 'Menlo, monospace',
	},
	colors: {
		...defaultTheme.colors,
		brand: defaultTheme.colors.blue['400'],
	},
}

export default theme
