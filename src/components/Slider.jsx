
import { Carousel } from "flowbite-react";
import React from "react";
import backgroundImage from '../../src/assets/images/background.png';
import MainCard from "./Main-card";

const Slider = () => {
  return (
    <div className="h-[50vh] sm:h-[80vh] xl:h-[80vh] 2xl:h-[80vh]">
      <Carousel>
      <div
      className="flex h-full items-center bg-cover bg-center bg-no-repeat dark:bg-gray-700 dark:text-white bg-slate-400">
        <div className="relative lg:w-1/2 h-full bg-white">
          <MainCard />
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
  )
}

export default Slider
