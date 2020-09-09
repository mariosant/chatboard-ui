import React from 'react'
import { CSSReset, ThemeProvider, Helmet, Split, Box, Sidebar } from 'app/components'
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
					<Split bg="gray.50">
						<Sidebar.Container />
						<Box flexGrow={1} overflow="auto">
							<Routes />
						</Box>
					</Split>
				</StoreProvider>
			</>
		</ThemeProvider>
	</React.StrictMode>
)
