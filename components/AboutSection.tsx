import React from 'react'

const AboutSection = () => {
  return (
  		<section id='about'>
			<div>
				<h1 className='text-center font-bold text-7xl'>Eres Nuevo</h1>
				<h1 className='text-center font-bold text-3xl'>Este video es para ti</h1>
				<div>
						<div>
								
								<div className="flex w-full flex-col space-y-10  justify-center align-top md:flex-row">
								<iframe className='w-full h-64'  src="https://www.youtube.com/embed/Su_7ddIeW34" title="YouTube video player" />
								</div>
						</div>
						<div></div>
				</div>
			</div>
		</section>
  )
}
export default AboutSection
