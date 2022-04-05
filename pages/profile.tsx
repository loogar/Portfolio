import {
	Flex,
	Tag,
	TagLabel,
	Image,
	TagLeftIcon,
	Text,
	useColorModeValue,
	Wrap,
	WrapItem,
	Box,
	VStack,
	Avatar,
	Spacer,
	Progress,
	Link,
	Button,
	FlexProps,
} from '@chakra-ui/react'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { LANGUAGES } from '../data'
import SocialMedia from '../components/SocialMedia'
import FileContainers from '../components/FileContainers'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head'

const Profile = () => {
	const { t } = useTranslation('common')

	const tagColor = useColorModeValue('telegram', 'orange')
	const skillColor = useColorModeValue('#0088CB', 'secondary')

	const MotionFlex = motion<FlexProps>(Flex)

	const MotionVStack = motion(VStack)

	const router = useRouter()
	return (
		<Flex>
			<Head>
				<title>{t('meta_profile')}</title>
				<meta name='description' content={t('desc')} />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={t('meta_profile')} />
				<meta property='og:description' content={t('desc')} />
				<meta property='og:image' content='http://www.ragoolkrishnan.com/meta.png' />
				<meta property='og:url' content='https://www.ragoolkrishnan.com' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={t('meta_profile')} />
				<meta name='twitter:description' content={t('desc')} />
				<meta name='twitter:image' content='http://www.ragoolkrishnan.com/meta.png' />
			</Head>
			<Flex gridGap={[10, 10, 10, 3]} direction='column'>
				<MotionVStack
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.2, duration: 2 } }}
					spacing={-20}
				>
					<Box overflow='hidden' h={['20vh', '20vh', '20vh', '25vh', '40vh']}>
						<Image w='100vw' height='auto' src='/cover.jpeg' />
					</Box>

					<Avatar
						alignSelf='flex-start'
						ml='2rem'
						size='2xl'
						border='2px solid'
						borderColor='grey'
						name='Ragool'
						src='/profile.jpeg'
					/>
				</MotionVStack>
				<MotionFlex
					initial={{ x: '100vw' }}
					animate={{ x: 0, transition: { delay: 1, type: 'Spring', stiffness: 200 } }}
					gridGap={3}
					direction={['column', 'column', 'column', 'column', 'row']}
				>
					<Flex direction='column'>
						<Text fontSize='4xl' fontWeight='semibold'>
							Ragool Krishnan
						</Text>
						<Text fontSize='2xl' color='grey' fontWeight='semibold'>
							{t('profession')}
						</Text>
					</Flex>
					<Spacer />
					<SocialMedia />
				</MotionFlex>

				<MotionFlex
					initial={{ scale: 0, opacity: 0 }}
					animate={{
						scale: 1,
						opacity: 1,
						transition: {
							type: 'spring',
							stiffness: 50,
							delay: 2,
							duration: 1,
						},
					}}
					mr={2}
					gridGap={2}
					direction={['column', 'column', 'column', 'column', 'row']}
				>
					<Flex gridGap={2} direction='column'>
						<FileContainers
							text={t('tile1')}
							bg=' linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);'
							href='/ragools-resume-en.pdf'
						/>

						<Flex
							p={7}
							border='2px'
							boxShadow='lg'
							borderColor='gray'
							w={['18rem', '18rem', '40rem', '55rem', '30rem']}
							h='auto'
							borderRadius='lg'
							direction='column'
						>
							<Text color={skillColor} mb='3'>
								{t('heading7')}
							</Text>
							<Text>Front-end</Text>
							<Progress
								mb='2'
								hasStripe
								isAnimated
								value={70}
								size='xs'
								colorScheme='pink'
							/>

							<Text>Back-end</Text>
							<Progress
								hasStripe
								isAnimated
								mb='2'
								value={50}
								size='xs'
								colorScheme='orange'
							/>

							<Text>Flutter</Text>
							<Progress
								mb='2'
								hasStripe
								isAnimated
								value={30}
								size='xs'
								colorScheme='red'
							/>
						</Flex>
					</Flex>
					<Spacer />
					<Flex
						my={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
						fontWeight='semibold'
						textAlign='center'
						direction='column'
						fontSize='5xl'
					>
						<Text>{t('invite')}</Text>
						<Link
							_focus={{ outline: 'none' }}
							href='https://www.linkedin.com/in/ragool-krishnan/'
							isExternal
						>
							<Text color='secondary'>Linkedin</Text>
						</Link>

						<Text>{t('invite2')}</Text>
						<Button
							_focus={{ outline: 'none' }}
							variant='link'
							color='secondary'
							onClick={() => router.push('/contact')}
						>
							{t('heading4')}
						</Button>
					</Flex>
					<Spacer />

					<Flex gridGap={2} direction='column'>
						<FileContainers
							text={t('tile2')}
							href='/ragools-resume-fr.pdf'
							bg='linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)'
						/>
						<Flex
							ml={['none', 'none', 'none', 'none', 'auto']}
							boxShadow='lg'
							p={7}
							border='2px'
							borderColor='grey'
							w={['18rem', '18rem', '40rem', '55rem', '30rem']}
							borderRadius='lg'
							gridGap={2}
							direction='column'
						>
							<Text color={skillColor}>{`${t('heading5')}:`}</Text>
							<Wrap>
								{LANGUAGES.map((l) => (
									<WrapItem key={l.label}>
										<Tag size='md' variant='outline' colorScheme={tagColor}>
											<TagLeftIcon boxSize='12px' as={l.icon} />
											<TagLabel>{l.label}</TagLabel>
										</Tag>
									</WrapItem>
								))}
							</Wrap>
						</Flex>
					</Flex>
				</MotionFlex>
			</Flex>
		</Flex>
	)
}

export default Profile
