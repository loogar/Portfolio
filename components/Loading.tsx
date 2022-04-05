import { FC } from 'react'
import { Box, BoxProps, chakra, Flex, FlexProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { animatedColor } from '../data'

const Loading: FC = () => {
	const MotionBox = motion<BoxProps>(Box)
	const MotionFlex = motion<FlexProps>(Flex)

	const loaderVariants = {
		animationOne: {
			x: [-20, 20],
			y: [0, -30],
			backgroundColor: ['#60F', '#09F', '#FA0'],

			transition: {
				x: {
					yoyo: Infinity,
					duration: 0.5,
				},
				y: {
					yoyo: Infinity,
					duration: 0.25,
					ease: 'easeOut',
				},
			},
		},
	}

	return (
		<MotionFlex
			initial={{ x: '-100vw' }}
			animate={{
				x: 0,
				transition: {
					type: 'spring',
					stiffness: 10,
				},
			}}
			w='100vw'
			h='100vh'
			justifyContent='center'
		>
			<Head>
				<title>Loading | Ragool's portfolio</title>
			</Head>
			<MotionBox
				my='auto'
				width='30px'
				height='30px'
				borderRadius='50%'
				variants={loaderVariants}
				animate='animationOne'
			/>
		</MotionFlex>
	)
}

export default Loading
