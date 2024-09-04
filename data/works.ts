// works.ts

export interface Work {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "An overview of Project Alpha.",
    date: "2024-01-01"
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An overview of Project Beta.",
    date: "2024-02-01"
  }
  // 追加のデータ...
];
