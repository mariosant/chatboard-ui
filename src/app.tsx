import React from 'react'
import {
	CSSReset,
	ThemeProvider,
	Helmet,
	Split,
	Box,
	Sidebar,
	Image,
	Heading,
	Text,
	Stack,
} from 'app/components'
import { StoreProvider } from 'app/store'
import theme from 'app/theme'
import Routes from 'app/routes'
import useRouter from 'app/hooks/useRouter'

const Navigation = () => {
	const [route] = useRouter()

	const isActive = (page: string) => page === route.match.page

	return (
		<Sidebar.Container>
			<Image
				src="https://logoipsum.com/logo/logo-10.svg"
				height={75}
				objectFit="cover"
				bg="white"
			/>

			<Sidebar.NavLink
				active={isActive('dashboard')}
				href="/dashboards/a/"
				icon="info-outline"
			>
				Dashboard
			</Sidebar.NavLink>

			<Sidebar.NavLink
				active={isActive('chats')}
				href="/dashboards/a/chats"
				icon="chat"
			>
				Chats
			</Sidebar.NavLink>

			<Sidebar.NavLink
				active={isActive('settings')}
				href="/dashboards/a/settings"
				icon="settings"
			>
				Settings
			</Sidebar.NavLink>

			<Sidebar.NavLink href="/" icon="arrow-back">
				Back to overview
			</Sidebar.NavLink>

			<Box flexGrow={1}></Box>

			<Stack
				p={2}
				color="white"
				bg="rgba(255, 255, 255, 0.1)"
				borderRadius={4}
				spacing={2}
			>
				<Heading size="md" fontWeight={100}>
					Lorem Kristin inc
				</Heading>
				<Text>Generic English</Text>
				<Text>Generic French</Text>
			</Stack>
		</Sidebar.Container>
	)
}

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
						<Navigation />
						<Box flexGrow={1} overflow="auto">
							<Routes />
						</Box>
					</Split>
				</StoreProvider>
			</>
		</ThemeProvider>
	</React.StrictMode>
)
