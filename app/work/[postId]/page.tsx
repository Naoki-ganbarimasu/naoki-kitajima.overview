"use client";

import { works } from "@/data/works";
import { workDetails } from "@/data/worksDetails";

type WorkPageProps = {
  params: {
    id: string;
  };
};

export default function WorkPage({ params }: WorkPageProps) {
  const { id } = params;

  // IDに基づいてデータを取得
  const selectedWorks = works.filter((work) => work.id === Number(id));
  const details = workDetails.filter((detail) => detail.work_id === Number(id));

  // if (selectedWorks) {
  //   return <div className="mt-10 text-center text-red-500">Work not found</div>;
  // }

  return (
    <div className="mt-72 p-4">
      {selectedWorks.map((work) => (
        <div key={work.id}>
          <h1 className="text-2xl font-bold mb-4">{work.title}</h1>
          <p className="mb-6">{work.description}</p>
        </div>
      ))}
      <h2 className="text-xl font-semibold mb-2">Details:</h2>
      <div className="space-y-2">
        {details.map((detail) => (
          <p key={detail.id} className="text-gray-700">
            {detail.detail_text}
          </p>
        ))}
      </div>
    </div>
  );
}
