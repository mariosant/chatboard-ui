import React from 'react'
import { hydrate, render } from 'react-dom'
import App from 'app/app'

const rootElement = document.getElementById('root')

if (rootElement?.hasChildNodes()) {
	hydrate(<App />, rootElement)
} else {
	render(<App />, rootElement)
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
	// @ts-ignore
	import.meta.hot.accept()
}
