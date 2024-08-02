import Link from 'next/link'
import React from 'react'

const Active = () => {
  return (
    <main>
        <h1 className='text-center'>Active</h1>
        <div>
        <h2>Hackathon</h2>
    <div className='border-2 border-green-500 shadow-md rounded-lg hover:bg-gray-200'>
            <h3 className='text-2xl bg-green-500 text-white'>レコチョクハッカソン</h3>
            {/* <Image src='/rekotyoku.jpeg' alt='rekotyoku' width={200} height={200} /> */}
            <article>
              レコチョクハッカソン
              <br/>
              開催日時：2024年7月6日(土) 〜 8月7日(日)
              <br/>

            </article>
       </div>
       <div className='border-2 border-green-500 shadow-md rounded-lg hover:bg-gray-200'>
            <h3 className='text-2xl bg-green-500 text-white'>サポータズハッカソン</h3>
       </div>
       </div>
    </main>
  )
}

export default Active
