import { MicroCMSDate, MicroCMSImage } from "microcms-ts-sdk";
import { client } from "./microcmsClient";

export const getContext = async (context) => {
    const id = context.params.id;
    const data = await client, get{(endpoint: "work", contextId: id)}
    
return {
    props: {
            work: data
        }
    }
}

export type Work = MicroCMSDate & {
  id: string
  thumbnail: MicroCMSImage
  title: string
  descarticle: string
  technology: string
}