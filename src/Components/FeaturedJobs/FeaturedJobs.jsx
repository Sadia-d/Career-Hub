import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="mt-16 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Featured Jobs
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Explore thousands of job opportunities with all the information you
          need. It’s your future!
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      {/* See All Button */}
      {dataLength < jobs.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="bg-purple-400 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded transition"
          >
            See All Jobs
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedJobs;
