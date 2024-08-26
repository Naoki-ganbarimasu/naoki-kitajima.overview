import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate
} from "microcms-js-sdk";
import { client } from "./microcmsClient";


export type Blog = {
 id: string;
 title: string;
 content: string;
 eyecatch?: MicroCMSImage;
} & MicroCMSDate;


// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
 const listData = await client.getList<Blog>({
  endpoint: "blogs",
  queries,
 });

 // データの取得が目視しやすいよう明示的に遅延効果を追加
 await new Promise((resolve) => setTimeout(resolve, 3000));

 return listData;
};

// ブログの詳細を取得
export const getDetail = async (
 contentId: string,
 queries?: MicroCMSQueries
) => {
 const detailData = await client.getListDetail<Blog>({
  endpoint: "blogs",
  contentId,
  queries,
 });

 // データの取得が目視しやすいよう明示的に遅延効果を追加
 await new Promise((resolve) => setTimeout(resolve, 3000));

 return detailData;
};