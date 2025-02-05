import Image from 'next/image'

export default function Page() {
	return (
		<div className="w-full h-screen max-h-[80vh] bg-[url(/background.png)] bg-cover bg-center flex items-center justify-center">
			<span className="flex items-center justify-center flex-col">
				<Image src={'/logo.png'} width={360} height={360} alt="Logo" />
			</span>
		</div>
	)
}
