"use strict";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import { works } from "@/data/works";

const Works = () => {
  return (
    <main>
      <Title title="Works" />
      <div className="hover:bg-gray-200 transition-transform transform hover:scale-95">
        <ul>
          {works.map((work) => {
            return (
              <li key={work.id}>
                <Link href={`work/${work.id}`}>{work.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Works;
