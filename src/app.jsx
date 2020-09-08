import React, { useEffect } from 'react'
import { useStoreon } from 'storeon/react'
import { CSSReset, ThemeProvider, Helmet } from '@app/components/mod.jsx'
import { StoreProvider } from '@app/store/mod.js'
import theme from '@app/theme.js'
import Routes from '@app/routes.jsx'

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
