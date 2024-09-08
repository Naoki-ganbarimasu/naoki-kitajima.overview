"use strict";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkCardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  technology: string;
};

const Card: React.FC<WorkCardProps> = ({
  id,
  title,
  image,
  description,
  technology
}) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-95">
      <Link href={`/work/${id}`}>
        <figure>
          <Image
            className="hover:scale-x-95"
            src={`/${image}.png`}
            alt="work-image"
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <article>{description}</article>
          <p className="font-bold">仕様技術</p>
          <p>{technology}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">詳しく見る</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
