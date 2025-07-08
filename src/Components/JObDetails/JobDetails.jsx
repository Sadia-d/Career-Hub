import { useLoaderData, useParams } from "react-router";
import { CiDollar } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
   
    const {job_description,job_responsibility,educational_requirements,experiences,contact_information,salary,job_title,phone,email,address} = job;
    return (
        <div>
            <div>
             <h2>Job Details</h2>
            </div>
           

            <div className="grid md:grid-cols-3 gap-4">
                <div className="grid md:col-span-2  mt-4">

                    <p className="text-[16px]  text-gray-500 font-semibold" ><span className="text-black">Job description:</span> {job_description}</p>

                    <p className="text-[16px] mt-4 mb-4 text-gray-500 font-semibold" ><span className="text-black">Job Responsibility:</span>
                    {job_responsibility}</p>

               <div className=" font-semibold text-[16px]">
                <p className="text-black">Educational Requirements:</p>
                 <p className="mt-4 text-[16px] text-gray-500 font-semibold" > {educational_requirements}</p>
               </div>
                    <div className=" font-semibold text-[16px]">
                    <p className="text-black mt-4">Experiences:</p>
                   <h2 className=" mt-4 text-gray-500"> {experiences}</h2>
                 </div>
                    


                </div>
                <div className="col-span-1 border bg-purple-50 p-6 rounded-lg">
                    <h2 className="text-xl font-extrabold">Job details</h2>
                    <p className="border-b-2 border-purple-200 mt-4"></p>
                    <div className="flex gap-1 font-semibold text-gray-700 mt-3" >
                            <p className="text-2xl text-purple-500"> <CiDollar /></p>
                              <p className="text-xl"> Salary: 
                          <span className="text-gray-400">{salary}</span></p>
                   </div>  
                    <div className="flex gap-1 mt-3 font-semibold text-gray-700" >
                            <p className="text-2xl text-purple-400"><MdCalendarMonth /></p>
                              <p className="text-xl">Job title : 
                   <span className="text-gray-400"> {job_title}</span> </p>
                   </div>  
                    <h2 className="text-xl mt-5 font-extrabold">Contact Information</h2>
                     <p className="border-b-2 border-purple-200 mt-4"></p>
                     <div className="flex gap-1 font-semibold mt-4" >
                            <p className="text-2xl text-purple-500"><IoCallOutline /> </p>
                              <p className="text-xl text-gray-700"> Phone: 
                          <span className="text-gray-500">
                            {contact_information.phone}</span></p>
                    </div>
                     <div className="flex gap-1  font-semibold mt-3" >
                            <p className="text-2xl text-purple-500"> <HiOutlineMail /></p>
                              <p className="text-xl text-gray-700"> Email: 
                          <span className="text-gray-500">{contact_information.email}</span></p>
                    </div>
                     <div className="flex gap-1 font-semibold mt-3" >
                            <p className="text-2xl text-purple-500"> <CiLocationOn /></p>
                              <p className="text-xl text-gray-700"> Address: 
                          <span className="text-gray-500">{contact_information.address}</span></p>
                    </div>

            </div>
          </div>

         </div>
    );
};

export default JobDetails;