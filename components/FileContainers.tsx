import { Flex, HStack, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import useTranslation from 'next-translate/useTranslation'

interface IFileProps {
	text: string
	bg: string
	href: string
}

const FileContainers: FC<IFileProps> = ({ text, bg, href }) => {
	const { t } = useTranslation('common')
	return (
		<Flex
			font-size='2em'
			fontWeight='800'
			height='auto'
			width={['18em', '18em', '40em', '55em', '30em']}
			padding='0.5em 1em'
			borderRadius='0.25em'
			display='table-cell'
			verticalAlign='middle'
			letterSpacing='-2px'
			boxShadow='0 4px 8px 0 rgba(0,0,0,0.2)'
			color='#fff'
			background={bg}
		>
			<Text letterSpacing={1} fontSize='xl'>
				{text}
			</Text>
			<Flex justify='flex-end'>
				<Link
					_focus={{ outline: 'none' }}
					href={href}
					download
					_hover={{
						textDecoration: 'none',
						transform: 'scale(1.02)',
						color: '#F7691C',
					}}
					isExternal
				>
					<HStack _focus={{ outline: 'none' }} spacing={1}>
						<Text letterSpacing={0.3}>{t('button')}</Text>
						<HiOutlineArrowNarrowRight />
					</HStack>
				</Link>
			</Flex>
		</Flex>
	)
}

export default FileContainers
