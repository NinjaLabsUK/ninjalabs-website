import matter from "gray-matter";

import CV from "./CV/CV";

const JOBS = ["booking", "robertstreethub", "adxba"];

export async function getStaticProps() {
  const jobImports = JOBS.map(async job => {
    return await import(`./CV/posts/${job}.md`);
  });

  const jobs = await Promise.all(jobImports);

  const formattedJobs = jobs.map(content => {
    const data = matter(content.default);
    return {
      data: data.data,
      body: data.content
    };
  });

  return {
    props: {
      jobs: formattedJobs
    }
  };
}

export default CV;
