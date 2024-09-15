"use client";

import { workDetails } from "@/data/worksDetails";
import { useRouter } from "next/router";

type WorkPageProps = {
  params: {
    id: string;
  };
};

export default function WorkPage({ params }: WorkPageProps) {
  const router = useRouter();

  // IDに基づいてデータを取得
  // const works = workDetails.filter(
  //   (workDetail) => workDetail.id === params.id
  // );
  // console.log("params.id:", params.id);
  // console.log("workDetails:", works);


  // selectedWorksが空かどうかを確認
  // if (works.length === 0) {
  //   return <div className="mt-10 text-center text-red-500">Work not found</div>;
  // }

  return (
    <div className="mt-12 p-4">
      {/* {works.map((work) => ( */}
      <div>
        <h1 className="text-2xl font-bold mb-4">{router.query.id}</h1>
        <p>{router.query.title}</p>
      </div>
      {/* ))} */}
    </div>
  );
}
