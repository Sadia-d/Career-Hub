import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs , setJobs ] = useState([]);
    const [dataLength , setDataLength] = useState(4);
  

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className="mt-16">
            <div className="text-center">
             <h2 className="text-4xl font-extrabold">Featured Jobs</h2>
             <p className="text-[16px] text-gray-500 mt-3">Explore thousands of job opportunities with all the information you need. Its your future </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0 ,dataLength).map(job => <Job
                        key={job.id}
                         job={job} 
                         ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center'}>
                <button onClick={() => setDataLength(jobs.length)}  className="btn bg-purple-400 text-white mt-6 text-center" >See all jobs</button>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;