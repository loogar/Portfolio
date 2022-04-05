import {
	Container,
	ContainerProps,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Spacer,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import ProfileTags from './ProfileTags'

interface IProjectProps {
	tags: Array<string>
	src: string
	alt: string
	liveLink?: string
	githubLink: string
	title?: string
	description: string
}

const ProjectCard: FC<IProjectProps> = ({
	src,
	alt,
	title,
	description,
	tags,
	liveLink,
	githubLink,
}) => {
	const linkColor = useColorModeValue('grey', 'white')
	const headingColor = useColorModeValue('gray.700', 'white')
	const containerBg = useColorModeValue('white', 'gray.900')
	const MotionContainer = motion<ContainerProps>(Container)

	return (
		<MotionContainer
			initial={{ scale: 0, opacity: 0 }}
			animate={{
				scale: 1,
				opacity: 1,
				transition: {
					type: 'spring',
					stiffness: 50,
				},
			}}
			boxShadow='2xl'
			bg={containerBg}
			borderRadius='lg'
			overflow={'hidden'}
			height='auto'
			width={['20rem', '20rem', '21rem', '24rem']}
		>
			<Flex overflow={'hidden'} direction='column'>
				<Image h='10rem' w='28rem' objectFit='fill' src={src} alt={alt} />
				<Flex m='3' direction='column'>
					<ProfileTags tags={tags} marginTop='3' />

					<Heading color={headingColor} fontSize={'2xl'} mt='2'>
						{title}
					</Heading>
					<Text my='2' isTruncated w='22rem' color={'gray.500'}>
						{description}
					</Text>
					<Flex mb='auto' fontWeight='semibold' color={linkColor} mt={3} direction='row'>
						{liveLink && (
							<Link
								href={liveLink}
								_focus={{ outline: 'none' }}
								_hover={{
									textDecoration: 'none',
									transform: 'scale(1.02)',
									color: '#F7691C',
								}}
								isExternal
							>
								<HStack spacing={1}>
									<HiOutlineArrowNarrowLeft />
									<Text>Live</Text>
								</HStack>
							</Link>
						)}

						<Spacer />

						<Link
							href={githubLink}
							_focus={{ outline: 'none' }}
							_hover={{
								textDecoration: 'none',
								transform: 'scale(1.02)',
								color: '#F7691C',
							}}
							isExternal
						>
							<HStack spacing={1}>
								<Text>GitHub</Text>
								<HiOutlineArrowNarrowRight />
							</HStack>
						</Link>
					</Flex>
				</Flex>
			</Flex>
		</MotionContainer>
	)
}

export default ProjectCard
