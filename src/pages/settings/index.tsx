import React from 'react'
import {
	Stack,
	Card,
	PageHeading,
	CardHeading,
	Input,
	Text,
} from 'app/components'

const Page = () => (
	<Stack p={5} spacing={5}>
		<PageHeading>Settings</PageHeading>

		<Card maxWidth={600}>
			<CardHeading>Lorem this shit</CardHeading>
			<Stack spacing={4}>
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
					pariatur laudantium odit corrupti eaque vel ducimus ipsum, amet
					quibusdam sapiente possimus sequi quos. Nobis qui distinctio animi
					vitae voluptas rem.
				</Text>
				<label>
					Thing
					<Input placeholder="lorem ipsum" />
				</label>
			</Stack>
		</Card>
	</Stack>
)

export default Page
