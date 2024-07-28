'use client'

import Three from "./components/Three";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

export default function Home() {
  return (
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
  </main>
  );
}
