import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1 className='text-3xl justify-center text-center mt-7 mb-3'>Profile</h1>
        <div className='flex justify-center items-center flex-col sm:flex-row'>
        <Image  className="rounded-full mx-5" src="/profile.png" alt="profile" width={200} height={200} />
        <article className='mt-8 mx-5'>
            初めまして、北島直樹と申します。私の強みは行動力と目標達成の執着である。
            私は今までの大学生活で社会にでて何をしたいのかについて誰よりも考えてきた。
            データサイエンスやバックエンド/フロントエンジニアなど様々な分野に自ら挑戦し、その中でもフロントエンジニアに興味を持った。
            それからはアプリを作成したいと目標を立て、最先端で実際の業務に使われているTypescriptやフレームワークであるReact,Next.jsを自学し、アプリを個人開発した。この夢や目標達成に対する強いハングリー精神は私の最大の武器である。

        </article>
        </div>

      
    </div>
  )
}

export default Profile