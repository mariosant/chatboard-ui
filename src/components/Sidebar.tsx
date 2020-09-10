import React from 'react'
import { Stack, Link, LinkProps, Icon } from 'app/components'

export interface NavLinkProps extends LinkProps {
	active?: boolean
	icon: string
}

const NavLink: React.FC<NavLinkProps> = (props) => (
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

const Container: React.FC = (props) => (
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

export default {
	Container,
	NavLink,
}
