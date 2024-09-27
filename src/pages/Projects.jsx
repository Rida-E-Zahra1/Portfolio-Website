import React from 'react';
import './Projects.css';
import projects from '../Data/projects.json';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpg|jpeg|svg)$/));

export default function Projects() {

  return (
    <div className='projects-content'>
      
      <div className='projects-heading'>
        <h1>Projects</h1>
      </div>
      
      <div className="projects-container">
        {projects.map((data) => (
          <div className='project' key={data.title}>

            <img src={images[data.imgSrc]} alt={data.title} />
            <div className='layer'>
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
              <a href={data.repoLink} target="_blank" rel="noopener noreferrer"> {/*target="_blank"opens window in new tab */}
                <button>Visit GitHub Repository</button>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
