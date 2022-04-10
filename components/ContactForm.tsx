import {
	useColorModeValue,
	Box,
	Wrap,
	WrapItem,
	Flex,
	Heading,
	VStack,
	Button,
	FormControl,
	FormLabel,
	InputGroup,
	InputLeftElement,
	Input,
	Textarea,
	createStandaloneToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import { MdPhone, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import SocialMedia from './SocialMedia'
import ContactImage from '../public/svgs/contact.svg'

const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const toast = createStandaloneToast()
	const { t } = useTranslation('common')

	const cardBg = useColorModeValue('#22335F', '#343D84')

	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()

		if (name === '' || email === '' || message === '') {
			toast({
				title: 'Error',
				position: 'top-right',
				description: 'Fields cannot be empty.',
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
		} else if (regex.test(email) === false) {
			toast({
				title: 'Not a valid e-mail.',
				position: 'top-right',
				description: 'the e-mail you entered is not a valid one.',
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
		} else {
			const data = {
				name,
				email,
				message,
			}

			fetch('/api/contact', {
				method: 'post',
				body: JSON.stringify(data),
			}).catch((error) =>
				toast({
					position: 'top-right',
					title: 'error',
					description: error,
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
			)
			toast({
				position: 'top-right',
				title: 'Message successfully sent.',
				description: `I'll get back to you asap.`,
				status: 'success',
				duration: 4000,
				isClosable: true,
			})
			setName('')
			setEmail('')
			setMessage('')
		}
	}
	return (
		<Box
			boxShadow='xl'
			bg={cardBg}
			color='white'
			borderRadius='lg'
			m={{ sm: 4, md: 16, lg: 10 }}
			p={{ sm: 5, md: 5, lg: 16 }}
		>
			<Box p={4}>
				<Wrap justify='center' spacing={[3, 3, 5, 6, 20]}>
					<WrapItem>
						<Flex direction='column'>
							<Heading fontSize={['3xl', '3xl', '5xl', '5xl']} color='#FDAE76'>
								{t('heading8')}
							</Heading>
							<Box
								alignItems='center'
								h={['10rem', '10rem', '25rem']}
								w={['10rem', '10rem', '25rem']}
							>
								<Image objectFit='contain' src={ContactImage} alt='svg' />
							</Box>
							<Flex justify='center'>
								<SocialMedia />
							</Flex>
						</Flex>
					</WrapItem>
					<WrapItem>
						<Box
							mt={7}
							w={['18rem', '24rem', '27rem', '40rem', '30rem']}
							bg='white'
							borderRadius='lg'
						>
							<Box m={8} color='#0B0E3F'>
								<VStack spacing={5}>
									<Flex
										direction={['column', 'column', 'column', 'row']}
										pl={0}
										gridGap={3}
										alignItems='flex-start'
									>
										<Button
											size='md'
											height='48px'
											width='200px'
											variant='unstyled'
											color='grey'
											_focus={{ outline: 'none' }}
											leftIcon={<MdPhone color='#1970F1' size='20px' />}
										>
											+31 6 03 21 89 31
										</Button>

										<Button
											size='md'
											height='48px'
											width='200px'
											variant='unstyled'
											_focus={{ outline: 'none' }}
											color='grey'
											leftIcon={<MdLocationOn color='#1970F1' size='20px' />}
										>
											Paris, France
										</Button>
									</Flex>
									<FormControl id='name'>
										<FormLabel color='secondary'> {t('form')}</FormLabel>
										<InputGroup borderColor='#E0E1E7'>
											<InputLeftElement pointerEvents='none'>
												<BsPerson color='gray.800' />
											</InputLeftElement>
											<Input
												placeholder={t('placeholder')}
												variant='flushed'
												onChange={(e) => setName(e.target.value)}
												type='text'
												size='md'
												value={name}
											/>
										</InputGroup>
									</FormControl>
									<FormControl id='email'>
										<FormLabel color='secondary'>{t('form1')}</FormLabel>
										<InputGroup borderColor='#E0E1E7'>
											<InputLeftElement pointerEvents='none'>
												<MdOutlineEmail color='gray.800' />
											</InputLeftElement>
											<Input
												type='email'
												placeholder={t('placeholder1')}
												variant='flushed'
												onChange={(e) => setEmail(e.target.value)}
												size='md'
												value={email}
											/>
										</InputGroup>
									</FormControl>
									<FormControl id='message'>
										<FormLabel color='secondary'>{t('form2')}</FormLabel>
										<Textarea
											variant='flushed'
											onChange={(e) => setMessage(e.target.value)}
											placeholder={t('placeholder2')}
											value={message}
										/>
									</FormControl>
									<Flex alignSelf='flex-end'>
										<FormControl id='name'>
											<Button
												onClick={handleSubmit}
												rightIcon={<IoSend />}
												variant='outline'
												color='#196FF1'
											>
												{t('button1')}
											</Button>
										</FormControl>
									</Flex>
								</VStack>
							</Box>
						</Box>
					</WrapItem>
				</Wrap>
			</Box>
		</Box>
	)
}

export default ContactForm
