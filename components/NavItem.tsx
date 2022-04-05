import React from 'react'
import {
	Flex,
	Text,
	Icon,
	Link,
	Menu,
	MenuButton,
	useColorModeValue,
	Tooltip,
	Box,
} from '@chakra-ui/react'
import { NextPage } from 'next'

interface INavItemProps {
	navSize: string
	title?: string
	active?: boolean
	onClick?: () => void
	icon: any
}

export const NavItem: NextPage<INavItemProps> = ({
	icon,
	title,
	active,
	navSize,
	onClick,
}) => {
	const activeBG = useColorModeValue('#332FD0', '#332FD0')
	const hoverColor = useColorModeValue('#332FD0', '#332FD0')
	const color = useColorModeValue('grey', 'white')

	return (
		<Box w='100%'>
			<Tooltip
				hasArrow
				label={title}
				isDisabled={navSize !== 'small'}
				zIndex={9999}
				shouldWrapChildren
			>
				<Flex
					mt={30}
					flexDir='column'
					w='100%'
					onClick={onClick}
					alignItems={navSize == 'small' ? 'center' : 'flex-start'}
					_hover={{ textDecor: 'none', color: 'white' }}
				>
					<Menu placement='right'>
						<Link
							backgroundColor={active ? activeBG : 'none'}
							color={active ? 'white' : color}
							p={3}
							borderRadius={8}
							_hover={{ textDecor: 'none', backgroundColor: hoverColor, color: 'white' }}
							w={navSize === 'large' ? '100%' : 'none'}
						>
							<MenuButton w='100%'>
								<Flex>
									<Icon as={icon} fontSize='xl' color={active ? 'white' : 'gray.500'} />
									<Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
										{title}
									</Text>
								</Flex>
							</MenuButton>
						</Link>
					</Menu>
				</Flex>
			</Tooltip>
		</Box>
	)
}
