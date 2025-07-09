
const ApplyJob = ({applyJob}) => {
    
    const {img,job_title, company_name,location,job_type,salary, remote_or_onsite} = applyJob;
    return (
      <div>

        <div className="card card-side bg-base-100 border p-5 mb-4 mt-4">
     <figure>
    <img className="h-40 w-40 p-2 border rounded-sm "
      src={img}
      alt="Movie" />
  </figure>
  <div className="card-body ml-11">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
     <div className="flex gap-3 mt-2">
        <button className="px-5 border border-purple-400 text-purple-400 
        py-1" >{remote_or_onsite}</button>
        <button className="px-6 border border-purple-400 text-purple-400 
        py-1"  >{job_type}</button>
    </div>
      <div className="flex gap-6 text-gray-500 text-[16px] mt-2 mb-2 font-semibold ">
            <div className="flex">
                <p className="text-2xl"></p>
                 <p>{location}</p>
            </div> 
            <div className="flex gap-1" >
            <p className="text-2xl"> </p>
              <p>Salary : {salary}</p>
                </div>    
        
        </div>
    <div className="card-actions justify-end">
      <button className="btn bg-purple-400 text-white
      ">View Details</button>
    </div>
  </div>
        </div>
      </div>

    );
};

export default ApplyJob;