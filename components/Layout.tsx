import { Box, Flex, Stack } from '@chakra-ui/react'

import { NextPage } from 'next'
import Sidebar from './Sidebar'

const Layout: NextPage = ({ children }) => {
	return (
		<Flex w='100vw' h='100vh' direction='row' gridGap={3}>
			<Flex h='auto' w='auto'>
				<Sidebar />
			</Flex>
			<Box zIndex={1} overflowX='hidden' overflowY='scroll' w='full' h='full'>
				{children}
			</Box>
		</Flex>
	)
}

export default Layout
