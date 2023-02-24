import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Django" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "PHP" },
  { skill: "Next.js" },
  { skill: "Tailwind" },
  { skill: "MySql" },
  { skill: "Express.js" },
  { skill: "Docker" },
  { skill: "Golang" },
  { skill: "MongoDB" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jaziel and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Engineer in Computer Systems.  
            </p>
            <br />
            <p>
					Hey, I&#39;m a 
					<span className="font-bold"> backend developer{" "}</span> 
					with 3 years of experience 
					building server-side applications that are efficient and secure. 
					I&#39;m all about writing clean, maintainable code that performs 
					at its best.

				</p>
				<br/>
				<p>
					<span className="font-bold">I work hard{" "}</span> 
					to make sure my backend systems integrate 
					smoothly with the frontend, and that everything runs smoothly in 
					production. If you&#39;re looking for a reliable backend developer 
					who can get the job done, look no further!
				  </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            	
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
								<iframe
  		  						width="560" 
								height="315" 
								src="https://www.youtube.com/embed/r058nmiB2DM" 
								title="YouTube video player"  
								className="embed-responsive-item mt-3 h-64 w-full"
								></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
