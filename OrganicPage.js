import React from 'react'
import "./OrganicPage.css"
import Mainlayout from '../layout/Mainlayout'
import Step1 from '../assets/Step1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/Basic-Crop-Rotation.jpg'
import photo4 from '../assets/weed.jpg'
import photo5 from '../assets/last step.png'

function OrganicPage() {
  return (
    <Mainlayout>
    
        <div className="Header">
          <h1>STEP BY STEP GUIDE:ORGANIC FARMING</h1>
      
   
  </div>
  <div className="Content1">
  <h1>
    <span className="Step1">STEP 1: CONSIDERATION FOR CHANGING </span>
  </h1>
  <h2>Begin your farm planning with a thorough review.</h2>
 
  <div>
  <img src={Step1} className="first-pic"  alt="first-pic" /> 
    <p>1. Consider location, farm size, crop distribution, and soil analysis.</p>
    <p>2. Evaluate climate, organic matter management, and infrastructure.</p>
    <p>3. Identify limiting factors like capital and labor, and address farm-specific challenges.</p>
    <p>4. Tailor your approach based on whether your farm relies on high external inputs or focuses on natural inputs and recycling. This sets the foundation for a more sustainable and efficient farming system.</p>
   
        </div>
    </div>

    <div className="Content2">
  <h1>
    <span className="Step2">STEP 2: GATHER INFORMATION </span>
  </h1>
  <h2>Success in organic farming is closely tied to having a wealth of knowledge and skills.</h2>
  <div>
    <p>1. To transition smoothly, invest time in learning organic practices specific to your needs.</p>
    <p>2. Explore practices like mulching, composting, organic pest management, and growing your own animal feed. </p>
        </div>
    </div>

    <div className="Content3">
  <h1>
    <span className="Step3">STEP 3: CROP SELECTION </span>
  </h1>
  
  <div>
  <h2>Selecting suitable crops based on your preferences and your property's capacity. </h2>
  <img src={photo2} className="sec-pic"  alt="sec-pic" /> 
    <p>1. Consider what you enjoy eating and 
          ensure it aligns with your land's sustainability. 
          If you have animals, grow crops to create a self-sustaining system, 
          reducing reliance on external feed inputs.</p>
    <p>2. Assess the equipment required to manage your chosen crops and 
          evaluate if it's feasible based on your available resources.</p>
        </div>
    </div>

    <div className="Content4">
  <h1>
    <span className="Step4">STEP 4: MULCHING </span>
  </h1>
  <h2>Mulching is essential for preventing soil erosion by covering topsoil with natural plant materials, inhibiting surface runoff during rainfall.</h2>
  <div>
    <p>1. As the material decomposes, it enriches the soil with organic matter, promoting stability. </p> 
    <p>2. Choose from options like weeds, cover crops, crop residues, grass, pruning material, or waste from agricultural and forestry processes. </p>
    <p>3. For optimal results, mulch before the wet season, apply a moderate layer evenly across the field to protect and enhance your soil.</p>
        </div>
    </div>

    <div className="Content5">

  <h1>
    <span className="Step5">STEP 5: CROP PLANNING </span>
  </h1>
  
  <div>
  <img src={photo3} className="third-pic"  alt="third-pic" />
  <h2>In organic farming, successful planning of crops is crucial.</h2>
   
    <p>1. Employ practices like crop rotation and intercropping to enhance soil health and fertility.</p>
    <p>2. Keep accurate and detailed records of your crops to ensure ongoing 
          soil health and track crop yields for continuous improvement.</p>
        </div>
    </div>

    <div className="Content6">
  <h1>
    <span className="Step6">STEP 6: NUTRIENT MANAGEMENT </span>
  </h1>
  <h2>Preserving soil fertility is essential as crops grow and animals graze, depleting nutrients that must be replenished.</h2>
  <div>
    <p>1. While traditional farming relies on nitrogen-based fertilizers, organic systems adopt alternative approaches. Utilize green manure, animal manure, and organic fertilizers based on your specific needs. </p> 
    <p>2. Composting is a significant contributor, converting organic material into natural fertilizer for sustainable soil health.</p>
        </div>
    </div>

    <div className="Content7">

<h1>
  <span className="Step7">STEP 7: INTEGRATED PEST, DISEASE AND WEED MANAGEMENT </span>
</h1>
<img src={photo4} className="four-pic"  alt="four-pic" />

<div>

<h2>Prevent issues by choosing disease-resistant crops, employing mixed cropping systems, and practicing proper sanitation.</h2>
  <p>1. Creating a healthy environment for pest-controlling species, along with proper sanitation practices.</p>
  <p>2. Manage pests naturally, boost biodiversity, and maintain a viable weed level for farm health.</p>
      </div>
  </div>

  <div className="Content8">
  <h1>
    <span className="Step8">STEP 8: HOLISTIC SOIL AND FARM HEALTH</span>
  </h1>
  <h2>Prioritize good soil management based on your specific situation, crops, and location for successful organic farming.</h2>
  <div>
    <p>1. Prioritize good soil management practices such as improving aeration, reducing compaction, and encouraging soil organism activity.  </p> 
    <p>2. Integrate animal husbandry for natural resource enhancement, pest control, and weed management.</p>
        </div>
    </div>
    <img src={photo5} className="fif-pic"  alt="fif-pic" />
    </Mainlayout>
 
  )
}

export default OrganicPage