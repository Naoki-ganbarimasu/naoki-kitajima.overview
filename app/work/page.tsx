import { client } from "@/libs/microcmsClient";
import { Work } from "@/libs/microcmsResources";

// データを取得する関数
export const getWorks = async () => {
  const data = await client.get({ endpoint: "work" });
   console.log(data);
  return {
    props: {
      work: data.contents 
    }
  } 
}
export type WorksProps = {
  works: Work[]
}

export default function Home({ works }: WorksProps) {
  console.log(works)
  return (
    <div>
      {works.map((work: Work) => (
        <div key={work.id}>
          <h1>{work.title}</h1>
          <p>{work.descarticle}</p>
        </div>
      ))}
    </div>
  )
  }

