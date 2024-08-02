'use client'

import Three from "./components/Three";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Active from "./components/Active";
import { useEffect, useState } from "react";
import SetThree from "./components/SetThree";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true)
  // useEffect(() => {
  //   setIsLoading(true);
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2 * 1000);

  //   return () => clearTimeout(timer);
  // }, [])
  return (
    // <div>
    // {isLoading ? (
    //    <div className="flex h-screen items-center justify-center bg-gray-100 animate-fadeIn">
    //    <SetThree/>
    //  </div>
    // ) : (
    <main className="flex flex-col w-full h-screen">
    <div className="flex-grow">
      <Three />
    </div>
    <div className="flex-grow">
      <Profile />
    </div>
    <div>
      <Skills />
    </div>
    <div>
      <Works/>
    </div>
    <div>
      <Active/>
    </div>
  </main>
    // )}
    // </div>
  );
}
