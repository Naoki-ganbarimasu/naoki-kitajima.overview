import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Works = () => {
  return (
    <main className='mx-8'>
        <h1 className='text-3xl text-center'>Works</h1>
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
            </div>
            </div>
            </div>
        </Link>
    </main>
  )
}

export default Works
