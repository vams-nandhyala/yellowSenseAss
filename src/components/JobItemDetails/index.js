import "./index.css"


const JobItemDetails=props=>{
    const {jobData,jobId}=props 
    const {id,title,
        companyName,
        location,
        jobRole,
        primaryDetails,
        whatsappNo,
        jobHours,
        openingsCount,
        moreDetails,
        jobCategory,
        numApplications
        }=jobData
    const {activeId}=jobId
    console.log(jobId)
    
        if (id===activeId){
            return (
                
                <h1>{title}</h1>
            )
        }

}

export default JobItemDetails