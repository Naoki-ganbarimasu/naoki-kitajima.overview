"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [bgColor, setBgColor] = useState('bg-transparent');

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setBgColor('bg-white shadow-md');  // スクロールしたら背景色を白にし、影を追加
    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full ${bgColor} z-10 transition-colors duration-300`}>
      <div className='flex justify-between items-center mx-5 py-4'>
        <Link href='/' className='text-lg font-bold'>Top</Link>
        <nav className='flex space-x-4'>
          <Link href='/profiles' className='text-lg'>Profiles</Link>
          <Link href='/skills' className='text-lg'>Skills</Link>
          <Link href='/works' className='text-lg'>Works</Link>
          <Link href='/about' className='text-lg'>About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
