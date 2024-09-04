"use strict";

import { useRouter } from "next/router";
import { works } from "@/data/works";
import { workDetails } from "@/data/worksDetails";

export default function WorkPage() {
  const router = useRouter();
  const { id } = router.query;

  const work = works.find((work) => work.id === Number(id));
  const details = workDetails.filter((detail) => detail.work_id === Number(id));

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
      <h2>Details:</h2>
      {details.map((detail) => (
        <p key={detail.id}>{detail.detail_text}</p>
      ))}
    </div>
  );
}
