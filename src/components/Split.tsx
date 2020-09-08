import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/core'

const Split: React.FC<FlexProps> = (props) => (
	<Flex height="100vh" width="100vw" overflow="hidden" {...props}>
		{props.children}
	</Flex>
)

export default Split
