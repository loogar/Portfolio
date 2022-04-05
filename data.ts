import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import {
	SiApollographql,
	SiGraphql,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiTypescript,
} from 'react-icons/si'
import { DiHtml5 } from 'react-icons/di'
import { BsGithub } from 'react-icons/bs'
import { FaGitlab, FaNodeJs, FaReact } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { BiCodeCurly } from 'react-icons/bi'

export const LANGUAGES = [
	{
		label: 'JavaScript',
		icon: IoLogoJavascript,
	},
	{
		label: 'TypeScript',
		icon: SiTypescript,
	},
	{
		label: 'HTML5',
		icon: DiHtml5,
	},
	{
		label: 'CSS3',
		icon: IoLogoCss3,
	},
	{
		label: 'DART',
		icon: BiCodeCurly,
	},
	{
		label: 'React',
		icon: FaReact,
	},
	{
		label: 'Next',
		icon: SiNextdotjs,
	},
	{
		label: 'Apollo 3',
		icon: SiApollographql,
	},
	{
		label: 'Graphql',
		icon: SiGraphql,
	},
	{
		label: 'node.js',
		icon: FaNodeJs,
	},
	{
		label: 'Mysql',
		icon: SiMysql,
	},
	{
		label: 'Mongodb',
		icon: SiMongodb,
	},
	{
		label: 'Figma',
		icon: FiFigma,
	},
	{
		label: 'GitHub',
		icon: BsGithub,
	},
	{
		label: 'GitLab',
		icon: FaGitlab,
	},
]

const extendBorder = '#ED4107'

export const nodes = [
	{
		id: 'birth',
		data: { label: 'Birth year: 1995' },
		position: { x: 200, y: 25 },
		style: {
			background: 'none',
			color: extendBorder,
			border: `1px dashed ${extendBorder}`,
			fontSize: '0.80em',
		},
	},

	{
		id: 'schooling-1',
		data: { label: 'Sowdambika Matriculation School (2000 - 2006)' },
		position: { x: 10, y: 120 },
		style: {
			fontSize: '0.80em',
		},
	},
	{
		id: 'schooling-2',
		data: { label: 'Lions Matriculation School (2008 - 2010)' },
		position: { x: 200, y: 120 },
		style: {
			fontSize: '0.80em',
		},
	},
	{
		id: 'schooling-3',
		data: { label: 'Nobel Matriculation School (2006 - 2012)' },
		position: { x: 370, y: 120 },
		style: {
			background: 'none',
			color: extendBorder,
			border: `1px dashed ${extendBorder}`,
			fontSize: '0.80em',
		},
	},
	{
		id: 'college-1',
		data: { label: 'Bharath University (2012 - 2016)' },
		position: { x: 250, y: 250 },
		style: {
			background: 'none',
			color: extendBorder,
			border: `1px dashed ${extendBorder}`,
			fontSize: '0.80em',
		},
	},
	{
		id: 'college-2',
		data: { label: 'Institut supérieur d’électronique de Paris (2018 - 2020)' },
		position: { x: 30, y: 250 },
		style: {
			background: 'none',
			color: extendBorder,
			border: `1px dashed ${extendBorder}`,
			fontSize: '0.80em',
		},
	},
	{
		id: 'internship-1',
		data: { label: 'UNEP-ISEP (6 months)' },
		position: { x: 90, y: 370 },
		style: {
			fontSize: '0.80em',
		},
	},
	{
		id: 'internship-2',
		data: { label: 'Flaminem (6 months)' },
		position: { x: 290, y: 370 },
		style: {
			background: 'none',
			color: extendBorder,
			border: `1px dashed ${extendBorder}`,
			fontSize: '0.80em',
		},
	},
	{
		id: 'job-1',
		data: { label: 'Sievable (2021 - present)' },
		position: { x: 190, y: 470 },
		style: {
			fontSize: '0.80em',
		},
	},
]

