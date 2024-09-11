"use client";

import { workDetails } from "@/data/worksDetails";

type WorkPageProps = {
  params: {
    id: string;
  };
};

export default function WorkPage({ params }: WorkPageProps) {

  // IDに基づいてデータを取得
  const works = workDetails.filter(
    (workDetail) => workDetail.id === params.id
  );
  console.log("params.id:", params.id);
  console.log("workDetails:", works);


  // selectedWorksが空かどうかを確認
  if (works.length === 0) {
    return <div className="mt-10 text-center text-red-500">Work not found</div>;
  }

  return (
    <div className="mt-10 p-4">
      {works.map((work) => (
        <div key={work.id}>
          <h1 className="text-2xl font-bold mb-4">{work.title}</h1>
          <p className="mb-6">{work.detail_text}</p>
        </div>
      ))}
      </div>
  );
}
