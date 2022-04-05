import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import spacing from './Spacing'
import sizing from './Sizing'
import styles from './Styles'
import colors from './Colors'
import breakpoints from './BreakPoints'

// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const overrides = {
	styles,
	colors,
	breakpoints,
	spacing,
	sizing,
	config,
}

const theme = extendTheme(overrides)

export default theme
