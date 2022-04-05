/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Flex, ContainerProps } from '@chakra-ui/react'

import { FC } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

export const contact: FC = () => {
	const MotionContainer = motion<ContainerProps>(Container)
	const { t } = useTranslation('common')

	return (
		<MotionContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
			maxW='full'
			centerContent
			overflow='hidden'
		>
			<Head>
				<title>{t('meta_contact')}</title>
				<meta name='description' content={t('desc')} />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={t('meta_contact')} />
				<meta property='og:description' content={t('desc')} />
				<meta property='og:image' content='https://www.ragoolkrishnan.com/meta.png' />
				<meta property='og:url' content='https://www.ragoolkrishnan.com' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={t('meta_contact')} />
				<meta name='twitter:description' content={t('desc')} />
				<meta name='twitter:image' content='http://www.ragoolkrishnan.com/meta.png' />
			</Head>
			<Flex>
				<ContactForm />
			</Flex>
		</MotionContainer>
	)
}

export default contact
