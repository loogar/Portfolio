import { Flex, SimpleGrid } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'
import AnimatedHeading from '../components/AnimatedHeading'
import ProjectCard from '../components/ProjectCard'
import { PROJECT_DATA } from '../data'

const projects = () => {
	const { t, lang } = useTranslation('common')

	return (
		<Flex my={4} gridGap={5} direction='column'>
			<Head>
				<title>{t('meta_project')}</title>
				<meta name='description' content={t('desc')} />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={t('meta_project')} />
				<meta property='og:description' content={t('desc')} />
				<meta property='og:image' content='https://www.ragoolkrishnan.com/meta.png' />
				<meta property='og:url' content='https://www.ragoolkrishnan.com' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={t('meta_project')} />
				<meta name='twitter:description' content={t('desc')} />
				<meta name='twitter:image' content='http://www.ragoolkrishnan.com/meta.png' />
			</Head>
			<AnimatedHeading title={t('heading2')} />
			<SimpleGrid pr={2} columns={[1, 2, 2, 2, 3]} spacing='20px'>
				{PROJECT_DATA.map((project) => (
					<ProjectCard
						key={project.alt}
						tags={project.technology_used}
						src={project.src}
						alt={project.alt}
						liveLink={project.live_link}
						githubLink={project.github_link}
						title={project.title}
						description={lang === 'en' ? project.english_caption : project.french_caption}
					/>
				))}
			</SimpleGrid>
		</Flex>
	)
}

export default projects
