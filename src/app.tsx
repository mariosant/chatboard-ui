import React from 'react'
import { CSSReset, ThemeProvider, Helmet, Split, Box } from 'app/components'
import { StoreProvider } from 'app/store'
import theme from 'app/theme'
import Routes from 'app/routes'

const TempSidebar = () => (
	<Box height="100%" width={240} bg="gray.600">
		lala
	</Box>
)

export default () => (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<>
				<Helmet>
					<title>Chatboard</title>
				</Helmet>
				<CSSReset />
				<StoreProvider>
					<Split>
						<TempSidebar />
						<Box flexGrow={1} overflow="auto">
							<Routes />
						</Box>
					</Split>
				</StoreProvider>
			</>
		</ThemeProvider>
	</React.StrictMode>
)
