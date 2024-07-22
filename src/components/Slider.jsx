
import { Carousel } from "flowbite-react";
import React from "react";
import backgroundImage from '../../src/assets/images/background.png';
import MainCard from "./Main-card";
import img1 from '../../src/assets/images/s3_img_1.jpg';

const Slider = () => {
  return (
       <>
    <div className="hidden lg:flex lg:h-[53vh] m:h-[80vh] xl:flex 2xl:flex xl:h-[80vh] 2xl:h-[70vh]">
      <Carousel>
      <div
      className="flex h-full items-center bg-cover bg-center bg-no-repeat dark:bg-gray-700 dark:text-white ">
        <div className="relative m:w-[100vh] lg:w-2/3 h-full bg-white">
          <MainCard />
        </div>
        <div className="m:hidden xl:flex 2xl:flex lg:flex lg:w-1/3">
          <img
            className="object-cover w-full h-full"
            src={img1}
            alt="background"
          />
        </div>
    </div>
    <div
      className="flex h-full items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-gray-700 dark:text-white"
      style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover' }}
    >
    </div>
    <div
      className="flex h-full items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-gray-700 dark:text-white"
      style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover' }}
    >
    </div>
      </Carousel>
    </div>
    <div
    className="l:hidden lg:hidden 2xl:hidden flex  h-full items-center bg-cover bg-center bg-no-repeat dark:bg-gray-700 dark:text-white ">
      <div className="relative w-[100vh] h-full bg-white">
        <MainCard />
      </div>
      </div>
      </>
  )
}

export default Slider;
