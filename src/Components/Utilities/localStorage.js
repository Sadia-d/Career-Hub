const getStoreApplication=() =>{
        const storeJobApplication = localStorage.getItem('application-job');
        if(storeJobApplication){
            return JSON.parse(storeJobApplication)
        }
     else{
        return []
     }
}

const savedJobApplication =id =>{
    const storeJobApplications = getStoreApplication();
        const exists = storeJobApplications.find(jobId => jobId === id)
        if(!exists){
            storeJobApplications.push(id);
            localStorage.setItem('application-job' , JSON.stringify(storeJobApplications))
        }
}

export {savedJobApplication , getStoreApplication}