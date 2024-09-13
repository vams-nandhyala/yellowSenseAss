
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import { ImOffice } from "react-icons/im";
import { Link} from 'react-router-dom'
import { FaBookOpenReader } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import React,{useState} from "react"

import "./index.css"


const JobItem=props=>{
  const [bookmarkJobData,setBookMarks]=useState([])
  const [bookmarkBtnText,setbtnText]=useState("Book Mark")
  const [bookmarkBtnClass,setbtnClass]=useState("book-mark_btn")
  
    const {jobData}=props 
    const {id,
        companyName,
        location,
        jobRole,
        primaryDetails,
        openingsCount}=jobData
    
    
       
    if (id !== undefined){
      
    const salary=primaryDetails.Salary
    const Experience=primaryDetails.Experience
    const Qualification=primaryDetails.Qualification
    const storeJobDataInLocalStore=()=>{
      setBookMarks([...bookmarkJobData,jobData])
      localStorage.setItem('jobData',JSON.stringify(bookmarkJobData))
      setbtnText("Book Marked")
      setbtnClass("book-marked_btn")
    }
    return (
      <Link to={`/jobs/${id}`} className="link-item" jobData={jobData}>
        
        <li className="job-item">
            <div className="logo-title-container">
            <div className="title-rating-container">
              <h1 className="title-heading">{jobRole}</h1>
            </div>
            <div className="location-package-container">
            <div className="location-employee-container">
            <div className="location-container">
                <MdLocationOn className="location-icon" />
                <p className="location-heading">{location}</p>
              </div>
              
            </div>
            <p className="package-heading">{salary}</p>
            </div>
            <div className="Company-openings-container">
            <div className="employee-type-container">
                <ImOffice className="brief-case-icon" />
                <p className="employee-type-heading">{companyName}</p>
              </div>
              <p className="package-heading">Opening : {openingsCount}</p>
            </div>
            <div className="Company-openings-container">
            <div className="employee-type-container">
                <BsFillBriefcaseFill className="brief-case-icon" />
                <p className="employee-type-heading">{Experience}</p>
              </div>
              <div className="employee-type-container">
                <FaBookOpenReader className="brief-case-icon" />
                <p className="employee-type-heading">{Qualification}</p>
              </div>
              
            </div>
            
            
            </div>
            <button className={bookmarkBtnClass} onClick={storeJobDataInLocalStore}>
              <CiBookmarkPlus className="brief-case-icon" />
              <p className="employee-type-heading">{bookmarkBtnText}</p>
            </button>
            
        </li>
        
        </Link>

    )
}
}

export default JobItem