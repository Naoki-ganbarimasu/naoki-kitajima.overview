"use strict";

import Link from "next/link";
import { works } from "@/data/works";

export default function WorkListPage() {
  return (
    <div>
      <h1>Works</h1>
      <ul>
        {works.map((work) => (
          <li key={work.id}>
            <Link href={`/work/${work.id}/page`}>{work.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
