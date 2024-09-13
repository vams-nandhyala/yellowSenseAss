import {Component} from 'react'
import Navbar from '../Navbar'
import JobItem from "../JobItem"
import {PropagateLoader} from 'react-spinners'

import "./index.css"
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Jobs extends Component{
    state={
        jobsList:{},
        apiStatus: apiStatusConstants.initial,
        pageNo:"1"

    }
    
    componentDidMount() {
      
        this.getProducts()
        
      }
    
    getProducts = async () => {
        this.setState({
            apiStatus: apiStatusConstants.inProgress
          })
        const {pageNo}=this.state
        
        const apiUrl=`https://testapi.getlokalapp.com/common/jobs?page=${pageNo}`
        const options = {
            method: 'GET'
          }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            const fetchedData = await response.json()
            const updatedDataJobs=fetchedData.results.map(eachJob=>({
                id:eachJob.id,
                title:eachJob.title,
                companyName:eachJob.company_name,
                location:eachJob.job_location_slug,
                jobRole:eachJob.job_role,
                primaryDetails:eachJob.primary_details,
                whatsappNo:eachJob.whatsapp_no,
                jobHours:eachJob.job_hours,
                openingsCount:eachJob.openings_count,
                moreDetails:eachJob.other_details,
                jobCategory:eachJob.job_category,
                numApplications:eachJob.num_applications,


            }))
            this.setState({
                jobsList: updatedDataJobs,
                apiStatus: apiStatusConstants.success,
              })

            
          } else {
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
          }

    }
    changepageOne=()=>{
      console.log("1")
      this.setState({
        pageNo: "1"
      })
      
    }
    changepageTwo=()=>{
      console.log("2")
      this.setState({
        pageNo: "2"
      })
    
    }

    renderJobView=()=>{
        const {jobsList}=this.state
        return (
            <ul  className="ul-job-items-container">
                {jobsList.map(eachjJob => (
          <JobItem key={eachjJob.id} jobData={eachjJob} />
        ))}

            </ul>
        )


    }


    onGetJobsFailureView = () => (
      <div className="failure-img-button-container">
        <img className="failure-img" src="https://media.istockphoto.com/id/951985126/vector/fail-ink-stamp.jpg?s=612x612&w=0&k=20&c=YIHZIUaRLJqNArnsvWWIswGIn3Q5y7FWxUsNQs-rzrQ=" alt="failure view" />
        <h1 className="failure-heading">Oops! Something Went Wrong</h1>
        <p className="failure-paragraph">
          we cannot seem to find the page you are looking for
        </p>
        <div className="jobs-failure-button-container">
          <button
            className="failure-button"
            type="button"
            onClick={this.onRetryJobs}
          >
            retry
          </button>
        </div>
      </div>
    )
    

    renderLoadingView = () => (
      <div className="loader-container" data-testid="loader">
        <PropagateLoader color="#241b1b"
  loading
  size={15}
  speedMultiplier={1} />
      </div>
    )


    onRenderJobsStatus = () => {
      const {apiStatus} = this.state
  
      switch (apiStatus) {
        case apiStatusConstants.success:
          return this.renderJobView()
        case apiStatusConstants.failure:
          return this.onGetJobsFailureView()
        case apiStatusConstants.inProgress:
          return this.renderLoadingView()
        default:
          return null
      }
    }
    
    render(){
        return (
        <>
        <Navbar/>
            <div className="jobs_view_container">
            {this.onRenderJobsStatus()}
            
            </div>
            <div className="pages_no_container">
              <p className="pages_heding">pages : </p>
              <button className="page-btn" onClick={this.changepageOne}>1</button>
              <button className="page-btn" onClick={this.changepageTwo}>2</button>
            </div>
            

            
        </>
        )
    }
}

export default Jobs