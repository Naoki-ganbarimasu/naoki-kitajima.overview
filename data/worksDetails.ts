// workDetails.ts

export interface WorkDetail {
  id: number;
  work_id: number; // works テーブルの id に対応
  detail_text: string;
  other_info?: string; // オプションフィールド
}

export const workDetails: WorkDetail[] = [
  {
    id: 1,
    work_id: 1,
    detail_text: "Detailed information about Project Alpha.",
    other_info: "Additional info for Alpha."
  },
  {
    id: 2,
    work_id: 2,
    detail_text: "Detailed information about Project Beta.",
    other_info: "Additional info for Beta."
  }
  // 追加のデータ...
];
