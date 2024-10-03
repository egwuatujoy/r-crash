import { useLoaderData, useParams } from "react-router-dom";

const JobbPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return <h1>{job.title}</h1>;
};

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobbPage as default, JobLoader };
