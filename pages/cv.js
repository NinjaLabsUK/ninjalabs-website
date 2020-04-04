import matter from "gray-matter";

import CV from "./CV/CV";

export async function getStaticProps() {
  const booking = await import("./CV/posts/booking.md");
  const rsh = await import("./CV/posts/robertstreethub.md");
  const adxba = await import("./CV/posts/adxba.md");

  const jobs = [booking, rsh, adxba];
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
