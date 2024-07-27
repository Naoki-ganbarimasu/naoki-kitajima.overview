'use client'

import Image from "next/image";
import Three from "./components/Three";

export default function Home() {
  return (
   <div>
    <div className="w-full">
    <Three/>
    </div>
    <div>
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={72}
      height={16}
    />
    </div>
   </div>
  );
}
