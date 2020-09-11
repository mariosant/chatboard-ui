import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/core'

export interface SplitProps extends FlexProps {}

export const Split: React.FC<SplitProps> = (props) => (
	<Flex height="100vh" width="100vw" overflow="hidden" {...props}>
		{props.children}
	</Flex>
)
