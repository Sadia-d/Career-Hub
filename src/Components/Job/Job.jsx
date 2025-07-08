import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router";

const Job = ({job}) => {   
    const {id,logo ,job_title, company_name,location,job_type,salary, remote_or_onsite} = job;


    return (
     
        <div className="card bg-base-100 mt-7 border ">
  <figure>
    <img className="mt-3"
      src={logo}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
    <p className="text-gray-500 font-semibold text-[18px">{company_name}</p>
    <div className="flex gap-3 mt-2">
        <button className="px-5 border border-purple-400 text-purple-400 
        py-1" >{remote_or_onsite}</button>
        <button className="px-6 border border-purple-400 text-purple-400 
        py-1"  >{job_type}</button>
    </div>
    <div className="flex gap-6 text-gray-500 text-[16px] mt-2 mb-2 font-semibold ">
        <div className="flex">
            <p className="text-2xl"><CiLocationOn /></p>
             <p>{location}</p>
        </div> 
        <div className="flex gap-1" >
        <p className="text-2xl"> <CiDollar /></p>
          <p>Salary : {salary}</p>
            </div>    
    
    </div>
    <div className="card-actions">
      <Link  to={`/job/${id}`}><button className="btn bg-purple-400 text-white
      mb-3">view details</button></Link>
    </div>
  </div>
        </div>
           
    
   
    );
};

export default Job;