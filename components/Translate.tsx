import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	Link as CLink,
	Flex,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IoLanguageOutline } from 'react-icons/io5'

type TranslateProps = {
	navSize: string
	title?: string
}

const Translate: NextPage<TranslateProps> = ({ navSize, title }) => {
	const color = useColorModeValue('grey', 'white')
	const menuColor = useColorModeValue('black', 'white')
	const hoverColor = useColorModeValue('#332FD0', '#332FD0')
	const router = useRouter()

	return (
		<Flex
			mt={30}
			flexDir='column'
			w='100%'
			alignItems={navSize == 'small' ? 'center' : 'flex-start'}
			_hover={{ textDecor: 'none', color: 'white' }}
		>
			<Menu placement='right'>
				<CLink
					color={color}
					p={3}
					borderRadius={8}
					_hover={{ textDecor: 'none', backgroundColor: hoverColor, color: color }}
					w={navSize === 'large' ? '100%' : 'none'}
				>
					<MenuButton w='100%'>
						<Flex>
							<Icon as={IoLanguageOutline} fontSize='xl' color={'blue.500'} />
							<Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
								{title}
							</Text>
						</Flex>
					</MenuButton>
				</CLink>

				<MenuList color={menuColor}>
					<Link href={router.pathname} passHref locale='en'>
						<MenuItem>English</MenuItem>
					</Link>
					<Link href={router.pathname} passHref locale='fr'>
						<MenuItem>French </MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Flex>
	)
}

export default Translate
