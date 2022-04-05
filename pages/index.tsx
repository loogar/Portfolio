import Head from 'next/head'
import React, { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
	Button,
	Flex,
	Heading,
	Stack,
	useBreakpointValue,
	Text,
	useColorModeValue,
	Fade,
	FlexProps,
	TextProps,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import WelcomeImages from '../components/WelcomeImages'

const Home: FC = () => {
	const { t } = useTranslation('common')

	const bgTextColor = useColorModeValue('#E15FED', 'secondary')
	const buttonColor = useColorModeValue('teal', 'orange')
	const MotionFlex = motion<FlexProps>(Flex)
	const MotionText = motion<TextProps>(Text)

	const router = useRouter()

	return (
		<MotionFlex
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
			ml='2'
		>
			<Head>
				<title>{t('meta_home')}</title>
				<meta name='description' content={t('desc')} />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={t('title')} />
				<meta property='og:description' content={t('desc')} />
				<meta property='og:image' content='https://www.ragoolkrishnan.com/meta.png' />
				<meta property='og:url' content='https://www.ragoolkrishnan.com' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={t('title')} />
				<meta name='twitter:description' content={t('desc')} />
				<meta name='twitter:image' content='http://www.ragoolkrishnan.com/meta.png' />
			</Head>

			<Stack minH={'100vh'} direction={['column', 'column', 'column', 'column', 'row']}>
				<Flex flex={1} align={'center'} justify={'center'}>
					<Stack spacing={6} w={['70vw', '70vw', '80vw', '80vw', '30vw']}>
						<Heading fontSize={['2.3em', '2.3em', '2.3em', '4.2em', '4.3em']}>
							<Fade in>
								<Text>{t('action')}</Text>

								<Text
									as={'span'}
									position={'relative'}
									_after={{
										content: "''",
										width: 'full',
										height: useBreakpointValue({ base: '20%', md: '30%' }),
										position: 'absolute',
										bottom: 2,
										left: 0,
										bg: bgTextColor,
										zIndex: -1,
									}}
								>
									{`${t('intro')} Ragool`},
								</Text>

								<br />
								<MotionText
									animate={{
										color: [
											'#60F',
											'#09F',
											'#FA0',
											'#F900BF',
											'#9900F0',
											'#247881',
											'#333C83',
											'#0093AB',
											'#30AADD',
											'#FD5D5D',
											'#FFD93D',
											'#332FD0',
										],
										transition: {
											delay: 5,
											duration: 20,
											ease: [0.075, 0.82, 0.165, 1],
											repeat: Infinity,
											repeatType: 'reverse',
										},
									}}
									as={'span'}
								>
									{t('profession')}
								</MotionText>
							</Fade>
						</Heading>
						<Text px='3' fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
							{t('description')}
						</Text>
						<Button
							w='10rem'
							onClick={() => router.push('/contact')}
							colorScheme={buttonColor}
							variant='outline'
						>
							Contact Me
						</Button>
					</Stack>
				</Flex>
				<Flex justify='center' w={['80vw', '80vw', '90vw', '90vw', '60vw']}>
					<WelcomeImages />
				</Flex>
			</Stack>
		</MotionFlex>
	)
}

export default Home
