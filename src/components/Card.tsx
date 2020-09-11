import React from 'react'
import { Box, BoxProps, Heading, HeadingProps } from 'app/components'

export interface CardProps extends BoxProps {}

export const Card: React.FC<BoxProps> = (props) => (
	<Box
		bg="white"
		p={4}
		borderRadius={8}
		borderColor="gray.200"
		borderWidth={1}
		{...props}
	>
		{props.children}
	</Box>
)

export interface CardHeadingProps extends HeadingProps {}

export const CardHeading: React.FC<CardHeadingProps> = (props) => (
	<Heading size="md" fontWeight="normal" mb="0.6rem" {...props}>
		{props.children}
	</Heading>
)
