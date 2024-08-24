import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

const Works = () => {
  return (
    <main>
      <Title title='Works' />
        <div className='hover:bg-gray-200 transition-transform transform hover:scale-95'>
        <Link className='hover:bg-gray-200' href='https://naotech-academy.vercel.app/'>
            <div className='border-2 border-green-500 shadow-md rounded-lg hover:bg-gray-200'>
            <h2 className='text-2xl bg-green-500 text-white'>Naotech Academy</h2>
        <div className='border-2 border-green-500 shadow-md rounded-lg hover:bg-gray-200  flex flex-wrap'>
            <div className='justify-center text-center items-center'>
            <Image className='mr-3' src='/naotech.png' alt='naotech' width={500} height={500} />
            </div>
            <div className='items-center'>
            <h1 className='text-2xl'>内容</h1>
            <article className='max-w-xl'>サブスクリプション決済で配信動画を見ることができるアプリケーション。フロントエンドはtypescriptでnext.jsを使用。
                バックエンドはsupabaseを使用し、認証やデータベースを使用。デプロイはvercelを使用。サブスクリプション決済はstripeを使用。
            </article>
            <h1 className='text-2xl mt-5'>技術選定</h1>
            <article className='max-w-xl'>
            ページが多いことからSEO対策を考慮し、next.jsを使用。データベースはsupabaseを使用し、データベースの設計や認証を行った。
            </article>
            <h1 className='text-center text-xl mt-5'></h1>
            </div>
            </div>
            </div>
        </Link>
        </div>
    </main>
  )
}

export default Works
