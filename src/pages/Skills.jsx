
import React from 'react';
import skills from '../Data/skills.json';
import './Skills.css'; 

// Function to import all images from a specific directory

/* jo path require.context se aa rhi hai us ki hr key jo k yahan title hai us pr map lga kr path se ./ ko remover dn gy or un sb paths ko images named object mn store kr ln gy or phir usy return kr dn gy */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import all images from the images directory

/* require.context aik Webpack-specific feature hai jis se hm all files/images ko manually import krny k bjay one line mn import kr skty hn... is k 3 parameters hn (1)which directory (2)want subdirectories too or not? (3)file types */
const images = importAll(require.context('../images', false, /\.(png|jpg|jpeg|svg)$/));

export default function Skills() {
  return (
    <div className='skills-content'>

      <div className='skill-heading'>
        <h1>Skills</h1>
      </div>
      
      <div className="items-container">
        {skills.map((data) => (
          <div className="item" key={data.title}>
            <img src={images[data.imgSrc]} alt={data.title} />
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
      

    </div>
  );
}


// ye sara kaam json object + map k baghair bhi kiya ja skta tha individual divs pr css code mn background image lga kr...