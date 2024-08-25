import { MicroCMSDate, MicroCMSImage } from "microcms-ts-sdk";

export type Work = MicroCMSDate & {
    
  id: string
  thumbnail: MicroCMSImage
  title: string
  descarticle: string
  technology: string
}