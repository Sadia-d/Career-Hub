import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApplication } from "../Utilities/localStorage";
import ApplyJob from "../ApplyJob/ApplyJob";
import bg2 from "../../assets/images/bg2.png"


const AppliedJob = () => {

    const jobs = useLoaderData();
    const [appliedJobs , setAppliedJobs] = useState([]);
    const [displayJobs , setDiplayJobs] = useState([]);
    useEffect( ()=>{
        const storejobsId = getStoreApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => storejobsId.includes(
                job.id));
               setAppliedJobs(jobApplied);
               setDiplayJobs(jobApplied);
               
        }
    }, [jobs]);


    const handleFilter = filter =>{
        if(filter === 'all'){
            setDiplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remooteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDiplayJobs(remooteJobs)
        }
        else if(filter === 'onsite'){ 
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDiplayJobs(onsiteJobs)
        }
    }

    return (
        <div>
            <div
        className="hero bg-no-repeat bg-cover bg-center min-h-[300px] w-full mx-auto "
          style={{
     backgroundImage: `url(${bg2})`,
           }}>
            <div className=" text-center"> 
              <h1 className="mb-5 text-3xl font-bold">Applied Jobs</h1>    
            </div>
          </div>

     <div className=" flex dropdown dropdown-bottom mt-20 justify-end">
            <div tabIndex={0} role="button" className="btn m-1">Filter by</div>
             <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
               <li onClick={() => handleFilter('all')} ><a>All</a></li>
               <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
               <li onClick={() => handleFilter('onsite')} ><a>Onsite</a></li>
            </ul>
       </div>
           
           <div className="mt-8">
            {
                displayJobs.map( applyJob => <ApplyJob key={applyJob.id} 
                    applyJob={applyJob}
                ></ApplyJob>)
            }
           </div>
           
        </div>
    );
};

export default AppliedJob;