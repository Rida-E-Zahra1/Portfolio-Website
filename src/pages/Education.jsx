import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Education.css';
import { faSchool } from '@fortawesome/free-solid-svg-icons/faSchool';

export default function Education() {
  return (
    <div className='education-content'>

      <div className='edu-heading slideTop flex-layout'>
        <h1>Education</h1>
      </div>

      <div className='edu-sections  slideLeft flex-layout'>

        <div className='container flex-layout'>
          <div className='heading flex-layout'>
            <h2>University</h2>
            <FontAwesomeIcon className='icon' icon={faUniversity} />
          </div>
          <div className='info flex-layout'>
            <div className='degree row flex-layout'>
              <h3>Degree</h3>
              <p>Bachelor of Science (BS) in Software Engineering</p>
            </div>
            <div className='institute row flex-layout'>
              <h3>Institute</h3>
              <p>National Textile University, Faisalabad</p>
            </div>
            <div className='grade row flex-layout'>
              <h3>Grade</h3>
              <p>A+</p>
            </div>
            <div className='duration row flex-layout'>
              <h3>Duration</h3>
              <p>2022 - 2026</p>
            </div>
          </div>
          <div className='layer'></div>
        </div>

        <div className='container flex-layout'>
          <div className='heading flex-layout'>
            <h2>College</h2>
            <FontAwesomeIcon className='icon' icon={faSchool} />
          </div>
          <div className='info flex-layout'>
            <div className='degree row flex-layout'>
              <h3>Degree</h3>
              <p>FSc. Pre Engineering</p>
            </div>
            <div className='institute row flex-layout'>
              <h3>Institute</h3>
              <p>KIPS College Jail, Road Campus, Faisalabad</p>
            </div>
            <div className='grade row flex-layout'>
              <h3>Grade</h3>
              <p>A+</p>
            </div>
            <div className='duration row flex-layout'>
              <h3>Duration</h3>
              <p>2020 - 2022</p>
            </div>
          </div>
        </div>

        <div className='container flex-layout'>
          <div className='heading flex-layout'>
            <h2>School</h2>
            <FontAwesomeIcon className='icon' icon={faSchool} />
          </div>
          <div className='info flex-layout'>
            <div className='degree row flex-layout'>
              <h3>Degree</h3>
              <p>Matriculation in Computer Science</p>
            </div>
            <div className='institute row flex-layout'>
              <h3>Institute</h3>
              <p>Kinder Garton High School, Eid Gah Road, Faisalabd</p>
            </div>
            <div className='grade row flex-layout'>
              <h3>Grade</h3>
              <p>A+</p>
            </div>
            <div className='duration row flex-layout'>
              <h3>Duration</h3>
              <p>2018 - 2020</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
