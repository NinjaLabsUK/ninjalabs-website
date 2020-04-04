import matter from "gray-matter";

import CV from "./CV/CV";

export async function getStaticProps() {
  const files = ["booking", "robertstreethub", "adxba"];
  const jobImports = files.map(job => import(`./CV/posts/${job}.md`));
  console.log(jobImports);
  const jobs = await Promise.all(jobImports);
  console.log(jobs);
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
