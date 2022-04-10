import { FC } from 'react'
import {
	Flex,
	Box,
	Text,
	Link as CLink,
	Spacer,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Icon,
	useColorModeValue,
	Avatar,
	Divider,
	Heading,
	useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
	FcMenu,
	FcHome,
	FcBusinessman,
	FcTimeline,
	FcCustomerSupport,
	FcIdea,
} from 'react-icons/fc'
import { useRouter } from 'next/router'
import { IoLanguageOutline } from 'react-icons/io5'
import { MdLightMode, MdNightlight } from 'react-icons/md'

const SmallHeader: FC = () => {
	const { t } = useTranslation('common')
	const color = useColorModeValue('grey', 'white')
	const menuColor = useColorModeValue('black', 'white')
	const hoverColor = useColorModeValue('#332FD0', '#332FD0')
	const { colorMode, toggleColorMode } = useColorMode()
	const router = useRouter()

	return (
		<Flex px={4} py={2} as='nav' direction='row' w='100vw'>
			<Text onClick={() => router.push('/')} fontSize='2em' fontWeight='bold'>
				R
			</Text>

			<Spacer />

			<Flex gridGap={3}>
				<Menu placement='bottom'>
					<CLink
						color={color}
						p={3}
						borderRadius={8}
						_hover={{ textDecor: 'none', backgroundColor: hoverColor, color: color }}
					>
						<MenuButton w='100%'>
							<Flex fontSize='20px'>
								<Icon as={IoLanguageOutline} fontSize='xl' color={'blue.500'} />
							</Flex>
						</MenuButton>
					</CLink>

					<MenuList zIndex={9999} color={menuColor}>
						<Link href={router.pathname} passHref locale='en'>
							<MenuItem>English</MenuItem>
						</Link>
						<Link href={router.pathname} passHref locale='fr'>
							<MenuItem>French </MenuItem>
						</Link>
					</MenuList>
				</Menu>
				<IconButton
					onClick={toggleColorMode}
					variant='ghost'
					colorScheme='teal'
					fontSize='20px'
					aria-label='color mode'
					icon={colorMode === 'light' ? <MdLightMode /> : <MdNightlight />}
				/>
				<Menu>
					<MenuButton
						as={IconButton}
						fontSize='20px'
						aria-label='Options'
						icon={<FcMenu />}
						variant='ghost'
					/>
					<MenuList zIndex={9999}>
						<MenuItem onClick={() => router.push('/')} icon={<FcHome />}>
							{t('heading0')}
						</MenuItem>
						<MenuItem onClick={() => router.push('/profile')} icon={<FcBusinessman />}>
							{t('heading6')}
						</MenuItem>
						<MenuItem onClick={() => router.push('/timeline')} icon={<FcTimeline />}>
							{t('heading3')}
						</MenuItem>
						<MenuItem onClick={() => router.push('/projects')} icon={<FcIdea />}>
							{t('heading2')}
						</MenuItem>

						<MenuItem
							onClick={() => router.push('/contact')}
							icon={<FcCustomerSupport />}
						>
							{t('heading4')}
						</MenuItem>

						<Flex p='5%' flexDir='column' w='100%' alignItems='flex-start' mb={1}>
							<Divider display='flex' />
							<Flex mt={4} align='center'>
								<Avatar size='sm' src='/PHOTO.jpeg' />
								<Flex flexDir='column' ml={4} display='flex'>
									<Heading as='h3' size='sm'>
										Ragool Krishnan
									</Heading>
									<Text color='gray'> {t('profession')}</Text>
								</Flex>
							</Flex>
						</Flex>
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	)
}

export default SmallHeader
