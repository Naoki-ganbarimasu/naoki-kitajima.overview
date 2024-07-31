import Link from 'next/link'
import React from 'react'

const Active = () => {
  return (
    <main>
        <h1 className='text-center'>Active</h1>
        <div>
        <h2>Hackathon</h2>
        <Link href="/hackthon/rekotyoku">レコチョクハッカソン</Link>
    <div className='border-2 border-green-500 shadow-md rounded-lg hover:bg-gray-200'>
            <h3 className='text-2xl bg-green-500 text-white'>レコチョクハッカソン</h3>
       </div>
       <div className='border-2 border-green-500 shadow-md rounded-lg hover:bg-gray-200'>
            <h3 className='text-2xl bg-green-500 text-white'>サポータズハッカソン</h3>
       </div>
       </div>
    </main>
  )
}

export default Active
