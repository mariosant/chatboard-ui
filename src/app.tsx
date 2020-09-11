import React from 'react'
import {
	CSSReset,
	ThemeProvider,
	Helmet,
	Split,
	Box,
	SidebarNavLink,
	SidebarContainer,
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
		<SidebarContainer>
			<Image
				src="https://logoipsum.com/logo/logo-10.svg"
				height={75}
				objectFit="cover"
				bg="white"
			/>

			<SidebarNavLink
				active={isActive('dashboard')}
				href="/dashboards/a/"
				icon="info-outline"
			>
				Dashboard
			</SidebarNavLink>

			<SidebarNavLink
				active={isActive('chats')}
				href="/dashboards/a/chats"
				icon="chat"
			>
				Chats
			</SidebarNavLink>

			<SidebarNavLink
				active={isActive('settings')}
				href="/dashboards/a/settings"
				icon="settings"
			>
				Settings
			</SidebarNavLink>

			<SidebarNavLink href="/" icon="arrow-back">
				Back to overview
			</SidebarNavLink>

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
		</SidebarContainer>
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
