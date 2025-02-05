import Image from 'next/image'

export function Footer() {
	return (
		<footer>
			<Image src={'/logo.png'} width={80} height={80} alt="Logo" />
		</footer>
	)
}
