import React from 'react'

const AboutSection = () => {
  return (
  		<section id='about'>
			<div className='h-screen '>
				<h1 className='text-center font-bold text-7xl'>Eres Nuevo</h1>
				<h1 className='text-center font-bold text-3xl'>Este video es para ti</h1>
				<div>
						<div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-10 md:py-10 md:flex-row md:space-x-4 md:text-left'>
								
								<div className="flex w-full h-screen flex-col space-y-10  justify-center align-top md:mt-2  md:flex-row">
								<iframe className='w-full ' 
								src="https://www.youtube.com/embed/Su_7ddIeW34" 
								title="YouTube video player" />
								</div>
						</div>
						<div></div>
				</div>
			</div>
		</section>
  )
}
export default AboutSection
