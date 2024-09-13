import {Component} from 'react'
import Navbar from '../Navbar'
import JobItem from '../JobItem'


class BookMarks extends Component{
    state={
        bookMarkJobs:[]
    }
    componentDidMount(){
        this.getBookMarkJobs()
    }

    getBookMarkJobs=()=>{
        const bookMarksJobsData=JSON.parse(localStorage.getItem("jobData"))
        const updatedbookMarksData=bookMarksJobsData.map(eachJob=>({
            id:eachJob.id,
            title:eachJob.title,
            companyName:eachJob.companyName,
            location:eachJob.location,
            jobRole:eachJob.jobRole,
            primaryDetails:eachJob.primaryDetails,
            whatsappNo:eachJob.whatsappNo,
            jobHours:eachJob.jobHours,
            openingsCount:eachJob.openingsCount,
            moreDetails:eachJob.moreDetails,
            jobCategory:eachJob.jobCategory,
            numApplications:eachJob.numApplications,


        }))
        this.setState({bookMarkJobs:updatedbookMarksData})
        
    }
    renderBookMarkJobView=()=>{
        const {bookMarkJobs}=this.state
        return (
            <ul  className="ul-job-items-container">
                {bookMarkJobs.map(eachjJob => (
          <JobItem key={eachjJob.id} jobData={eachjJob} />
        ))}

            </ul>
        )


    }

    render(){
        
        return (
            <>
            <Navbar/>
            {this.renderBookMarkJobView()}
            </>
        )
    }
}

export default BookMarks