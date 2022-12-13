import React from 'react';
import Crowd_Funding from '../assets/portfolio/Crowd_Funding.jpg';
import Event_Organization from '../assets/portfolio/Event_Organization.jpg';
import lottery from '../assets/portfolio/lottery.jpg';
import Twitter_Project from '../assets/portfolio/Twitter_Project.jpg';


const Portfolio = () => {
    const portfolios=[
       
        {
            id:1,
            src:lottery,
            href:"https://github.com/Raj-Nakrani/Lottery-Project.git"
            
        },
        {
            id:2,
            src:Event_Organization,
            href:"https://github.com/Raj-Nakrani/Event-Organization-Solidity.git"
        },
        {
            id:3,
            src:Crowd_Funding,
            href:"https://github.com/Raj-Nakrani/Crowd-Funding-Project.git"
        },
        {
            id:4,
            src:Twitter_Project,
            href:"https://github.com/Raj-Nakrani/Twitter-Project.git"
        },
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full h-transparent justify-center text-white ">
        <div className="max-w-screen-lg p-4 mx-auto pt-6 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-4">Check Out Some Of My Work Right Here</p>
            </div>
            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
             {
                portfolios.map(({ id,src,href}) => {
                    return <>
                    
                     <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                         <img src={src} alt=""
                           className="rounded-md duration-200 hover:scale-105" />
                          <div className="flex items-center justify-center">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={href}>Code</a></button>
                          </div>
                    </div>
                
                 </>
                })
             }
             </div>

            
    </div>
 </div>
  )
}

export default Portfolio