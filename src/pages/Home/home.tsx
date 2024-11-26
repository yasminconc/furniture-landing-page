import React from 'react'
import Header from '../../components/Header/Header' // Certifique-se de ajustar o caminho
// Se necessário, ajuste o caminho para onde seu CSS customizado está

const LandingPage: React.FC = () => {
	return (
		<div className='relative min-h-screen bg-white'>
			<Header />


			<section
				className='flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center text-white'
				style={{
					backgroundImage: "url('/src/assets/homeBackground.svg')",
					height: '100vh',

				}}
			>
				<div className=' flex flex-col items-center text-center mb-52 space-y-12 max-w-4xl'>
					<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
						Make Your Interior More Minimalistic & Modern
					</h1>
					<p className='text-lg sm:text-xl max-w-lg'>
						Turn your room with Panto into a lot more minimalist and modern with
						ease and speed.
					</p>	
				</div>

			</section>
			{/* "Why Choosing Us" Section */}
			<section className='flex ml-10 items-center py-28 bg-white text-black'>
				<h2 className='max-w-48 text-2xl md:text-3xl font-bold '>
					Why Choosing Us
				</h2>
				<div className='flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8  mx-auto'>
					{/* Cards */}
					<div className='flex flex-col items-start '>
						<h3 className='font-semibold text-xl mb-4 '>Luxury Facilities</h3>
						<p className='text-gray-700 font-medium max-w-80 '>
							The advantage of hiring a workspace with us is that it gives you
							comfortable service and all-around facilities.
						</p>
            <p className='mt-6' >
              More info 
            </p>
					</div>
					<div className='flex flex-col items-start'>
						<h3 className='font-semibold text-xl mb-4'>Affordable Price</h3>
						<p className='text-gray-600 font-medium max-w-80'>
							You can get a workspace of the highest quality at an affordable
							price and still enjoy the facilities that are only here.
						</p>
            <p className='mt-6' >
              More info
            </p>
					</div>
					<div className='flex flex-col items-start'>
						<h3 className='font-semibold text-xl mb-4'>Many Choices</h3>
						<p className='text-gray-600 font-medium max-w-80'>
							We provide many unique space choices so that you can choose the
							workspace to your liking.
						</p>
            <p className='mt-6' >
              More info
            </p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default LandingPage
