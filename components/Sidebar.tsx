import React, { useState } from 'react'
import {
	Flex,
	Text,
	IconButton,
	Divider,
	Avatar,
	Heading,
	useColorMode,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react'
import {
	FcTimeline,
	FcMenu,
	FcBusinessman,
	FcIdea,
	FcCustomerSupport,
	FcHome,
} from 'react-icons/fc'
import { NavItem } from './NavItem'
import { MdLightMode, MdNightlight } from 'react-icons/md'
import { useRouter } from 'next/router'
import Translate from './Translate'
import useTranslation from 'next-translate/useTranslation'

const Sidebar = () => {
	const [navSize, changeNavSize] = useState('small')
	const router = useRouter()
	const { t } = useTranslation('common')
	const { colorMode, toggleColorMode } = useColorMode()
	const bg = useColorModeValue('white', '#181818')
	const borderColor = useColorModeValue('lightGrey', '#181818')
	const [isMobile, isMidScreen] = useMediaQuery([
		'(max-width: 30em)',
		'(max-width: 48em)',
	])

	return (
		<Flex
			flex={1}
			zIndex={999}
			pos='sticky'
			left='2'
			h='95vh'
			overflow='scroll'
			sx={{
				msOverflowStyle: 'none',
				scrollbarWidth: 'none',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				'&::-webkit-scrollbar-track': {
					display: 'none',
				},
				'&::-webkit-scrollbar-thumb': {
					display: 'none',
				},
			}}
			marginTop='2.5vh'
			boxShadow={`0 4px 12px 0 ${borderColor}`}
			borderRadius={navSize == 'small' ? '15px' : '30px'}
			w={navSize == 'small' ? '75px' : '200px'}
			flexDir='column'
			bg={bg}
			justifyContent='space-between'
		>
			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				as='nav'
			>
				<IconButton
					background='none'
					mt={5}
					_hover={{ background: 'none' }}
					icon={<FcMenu />}
					onClick={() => {
						navSize == 'small' ? changeNavSize('large') : changeNavSize('small')
					}}
					aria-label={'toggle'}
					disabled={isMobile || isMidScreen}
				/>
				<NavItem
					navSize={navSize}
					icon={FcHome}
					title={t('heading0')}
					onClick={() => router.push('/')}
					active={router.pathname === '/'}
				/>
				<NavItem
					navSize={navSize}
					onClick={() => router.push('/profile')}
					icon={FcBusinessman}
					title={t('heading6')}
					active={router.pathname === '/profile'}
				/>
				<NavItem
					onClick={() => router.push('/timeline')}
					icon={FcTimeline}
					navSize={navSize}
					title={t('heading3')}
					active={router.pathname === '/timeline'}
				/>
				<NavItem
					navSize={navSize}
					icon={FcIdea}
					title={t('heading2')}
					onClick={() => router.push('/projects')}
					active={router.pathname === '/projects'}
				/>
				<Translate navSize={navSize} title='Translate' />
				<NavItem
					navSize={navSize}
					onClick={toggleColorMode}
					icon={colorMode === 'light' ? MdLightMode : MdNightlight}
					title={`${colorMode} mode`}
				/>
				<NavItem
					navSize={navSize}
					icon={FcCustomerSupport}
					title={t('heading4')}
					onClick={() => router.push('/contact')}
					active={router.pathname === '/contact'}
				/>
			</Flex>

			<Flex
				p='5%'
				flexDir='column'
				w='100%'
				alignItems={navSize == 'small' ? 'center' : 'flex-start'}
				mb={4}
			>
				<Divider display={navSize == 'small' ? 'none' : 'flex'} />
				<Flex mt={4} align='center'>
					<Avatar size='sm' src='/PHOTO.jpeg' />
					<Flex flexDir='column' ml={4} display={navSize == 'small' ? 'none' : 'flex'}>
						<Heading as='h3' size='sm'>
							Ragool Krishnan
						</Heading>
						<Text color='gray'>Web Developer</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Sidebar
