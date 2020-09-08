import React from 'react'
import { CSSReset, ThemeProvider, Helmet } from 'app/components'
import { StoreProvider } from 'app/store'
import theme from 'app/theme'
import Routes from 'app/routes'

export default () => (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<>
				<Helmet>
					<title>Chatboard</title>
				</Helmet>
				<CSSReset />
				<StoreProvider>
					<Routes />
				</StoreProvider>
			</>
		</ThemeProvider>
	</React.StrictMode>
)
