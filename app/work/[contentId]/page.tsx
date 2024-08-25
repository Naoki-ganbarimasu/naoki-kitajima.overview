import { client } from "@/libs/microcmsClient";
import { MicroCMSObjectContent } from "microcms-js-sdk";

interface WorkData extends MicroCMSObjectContent {
  title: string;
  description: string;
  // Add other fields as per your microCMS content structure
}

interface WorkPageProps {
  params: {
    contentId: string;
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { contentId } = params;

  // Fetch data from microCMS
  const data: WorkData = await client.get({
    endpoint: "work",
    contentId: contentId // 'osmfqu58y' can be hardcoded or dynamically passed
  });

  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Render other data */}
    </div>
  );
}
