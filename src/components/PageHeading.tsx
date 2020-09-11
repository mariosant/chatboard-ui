import React from 'react'
import { Heading, HeadingProps } from 'app/components'

export interface PageHeadingProps extends HeadingProps {}

export const PageHeading: React.FC<PageHeadingProps> = (props) => (
	<Heading size="lg" fontWeight="normal" {...props}>
		{props.children}
	</Heading>
)
