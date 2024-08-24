import Image from 'next/image'
import React from 'react'

type CardProps = {
    title: string;
    article: string;
};
    
const Card: React.FC<CardProps> = ({ title, article }) => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        className="hover:scale-x-95"
        src="/rekotyoku.jpeg"
        alt="rekotyoku"
        width={200}
        height={200}
      />
          <h2>{title}</h2>
          <article>{article}</article>
    </div>
  );
};

export default Card
