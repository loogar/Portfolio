import { Heading, HeadingProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

interface IHeadingProps {
	title: string
}

const AnimatedHeading: FC<IHeadingProps> = ({ title }) => {
	const MotionHeading = motion<HeadingProps>(Heading)
	return (
		<MotionHeading
			initial={{ y: -250 }}
			animate={{ y: -10, transition: { delay: 0.2, type: 'Spring', stiffness: 200 } }}
			color='secondary'
			w='full'
			fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
		>
			{title}
		</MotionHeading>
	)
}

export default AnimatedHeading
