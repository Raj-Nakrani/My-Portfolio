import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-3xl mt-12">
          Hello,Sir I Am Raj Nakrani 
          Student of B.voc(IT) in Silver Oak University at Ahemdabad.
          
        </p>
        <p className="text-2xl mt-3 ">
           i am passionate BLOCKCHAIN DEVELOPER enthusiastic about blockchain 
           and web3 industry,looking forward to learn something new every day 
           and contribute to the industry!
           Currently I Finding a Job or Some Project with regarding to BlockChain Technology.
           and I am also a Certified Full-Stack Blockchain Developer.     
        </p>
      </div>
    </div>
  );
};

export default About;
