import { mode } from '@chakra-ui/theme-tools'

/* eslint-disable import/no-anonymous-default-export */
export default {
	styles: {
		global: (props: any) => ({
			'html, body': {
				fontSize: 'sm',
				bg: mode('white', '#000000')(props),
				color: props.colorMode === 'dark' ? 'white' : '#000000',
				lineHeight: 'tall',
			},
		}),
	},
}
