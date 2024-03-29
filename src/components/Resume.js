import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          {item.specialization.length?<span>&bull;</span>:""} <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                          <span>&bull;</span> <em className="date">CGPA: {item.CGPA}</em>
                          </p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.role}
                          <span>&bull;</span> <em className="date">{item.MonthOfJoining} {item.YearOfJoining}</em>
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p className="info">
                            <b>{item.AchievementsOne}</b>
                          </p>
                          <p className="info">
                            <b>{item.AchievementsTwo}</b>
                          </p>
                          <p className="info">
                            <b>{item.AchievementsThree}</b>
                          </p>
                          <p className="info">
                            <b>{item.AchievementsFour}</b>
                          </p>
                          <p className="info">
                            <b>{item.AchievementsFive}</b>
                          </p>
                          <p className="info"> 
                            <b>{item.AchievementsSix}</b>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}