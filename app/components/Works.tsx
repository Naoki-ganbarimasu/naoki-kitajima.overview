"use strict";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import { works } from "@/data/works";
import Card from "./Card";

const Works = () => {
  return (
    <div>
      <Title title="Works" />
      <div className="flex gap-8 mx-auto">
          {works.map((work) => {
            return (
              <Card id={work.id} image={work.image} title={work.title} description={work.description} technology={work.technology} />
            );
          })}
      </div>
    </div>
  );
};

export default Works;
