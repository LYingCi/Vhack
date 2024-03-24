import React from 'react'
import Mainlayout from '../layout/Mainlayout'
import './SolarDripper.css'
import pic1 from '../assets/Dripper/photo1.webp'
import pic2 from '../assets/Dripper/PHOTO2.webp'
import pic3 from '../assets/Dripper/pic1.jpg'

function SolarDripper() {
  return (
    <Mainlayout>
        <div className="Header">
          <h1>STEP BY STEP GUIDE:SOLAR DRIPPER FARMING</h1>
      
   
  </div>
  <div className="Content1">
  <h1>
    <span className="Step1">STEP 1: DESIGN DRIP IRRIGATION SYSTEM LAYOUT  </span>
  </h1>
  <img src={pic1} className="first-pic"  alt="first-pic" /> 
  <h2>Designing a garden with a good layout is crucial for success. </h2>
 
  <div>
    <p>1. Sketching out your garden beforehand helps you plan effectively, considering dimensions and obstacles. </p>
    <p>2. When designing a drip irrigation system, locate your water source and plan tubing routes to avoid walkways. </p>
    <p>3. Utilize spaces along paths for planting, following permaculture principles. </p>
    <p>4. Optimize efficiency by minimizing tubing length and considering varying water needs in different gardening zones. </p>
    <p>5. Starting with a well-planned design saves time and effort in the long run, ensuring your garden thrives.</p>
   
        </div>
    </div>

    <div className="Content2">
  <h1>
    <span className="Step2">STEP 2: SET UP WATER SOURCE</span>
  </h1>
  <h2>Water availability shapes your garden design.</h2>
  <div>
    <p>1. We've found using water tanks, like two 330-gallon IBC tanks, convenient for our drip irrigation system. Whether hauling water or using a well or natural source, a tank system ensures consistent supply. </p>
    <p>2. For wells, a tank system is recommended, while municipal water can connect directly to the pump. </p>
    <p>3. Simplify your setup with a tank system, making water management seamless for a thriving garden.</p>
        </div>
    </div>

    <div className="Content3">
  <h1>
    <span className="Step3">STEP 3: MAKE IMPORTANT DRIP IRRIGATION CALCULATIONS</span>
  </h1>
  <h2>Calculating your irrigation system's needs is crucial but simpler than it seems. </h2>
  <div>
    <p>1. Firstly, determine the GPH (Gallons Per Hour) of your drippers based on soil type: clay (.5 GPH), regular soil (1 GPH), or sandy soil (2 GPH).  </p>
    <p>2. Adjustable drippers offer flexibility as plant water needs change, although they require monitoring. Next, calculate the total number of drippers needed, ensuring it doesn't exceed your pump's GPH flow. </p>
    <p>3. Consider installing valves for watering zones to manage pump capacity efficiently. Remember, one dripper can irrigate an area, not just a single plant. </p>
    <p>4. Then, select the appropriate mainline tubing diameter based on your total GPH usage, ensuring it doesn't surpass the tubing's maximum GPH or run length. Typically, 1/2 inch tubing suffices for household gardens, but larger sizes may be necessary for extensive setups.</p>
        </div>
    </div>

    <div className="Content4">
  <h1>
    <span className="Step4">STEP 4: PURCHASE DRIP IRRIGATION COMPONENTS</span>
  </h1>
  <h2>When it comes to building a reliable drip irrigation system, opting for quality components is essential. </h2>
 
  <div>
  <img src={pic2} className="sec-pic"  alt="sec-pic" /> 
    <p>1. Many generic systems on platforms like Amazon fall short, often due to flimsy parts and poor compatibility. Drip Depot stands out for its dependable products and seamless integration. Their extensive range covers everything needed for a custom setup, from tubing to fittings and valves.</p>
    <p>2. Customization is easy with their selection, and their kits offer convenience for specific needs, like raised bed gardening. One crucial tip: stick to one measurement system to avoid leaks. Essential components include tubing, emitters, fittings, valves, and tools like hole punchers.</p>
    <p>3. Don't forget items like end caps, clamps, and goof plugs for maintenance. Ensure proper filtration and pressure regulation with backflow preventers, filters, and regulators. </p>
    <p>4. Lastly, invest in a reliable water pump to power your system effectively. With Drip Depot, building a durable drip irrigation system is both straightforward and affordable.</p>
   
        </div>
    </div>
    <div className="Content5">
  <h1>
    <span className="Step5">STEP 5: INSTALL THE DRIP IRRIGATION SYSTEM IN THE CORRECT ORDER</span>
  </h1>
  <h2>Installing a drip irrigation system is straightforward but requires patience and attention to detail.</h2>
  <div>
    <p>1. Begin at the water source, installing components like the backflow preventer, pump, and pressure regulator in sequence. </p> 
    <p>2. Position, cut, and fit drip lines onto the mainline tubing, optionally adding shutoff valves. Before installing drippers, flush the system to prevent clogging. </p>
    <p>3. Punch holes for drippers and install them, although it can be challenging. Stake the lines to the ground once drippers are in place. With proper installation and care, your system will be ready to efficiently water your garden.</p>
        </div>
    </div>
    <img src={pic3} className="pic-third"  alt="pic-third" />

    </Mainlayout>

  )
}

export default SolarDripper