import React from 'react'
import Mainlayout from '../layout/Mainlayout'
import './VerticalPage.css'
import pic1 from '../assets/vertical/pic1.jpg'
import pic2 from '../assets/vertical/pic2.png'
import pic3 from '../assets/vertical/pic3.jpg'

function VerticalPage() {
  return (
  < Mainlayout>
        <div className="Header">
          <h1>STEP BY STEP GUIDE:VERTICAL FARMING</h1>
      
  </div>
  <div className="Content1">
  <h1>
    <span className="Step1">STEP 1: START WITH A PLANT </span>
  </h1>
  <h2>Selecting the right crops for vertical farming.</h2>
 
  <div>
  <img src={pic1} className="first-pic"  alt="first-pic" /> 
    <p>1. Popular choices like leafy greens, herbs, strawberries, and small fruit trees are favored because they fit well into vertical systems and meet market demand. </p>
    <p>2. When deciding, it's important to balance factors like compatibility with your setup, growth time, and market value. </p>
    <p>3. You don't want to pick a crop that grows quickly but isn't valuable, nor do you want one that's in demand but takes too long to grow, leading to high upfront costs.</p>
   
        </div>
    </div>

    <div className="Content2">
  <h1>
    <span className="Step2">STEP 2: SELECT FOR A CONTROLLED ENVIRONMENT </span>
  </h1>
  <h2>Make sure plant grow at correct conditions.</h2>
  <div>
    <p>1. Creating the right conditions for plant growth, including temperature, humidity, light, and airflow, is crucial. </p>
    <p>2. This practice, known as controlled environment agriculture (CEA), is central to vertical farming. It allows for year-round, pest-free cultivation of crops.</p>
        </div>
    </div>

    <div className="Content3">
  <h1>
    <span className="Step3">STEP 3: SELECT A GROWING SYSTEM </span>
  </h1>
  
  <div>
  <h2>Vertical farming offers various growing systems, including aquaponics, aeroponics, and hydroponics.  </h2>
  <img src={pic2} className="sec-pic"  alt="sec-pic" /> 
    <p>1. Hydroponics: Plants grow in a water solution with nutrients. It's efficient and versatile but requires automation to cut costs and risks</p>
    <p>2. Aeroponics: Plants are suspended, with roots sprayed by a nutrient mist. It's fast-growing and water-efficient but needs costly equipment.</p>
    <p>3. Aquaponics: Combines fish farming and hydroponics, with fish waste providing nutrients. It's space-efficient and maintains high oxygen levels but can fail entirely if one part breaks and is pricey to set up.</p>
    <p>4. These systems don't use soil but rely on nutrient-rich solutions instead.</p>
        </div>
    </div>

    <div className="Content4">
  <h1>
    <span className="Step4">STEP 4: GROW PLANTS IN THE CONTROLLED ENVIRONMENT</span>
  </h1>
  <h2>After setting up the environment and choosing the growing system, it's time to plant. </h2>
  <div>
    <p>1. The growth duration varies depending on the plant type. Some, like leafy greens, grow quickly in weeks, while others, like strawberries, take months.  </p> 
    <p>2. Factors like environment and plant variety affect growth speed. Understanding these timelines is key for managing the farm efficiently and meeting market demands.</p>
        </div>
    </div>
    <img src={pic3} className="pic-third"  alt="pic-third" />

    </Mainlayout>
  )
}

export default VerticalPage