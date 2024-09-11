// workDetails.ts

export interface WorkDetail {
  id: string;
  work_id: string;
  title: string;
  detail_text: string;
  other_info?: string;
}

export const workDetails: WorkDetail[] = [
  {
    id: "1",
    work_id: "1",
    title: "SNS App",
    detail_text: "Detailed information about Project Alpha.",
    other_info: "Additional info for Alpha."
  },
  {
    id: "2",
    work_id: "2",
    title: "Naotech Academy",
    detail_text: "Detailed information about Project Beta.",
    other_info: "Additional info for Beta."
  }
  // 追加のデータ...
];
