import {Component} from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import {PropagateLoader} from 'react-spinners'
import JobItem from '../JobItem'
import Navbar from '../Navbar'

import "./index.css"

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class JobCard extends Component{
  state={
    jobList:[],
    apiStatus: apiStatusConstants.initial,
    pageNo:1
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
          jobList: updatedDataJobs,
          apiStatus: apiStatusConstants.success,
        })

        
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    }
renderJobDetails=()=>{
      const {jobList}=this.state
      const {match} = this.props
      const {params} = match
      const {id} = params
      let activeJOb={}
      for (let i=0;i<jobList.length;i++){
        if (jobList[i].id==id){
          activeJOb=jobList[i]
        }
  
      }
      const {
        whatsappNo,
        jobHours,
        moreDetails,
        jobCategory,
        numApplications
      }=activeJOb
    
      
      return (
        
        <div className="job-item-details-container">
            {<JobItem jobData={activeJOb} key={id}/>}
          <div className="job-item">
              <div className="description-visit-container">
                <h1 className="description-heading">Description</h1>
              </div>
                <p className="description-text">{moreDetails}</p>
                <p className="description-text">Job Category : {jobCategory}</p>
                <p className="description-text">Num Applications : {numApplications}</p>
                <p className="description-text">Job Hours : {jobHours}</p>
                <div className="contact-icon-container">
                  <RiWhatsappFill className="whatsapp_icon"/>
                <p className="whatsapp_num">{whatsappNo}</p>
                </div>
              <button className="apply_btn">Apply</button>
          </div>
        </div>
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
          return this.renderJobDetails()
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
      </>
    )
       
}
}

export default JobCard