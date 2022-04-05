import { Flex } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'
import AnimatedHeading from '../components/AnimatedHeading'
import Flow from '../components/Flow'

const timeline = () => {
	const { t } = useTranslation('common')

	return (
		<Flex
			my='10'
			direction='column'
			w={['70vw', '70vw', '95vw', '95vw']}
			h='95vh'
			justify='center'
		>
			<Head>
				<title>{t('meta_time')}</title>
				<meta name='description' content={t('desc')} />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={t('meta_time')} />
				<meta property='og:description' content={t('desc')} />
				<meta property='og:image' content='https://www.ragoolkrishnan.com/meta.png' />
				<meta property='og:url' content='https://www.ragoolkrishnan.com' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={t('meta_time')} />
				<meta name='twitter:description' content={t('desc')} />
				<meta name='twitter:image' content='http://www.ragoolkrishnan.com/meta.png' />
			</Head>
			<AnimatedHeading title={t('heading3')} />

			<Flow />
		</Flex>
	)
}

export default timeline