export const edge = [
	{ id: 'a', source: 'birth', target: 'schooling-1', animated: false },
	{ id: 'b', source: 'birth', target: 'schooling-2', animated: false },
	{ id: 'c', source: 'birth', target: 'schooling-3' },
	{ id: 'd', source: 'schooling-3', target: 'college-1' },
	{ id: 'e', source: 'college-1', target: 'college-2' },
	{ id: 'f', source: 'college-2', target: 'internship-1' },
	{ id: 'g', source: 'internship-1', target: 'internship-2' },
	{ id: 'h', source: 'internship-2', target: 'job-1' },
]

export const PROJECT_DATA = [
	{
		src: 'https://drive.google.com/uc?id=1lab_Xvy1d2mxoiix_FaQDWeJ362UaH-n',
		alt: 'Techies Blog',
		title: 'Techies Blog',
		english_caption: 'A Modern Blog with Headless CMS.',
		french_caption: 'Un blog moderne avec Headless CMS.',
		technology_used: ['Next.js', 'TailwindCSS', 'graphQl', 'graphcms'],
		live_link: 'https://techies-blog.vercel.app/',
		github_link: 'https://github.com/loogar/techies_blog',
	},
	{
		src: 'https://drive.google.com/uc?id=1qzmcRyUnLgoR9eTiNFG7uJKdusP2KVJ6',
		alt: 'Techies',
		title: 'Techies',
		english_caption: 'A social media app for developers.',
		french_caption: 'Une application de médias sociaux pour les développeurs.',
		technology_used: ['React', 'node.js', 'express', 'mongoAtlas', 'Postman'],
		live_link: 'https://techies-application.herokuapp.com/',
		github_link: 'https://github.com/loogar/techies',
	},
	{
		src: 'https://drive.google.com/uc?id=1StnzBjAuQAtlp0z8NUtfrwJAbeUxTCiB',
		alt: 'Awesome links img',
		title: 'Awesome links',
		english_caption:
			'This is a Fullstack Web application With TypeScript, PostgreSQL, Next.js, Prisma & GraphQL.',
		french_caption:
			'Il sagit dune application Web Full Stack avec TypeScript, PostgreSQL, Nestjs, Prisma et GraphQL.',
		technology_used: [
			'Next.js',
			'TypeScript',
			'graphQl',
			'prisma',
			'authO',
			'TailwindCSS',
			'PostgreSQL',
		],
		github_link: 'https://github.com/loogar/links',
	},
	{
		src: 'https://drive.google.com/uc?id=1kNNqrSnBnqzGFPQHwBtGCYuOjXWBKJrf',
		alt: 'Brain Color',
		title: 'Brain Color',
		english_caption: 'A quiz app for android users.',
		french_caption: "Une application de quiz pour les utilisateurs d'Android.",
		technology_used: ['Android sdk', 'Java'],
		github_link: 'https://github.com/loogar/Brain_Color',
	},

	{
		src: 'https://drive.google.com/uc?id=1p3RpcBYpgJJps2kc3BoWa0zaCEeCBbZ2',
		alt: 'Smart Home',
		title: 'Smart Home',
		english_caption:
			'A website connects to your home sensor and allows you to control your home.',
		french_caption:
			'Un site Web se connecte à votre capteur domestique et vous permet de contrôler votre maison.',
		technology_used: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'],
		github_link: 'https://github.com/loogar/Smart-home',
	},
	{
		src: 'https://drive.google.com/uc?id=1O-GviFDGNmIZ-7645E3ml8KiupeYqkOX',
		alt: 'JavaScript Pig Game',
		title: 'JavaScript Pig Game',
		english_caption: 'A game allows you to roll dice and decide your fate.',
		french_caption: 'Un jeu vous permet de lancer des dés et de décider de votre destin.',
		live_link: 'https://loogar.github.io/pig-game-with-js/',
		github_link: 'https://github.com/loogar/pig-game-with-js',
		technology_used: ['HTML5', 'CSS3', 'JavaScript', 'gh-pages'],
	},
	{
		src: 'https://drive.google.com/uc?id=19sFRU1HhU9SGoiLise0Oalelb3M1hs6R',
		alt: 'JavaScript Budject app',
		title: 'JavaScript Budject app',
		english_caption:
			'A budget web app that allows you to keep up with your spendings with modern javascript features.',
		french_caption:
			'Une application Web à petit budget qui vous permet de suivre vos dépenses avec des fonctionnalités javascript modernes.',
		technology_used: ['HTML5', 'CSS3', 'JavaScript', 'gh-pages'],
		live_link: 'https://loogar.github.io/Budget-planning/ ',
		github_link: 'https://github.com/loogar/Budget-planning',
	},
	{
		src: 'https://drive.google.com/uc?id=1R_QCOKvpba3hnX1DKILMLumF5DCEmtrJ',
		alt: 'React Tetris',
		title: 'React Tetris',
		english_caption: 'A tetris game with react and typescript.',
		french_caption: 'Un jeu de Tetris avec react et typeScript.',
		technology_used: ['React', 'TypeScript'],
		github_link: 'https://github.com/loogar/Tetris-game-with-react-ts',
	},
	{
		src: 'https://drive.google.com/uc?id=1w8G0qBkHm7uFMPOM651IX2ETB6O0TuSc',
		alt: 'BMI calculator',
		title: 'BMI calculator',
		extendBorder: 'BMI calculator',
		english_caption: 'A flutter mobile app to calculate your Body mass index.',
		french_caption: 'Une flutter application mobile pour calculer votre indice de masse.',
		technology_used: ['Flutter'],
		github_link: 'https://github.com/loogar/BMI_Calculator',
	},
	{
		src: 'https://drive.google.com/uc?id=1F94_zwva2wmn3xjyIG61o6l284kuHAek',
		alt: 'The change',
		title: 'The change',
		english_caption:
			'We Created a website that allows users to exchange their homes during their holidays. This site allows two users to communicate in according to their needs and availability.',
		french_caption:
			"Nous avons créé un site Web qui permet aux utilisateurs d'échanger leur maison pendant leurs vacances. Ce site permet à deux utilisateurs de communiquer en fonction de leurs besoins et disponibilités.",
		technology_used: ['HTML5', 'CSS3', 'JavaScript', 'JSP', 'SQL'],
		github_link: 'https://github.com/loogar/Change',
	},

	{
		src: 'https://drive.google.com/uc?id=1UmppY6lUnOCAIfJbjxciQ26UbPVOFDuQ',
		alt: 'UNEP-ISEP',
		title: 'UNEP-ISEP',
		english_caption:
			'A product registration website for UNEP a collebration with ISEP using blockchain technology.',
		french_caption:
			"Un site Web d'enregistrement de produit pour le UNEP en collaboration avec ISEP utilisant la technologie blockchain.",
		technology_used: ['HTML5', 'CSS3', 'JavaScript', 'Blockchain'],
		github_link: 'https://github.com/loogar/UNEP',
	},
	{
		src: 'https://drive.google.com/uc?id=1nAs14F6UMkOYPetQjqf55lA_D1xbA8FH',
		alt: 'Flutter Chat App',
		title: 'Flutter Chat App',
		english_caption: 'A flutter chat application.',
		french_caption: 'Une messagère application mobile intégré flutter.',
		technology_used: ['Flutter'],
		github_link: 'https://github.com/loogar/Flash_chat_flutter_app',
	},
	{
		src: 'https://drive.google.com/uc?id=17LiMGZks5nXIH5i3DqOrhr982j9jzR73',
		alt: 'Image Editor',
		title: 'C++ Image Editor',
		english_caption: 'A windows application allows you to edit any image.',
		french_caption:
			"Une application Windows vous permet de modifier n'importe quelle image.",
		technology_used: ['C++'],
		github_link: 'https://github.com/loogar/Image_Editor_C-',
	},
]

export const slideRight = {
	name: 'Slide Right',
	variants: {
		initial: {
			opacity: 0,
			left: '-100%',
			scale: 0.6,
		},
		animate: {
			opacity: 1,
			left: 0,
			scale: 1,
		},
		exit: {
			opacity: 0,
			left: '100%',
			scale: 0.6,
		},
	},
	transition: {
		duration: 0.7,
	},
}

export const animatedColor = ['#60F', '#09F', '#FA0']
