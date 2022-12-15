import React from "react";
import face from '../asserts/face2.jpg'

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className="w-full h-screen flex justify-start items-center ">
          <div className="text-white uppercase pl-10 z-10 md:pl-80">
            <p className="md:text-xl">we love design</p>
            <div className="text-6xl font-bold mt-2 mb-6 md:text-9xl">
              <p>creative</p>
              <p>minds</p>
            </div>
            <button className="border-2 uppercase px-2 py-1 text-sm md:px-3 md:py-2 md:text-xl"> get in touch</button>
          </div>
        </div>

        {/* image section */}
        <div>
            <div className='h-screen absolute top-0 right-0 z-0 md:right-80'>
            <img src={face} alt='faceImage'
            className='w-96 h-full md:w-full'
            />
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
