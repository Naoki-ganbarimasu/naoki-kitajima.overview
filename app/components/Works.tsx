import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import { getList } from '@/libs/microcmsResources'

const Works = async () => {
  const { contents } = await getList();
  return (
    <main>
      <Title title="Works" />
      <div className="hover:bg-gray-200 transition-transform transform hover:scale-95">
        <ul>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`work/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Works
