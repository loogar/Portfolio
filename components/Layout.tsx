import { Box, Flex } from '@chakra-ui/react'

import { NextPage } from 'next'
import SmallHeader from './SmallHeader'
import Sidebar from './Sidebar'

const Layout: NextPage = ({ children }) => {
	return (
		<Flex w='100vw' h='100vh' direction={['column', 'column', 'row', 'row']} gridGap={3}>
			<Flex display={['none', 'none', 'flex', 'flex']} h='auto' w='auto'>
				<Sidebar />
			</Flex>
			<Flex display={['flex', 'flex', 'none', 'none']}>
				<SmallHeader />
			</Flex>
			<Box
				pl={[2, 2, 0, 0]}
				zIndex={1}
				overflowX='hidden'
				overflowY='scroll'
				w='full'
				h='full'
			>
				{children}
			</Box>
		</Flex>
	)
}

export default Layout
