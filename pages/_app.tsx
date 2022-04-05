import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import theme from '../styles/Theme'

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const handleStart = (url: string) => {
			url !== router.pathname ? setLoading(true) : setLoading(false)
		}
		const handleComplete = () => setLoading(false)

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)
	}, [router])
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>{loading ? <Loading /> : <Component {...pageProps} />}</Layout>
		</ChakraProvider>
	)
}

export default App
