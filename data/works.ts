// works.ts

export interface Work {
  id: string;
  image: string;
  title: string;
  description: string;
  technology: string;
  englishTranslation?: string;
  appUrl?: string;
  githubUrl?: string;
}

export const works: Work[] = [
  {
    id: "1",
    image: "sns-app",
    title: "SNS App",
    description:
            "よくあるSNSアプリです。アプリケーションの全体の知識をつけるために作成しました。実際に友人に使ってもらいフィードバックをもとに、UIの改善や機能の追加なども行いました。",
    technology: "Next.js, React, TypeScript, Prisma, PostgreSQL, Vercel",
    englishTranslation: "This is a typical SNS app. I created it to gain a comprehensive knowledge of the application. I actually had my friends use it and made improvements to the UI and added features based on their feedback.",
    appUrl: "https://sns-app.vercel.app/",
    githubUrl: ""
  },
  {
    id: "2",
    image: "naotech",
    title: "Naotech Academy",
    description:
      "Naotech Academyは、オンライン学習プラットフォームです。学習者は、サブスクリプション決済後に学習を進めることができます。",
    technology:
      "Next.js, React, TypeScript, Supabase, Stripe, PostgreSQL, Vercel",
    englishTranslation: "Naotech Academy is an online learning platform. Learners can proceed with their studies after making a subscription payment.",
    appUrl: "https://naotech-academy.vercel.app/",
    githubUrl: ""
  }
];
