import React, { useEffect, useRef } from 'react';
import { Button } from "flowbite-react";
import Typed from 'typed.js';

export function MainCard() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Web Development', 'AWS', 'Cloud Computing', 'Python', 'CI/CD', 'DevOps', 'Machine Learning', 'Data Science', 'Cyber Security', 'Blockchain', 'IoT', 'Big Data', 'Artificial Intelligence', 'GitLab', 'Jenkins', 'Docker'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    // Destroy Typed instance during cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="absolute l:top-20 m:top-20 md:top-20 2xl:top-20 top-5 flex flex-col">
      <h5 className="l:mx-7 m:mx-7 md:mx-7 2xl:mx-7 mx-2 l:ml-10 m:ml-10 md:ml-10 2xl:ml-10 text-[2rem] l:text-6xl m:text-6xl md:text-6xl 2xl:text-6xl font-semibold font-San tracking-tight text-gray-900 dark:text-white lg:text-5xl">
        Welcome To <span className="text-red-600">S3</span>CloudHub
      </h5>
      <div className="my-1 l:my-4 m:my-4 md:my-4 2xl:my-4 text-2xl font-semibold font-San tracking-tight dark:text-white">
        <h5 className="text-2xl l:text-4xl m:text-4xl md:text-4xl 2xl:text-4xl m:mx-7 md:mx-7 2xl:mx-7 mx-2 l:ml-10 m:ml-10 md:ml-10 2xl:ml-10">Learn <span className="text-purple-900" ref={typedEl}></span></h5>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-1xl l:text-2xl m:text-2xl md:text-2xl 2xl:text-2xl m:mx-7 md:mx-7 2xl:mx-7 mx-2 l:ml-10 m:ml-10 md:ml-10 2xl:ml-10">
        Confused about your next learning step? We've got it all sorted for you. Explore our free courses and find the best fit for your needs. S3CloudHub strives to deliver core concepts and expert-level coding skills in an accelerated timeframe.
      </p>
      <Button className="relative mt-4 mx-2 l:ml-10 m:ml-10 md:ml-10 2xl:ml-10 l:w-52 m:w-52 md:w-52 2xl:w-52 w-[95%] bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-1 active:shadow-none transition-transform transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <span className="text-2xl mb-2">Courses</span>
      </Button>
    </div>
  );
}

export default MainCard;
