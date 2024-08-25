'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Rekotyoku = () => {
  return (
    <main className='mt-32 mx-10'>
      <h1 className='text-center text-3xl font-bold border-b-4 border-green-500 mb-5'>レコチョク　ハッカソン</h1>
      <div  className='flex flex-wrap'>
        <div>
    <div className='mb-5'>
      <h2 className='text-2xl font-bold underline decoration-green-500'>目次</h2>
      <ul>
        <li className='font-bold'>1.ハッカソンの概要</li>
        <li className='font-bold'>2.制作物・使用技術</li>
      </ul>
    </div>
    <div className='mb-5'>
      <h2 className='text-2xl font-bold underline decoration-green-500'>1.ハッカソンの概要</h2>
      <article>
        参加したハッカソンはインターン型ハッカソンでは「音楽×○○」というテーマで行われました。
        <br/>
        開催日時：2024年7月6日(土) 〜 8月7日(日)
        </article>
    </div>
    <div className='mb-3'>
      <h2 className='text-2xl font-bold underline decoration-green-500'>2.制作物・使用技術</h2>
      <p className='mt-2 font-bold text-xl'>〜制作物〜</p>
        <p className='mt-2 font-bold'>制作物：<Link className='underline break-normal hover:text-blue-300 text-blue-500' href='https://hear-spot.vercel.app'>音楽×散歩でピンポイントな位置情報による選曲アプリ『Hear Spot』</Link></p>
        
        <p className='mt-2 font-bold'>エレベーターピッチ</p>
      <article>
地域の過疎化を解消するための旅行者向けの
<br/>
『Hear Spot』というプロダクトは
<br/>
ピンポイントな位置情報による選曲アプリです。
<br/>
楽曲が生まれたきっかけの場所で、その音楽を提供することで、観光地の魅力を再発見することができます。
<br/>
Apple MusicやSpotifyとは違って
<br/>
場所ごとに異なる音楽を拾い集め,再生する機能が備わっています。

      </article>
      </div>
        </div>
      <div className='mx-auto'>
        <Image className='m-3' src='/rekotyoku.jpeg' alt='rekotyoku' width={200} height={200} />
      </div>
        </div>
      <div>
        <h2 className='text-xl font-bold mb-3'>〜使用技術〜</h2>
        <div className='flex flex-wrap mb-3'>
          <div className='flex'>
          <h3 className='text-lg font-bold'>
            フロントエンド
            <br/>
            Typescript
            <br/>
            React/Next.js
            </h3>
            <Image className='mx-auto' src='/typescript.svg' alt='typescript' width={100} height={100} />
            <Image className='mx-auto' src='/react.svg' alt='react' width={100} height={100} />
            <Image className='mx-auto' src='/nextjs.svg' alt='next.js' width={100} height={100} />
            <Image className='mx-auto' src='/tailwindcss.svg' alt='vercel' width={100} height={100} />
          </div>
        </div>
        <div className='flex flex-wrap mb-3'>
          <div className='flex'>
          <h3 className='text-lg font-bold'>
            バックエンド
            <br/>
            microCMS
            </h3>
           <Image className='mx-auto' src='/microcms.svg' alt='microcms' width={90} height={90} />
        </div>
        <h3 className='text-xl fornt-bold'>技術選定</h3>
        <article>
          フロントエンドはReact/Next.jsを使用し、バックエンドはmicroCMSを使用しました。
        </article>
          </div>
      </div>
    </main>
  )
}

export default Rekotyoku
