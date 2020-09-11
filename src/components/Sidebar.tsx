import React from 'react'
import { Stack, Link, LinkProps, Icon } from 'app/components'

export interface SidebarNavLinkProps extends LinkProps {
	active?: boolean
	icon: string
}

export const SidebarNavLink: React.FC<SidebarNavLinkProps> = (props) => (
	<Link
		bg={props.active ? 'brand' : 'transparent'}
		color="white"
		borderRadius={4}
		p={2}
		_hover={{
			bg: props.active ? 'brand' : 'gray.500',
			textDecoration: 'none',
		}}
		{...props}
	>
		<Stack isInline spacing={2} display="flex" alignItems="center">
			<Icon name={props.icon} />
			<>{props.children}</>
		</Stack>
	</Link>
)

export const SidebarContainer: React.FC = (props) => (
	<Stack
		height="100%"
		width={240}
		color="white"
		bg="gray.600"
		p={4}
		spacing={3}
	>
		{props.children}
	</Stack>
)
