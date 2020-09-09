import React from 'react'
import {Button, Stack, Link, LinkProps, Image} from 'app/components'

const NavLink: React.FC<LinkProps> = (props) => {
    return (
        <Link
            color="white"
            display="block"
            borderRadius={4}
            p={2}
            {...props}>
                {props.children}
        </Link>
    )
}

const Container: React.FC = (props) => (
    <Stack height="100%" width={240} bg="gray.600" p={4} spacing={4}>
        <Image src="https://logoipsum.com/logo/logo-10.svg" height={75} objectFit="cover" bg="white"/>
        <NavLink href="/">Dashboard</NavLink>
        <NavLink href="/chats">Conversations</NavLink>
        <NavLink href="/reviews">Reviews</NavLink>
        <NavLink href="/settings">Settings</NavLink>
        {props.children}
    </Stack>
)

export default {
    Container,
    NavLink
}