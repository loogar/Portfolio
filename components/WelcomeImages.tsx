import { useEffect, useState } from 'react'
import Image from 'next/image'

import Welcome from '../public/svgs/welcome.svg'
import Welcome1 from '../public/svgs/welcome1.svg'
import Welcome2 from '../public/svgs/welcome2.svg'
import Welcome3 from '../public/svgs/welcome3.svg'
import Welcome4 from '../public/svgs/welcome4.svg'

const WelcomeImages = () => {
	const images = [Welcome, Welcome1, Welcome2, Welcome3, Welcome4]

	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex === images.length - 1) {
				setCurrentIndex(0)
			} else {
				setCurrentIndex(currentIndex + 1)
			}
		}, 5000)

		return () => clearInterval(intervalId)
	})
	return <Image objectFit='fill' src={images[currentIndex]} alt='svg' />
}

export default WelcomeImages
