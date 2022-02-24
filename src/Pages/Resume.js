import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import './Resume.css';
import HSBar from "react-horizontal-stacked-bar-chart";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Resume() {


  AOS.init({duration: 2000});



  return (
    
    <div className="Resume">
        
        <Navbar />
        <p class = "resume-header">Resume</p>

        <div class ="vert-align">
          <Button class="btn" size="small" color="primary" target="_blank" href = {"/Resume_NoEmailPhone.pdf"} rel="noopener noreferrer"> <i class="fa fa-download"></i> Download</Button>
        </div>
        
       
        <div className="left">

            <br></br>
            <br></br>

            <div class ="work">
              <p class ="work-title" >Education</p>

              <p class = "work-company">University of Calgary</p>
              <p class = "work-position">Bachelor of Science in Computer Science & Bachelor of Commerce in Business Analytics - <span class ="work-title">(Expected Graduation: May 2023)</span></p>
        
              <ul class ="resumepoints">
                <li>Cumulative GPA: 3.88/4.00</li>
                <li>Awarded with the Haskayne Founders Circle Scholarship (2019) for leadership and academic merit</li>
              </ul>

            </div>

            <br></br>
            <br></br>

            <div class ="work">
              <p class ="work-title" >Work Experience</p>

              <p class = "work-company">Canadian Natural Resources Limited</p>
              <p class = "work-position">Enterprise Resource Analyst Intern - <span class ="work-title">(Sept. 2020 - April 2021)</span></p>
        
              <ul class ="resumepoints"> 
                <li>Developed Robotic Process Automation scripts to  various accounting processes using UiPath  Studios</li>
                <li>Created and modified SQL scripts to query data and deliver it to clients</li>
                <li>Assisted in managing data integrity and data analysis to solve issues within current configuration</li>
                <li>Learned key business applications such as EnterpriseOne, Open Invoice, and Data Access Studios to assist in analyzing and solving data issues</li>
              </ul>

              <p class = "work-company">Farm Business Consultants</p>
              <p class = "work-position">Tax Quality Assurance Intern - <span class ="work-title">(Jan. 2020 - June 2020)</span></p>
              <ul class ="resumepoints">
                <li>Completed income tax returns for small business owners and farmer clients using proprietary tax software</li>
                <li>Analyzed business income and expense records using critical thinking to look for errors and correct them</li>
                <li>Carefully reviewed income tax returns ensuring that they were accurate and compliant with the Canadian tax rules and regulations</li>
                <li>Contacted clients regarding tax information and assisted clients when necessary</li>
              </ul>
            </div>

            <br></br>
            <br></br>
            <div class = "skill">
              <p class ="work-skillstitle" >Skills</p>
              
              <div style={{ width: "80%", marginLeft: "10%", marginBottom: "0.5%" }} >        
                Java
                <HSBar
                showTextIn
                data={[
                  { value: 10000, description: " ", color: "#FFA500 "},
                  { value: 3000, description: "Intermediate", color: "#A9A9A9" }
                ]}
                /> 
                </div>

              <div style={{ width: "80%", marginLeft: "10%", marginBottom: "0.5%" }}>        
              C/C++
              <HSBar
              showTextIn
              data={[
                { value: 10000, description: " ", color: "#FFA500"},
                { value: 3000, description: "Intermediate", color: "#A9A9A9" }
              ]}
              /> </div>

              <div style={{ width: "80%", marginLeft: "10%", marginBottom: "0.5%" }}>        
                SQL
                <HSBar
                showTextIn
                data={[
                  { value: 7000, description: " ", color: "#FFA500"},
                  { value: 6000, description: "Proficient", color: "#A9A9A9" }
                ]}
                /> 
              </div>

              <div style={{width: "80%", marginLeft: "10%", marginBottom: "0.5%" }}>        
                Python
                <HSBar
                showTextIn
                data={[
                  { value: 7000, description: " ", color: "#FFA500"},
                  { value: 6000, description: "Proficient", color: "#A9A9A9" }
                ]}
                /> 
              </div>

              <div style={{ width: "80%", marginLeft: "10%", marginBottom: "0.5%"  }}>        
                HTML + CSS
                <HSBar
                showTextIn
                data={[
                  { value: 7000, description: " ", color: "#FFA500"},
                  { value: 6000, description: "Proficient", color: "#A9A9A9" }
                ]}
                /> 
              </div>
            </div>

        </div>
    </div>
  );
}

export default Resume;
