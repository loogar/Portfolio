import { Flex } from '@chakra-ui/react'
import React from 'react'
import lostImage from '../public/svgs/404.svg'
import Image from 'next/image'
import Head from 'next/head'

const lost = () => {
	return (
		<Flex justifyContent='center' mt='20vh' flex={1}>
			<Head>
				<title>Page not found | Ragool's Portfolio</title>
			</Head>
			<Image src={lostImage} alt='svg' />
		</Flex>
	)
}

export default lost
