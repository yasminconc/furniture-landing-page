import React from 'react'
import Header from '../../components/Header/Header'
import bgImg from '../../assets/homeBackground2.svg'
import arrow from '../../assets/arrow.svg'
import plus from  '../../assets/plus.svg'
import star from '../../assets/star.svg'
import firtsChair from '../../assets/firtsChair.svg'
import sofa from '../../assets/sofa.svg'
import chairs from '../../assets/chairs.svg'
import secondSofa from '../../assets/sofa2.svg'
import table from '../../assets/table.svg'

const LandingPage: React.FC = () => {
	return (
		<div className='bg-white'>
			<section
				className='flex flex-col gap-28 items-center bg-cover bg-center bg-no-repeat h-[1080px] w-full text-white'
				style={{
					backgroundImage: `url(${bgImg})`
				}}
			>
				<Header />

				<div className='flex flex-col items-center text-center space-y-8 '>
					<h1 className='text-4xl sm:text-5xl md:text-7xl font-bold'>
						Make Your Interior More
					</h1>

					<h1 className='text-4xl sm:text-5xl md:text-7xl font-bold'>
						Minimalistic & Modern
					</h1>

					<p className='text-lg sm:text-2xl max-w-[37rem] pt-8'>
						Turn your room with Panto into a lot more minimalist and modern with
						ease and speed
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
						<h3 className='font-bold text-xl mb-4 '>Luxury Facilities</h3>

						<p className='text-gray-700 font-medium max-w-80 '>
							The advantage of hiring a workspace with us is that it gives you
							comfortable service and all-around facilities.
						</p>

						<p className=' flex gap-4 mt-6 text-orange-400 cursor-pointer'>
							More info
							<img src={arrow} alt='arrow' />
						</p>
					</div>


					<div className='flex flex-col items-start'>
						<h3 className='font-bold text-xl mb-4'>Affordable Price</h3>

						<p className='text-gray-600 font-medium max-w-80'>
							You can get a workspace of the highest quality at an affordable
							price and still enjoy the facilities that are only here.
						</p>

						<p className='mt-6 flex gap-4 text-orange-400 cursor-pointer'>
							More info
							<img src={arrow} alt='arrow' />
						</p>
					</div>

					<div className='flex flex-col items-start'>
						<h3 className='font-bold text-xl mb-4'>Many Choices</h3>

						<p className='text-gray-600 font-medium max-w-80'>
							We provide many unique space choices so that you can choose the
							workspace to your liking.
						</p>

						<p className='mt-6 flex gap-4 text-orange-400 cursor-pointer'>
							More info
							<img src={arrow} alt='arrow' />
						</p>
					</div>

				</div>

			</section>

			<div className='flex gap-8 p-12 flex-col bg-slate-100 h-[56rem]'>
				<h1 className='text-center text-3xl font-bold'>Best Selling Products</h1>

				<div className='flex justify-center items-center text-lg '>
					<div className='flex bg-slate-200 py-1.5 px-4 rounded-full cursor-pointer'>
						<p className='hover:bg-white px-4 py-2 rounded-3xl'>Chair</p>
						<p className='hover:bg-white px-4 py-2 rounded-3xl'>Beds</p>
						<p className='hover:bg-white px-4 py-2 rounded-3xl'>Sofa</p>
						<p className='hover:bg-white px-4 py-2 rounded-3xl'>Lamp</p>
					</div>

				</div>
				
				<div className='flex justify-center mt-16 gap-16 bg-blak  h-[30rem] items-center'>
					
					<div className='flex justify-center bg-orange-200 h-[26rem] w-72 rounded-[20px] shadow-lg'>
						{/* <div className='bg-slate-500  flex justify-end w-[40rem] h-[10rem] '>
							<img src={firtsChair} className='bg-black ' alt="" />
						</div> */}
						<div className='flex flex-col mt-56 bg-slate-50 h-48 w-72 rounded-b-[20px]'>

							<div className='p-4'>
								<p className='text-slate-700 py-1'>Chair</p>
								<h1 className='font-bold text-xl'>Sakarias Armchair</h1>
								<img className='mt-1' src={star} alt="star icons" />
							</div>

							<div className='flex justify-between items-center mt-4 mx-4'>
								<p className='font-bold text-xl'> $ 392</p>
								<img src={plus} alt="plus button" />
							</div>
							
						</div>
					</div>

					<div className='bg-red-700 h-[26rem] w-72 rounded-[20px]'>

					</div>

					<div className='bg-red-700 h-[26rem] w-72 rounded-[20px]'>

					</div>

					<div className='bg-red-700 h-[26rem] w-72 rounded-[20px]'>

					</div>
				</div>

				<div className='flex justify-center gap-2'>
					<p className='text-orange-500'>View All</p>
					<img 
						src={arrow} 
						alt="arrow" 	
					/>
				</div>
			</div>

			{/*experiencies*/}

			<div className='flex h-[40rem] items-center justify-between mt-10 '>
					<div className='flex flex-col'>
						<div className='bg-gray-100 h-16 rounded-se-2xl w-[28rem]'/>
						<img className='drop-shadow-2xl' src={sofa} alt="Sofa" />

					</div>
						<div className=' bg-gray-100 relative top-10 right-[5.12rem] h-72 w-16 rounded-r-2xl '/>

				<div className='flex flex-col gap-5 mr-52'>
					<p className='text-orange-500 tracking-widest'>EXPERIENCES</p>
					<h1 className='text-4xl font-bold w-96 leading-tight'>We Provide You The Best Experience</h1>
					<p className='leading-loose text-gray-600 w-[30rem]'>You don’t have to worry about the result because all of these interiors are made by people 
						who are professionals in their fields with an elegant and lucurious style and with premium quality materials
					</p>

					<div className='flex gap-4'>
						<p className='text-orange-500'>More info </p>
						<img src={arrow} alt="arrow" />
					</div>
				</div>
			</div>

			{/*Materials*/}

			<div className='flex h-[60rem] items-center justify-between '>

				<div className='flex flex-col gap-5 ml-20'>
					<p className=' text-orange-500 tracking-widest'>MATERIALS</p>
					<h1 className='text-4xl font-bold w-96 leading-tight'>Very Serious Materials For Making Furniture</h1>
					<p className='leading-loose text-gray-600 w-[32rem] text-lg'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous 
						capital but at a relatively low price
					</p>

					<div className='flex text-orange-500 gap-4'>
						<p>More info</p>
						<img src={arrow} alt="arrow" />
					</div>
				</div>

				<div className='flex '>
					<div className='flex flex-col items-center gap-6'>
						<img src={chairs} alt="" />
						<img src={secondSofa} alt="" />
					</div>

					<div className='flex mt-16 '>
						<div>
							<div className='bg-gray-100 h-16 w-[17.8rem] relative left-[9.99rem] rounded-ss-2xl'/>
							<img src={table} alt="" />
						</div>
					</div>
				</div>
			</div>

			{/*Testimonials*/}
			
		</div>
	)
}

export default LandingPage
