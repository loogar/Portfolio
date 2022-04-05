import { HStack, IconButton, Link } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

const SocialMedia: FC = () => {
	return (
		<HStack mx={2}>
			<Link href='https://www.linkedin.com/in/ragool-krishnan' isExternal>
				<IconButton
					boxShadow='none'
					color='grey'
					_focus={{ Outline: 'none' }}
					_hover={{ color: 'secondary' }}
					variant='unstyled'
					aria-label='linkedin'
					fontSize='20px'
					icon={<FiLinkedin />}
				/>
			</Link>
			<Link href='https://github.com/loogar' isExternal>
				<IconButton
					variant='unstyled'
					color='grey'
					_focus={{ Outline: 'none' }}
					_hover={{ color: 'secondary' }}
					aria-label='Github'
					fontSize='20px'
					icon={<AiOutlineGithub />}
				/>
			</Link>
			<Link href='mailto:ragoolkrishnan.ram@gmail.com' isExternal>
				<IconButton
					variant='unstyled'
					color='grey'
					_focus={{ Outline: 'none' }}
					_hover={{ color: 'secondary' }}
					aria-label='mail'
					fontSize='20px'
					icon={<AiOutlineMail />}
				/>
			</Link>
		</HStack>
	)
}

export default SocialMedia
