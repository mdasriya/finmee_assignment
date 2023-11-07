import React from 'react'
import "../style/Middle.css"
const Middle = () => {
  return (
    <>
    <div className='main'>
    <div className='first_left'>
   <h1>Mine-To-Mill-To-Mine </h1>
   <h1>Optimization</h1>
   <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
          <button className='read_more_btn'>Read More</button>
      </div> 
      {/* first right image part */}
      <div className='first_right'>
        <img src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-1536x1024.jpg" alt="" />
        </div> 
    </div>
        {/* Second part is start here */}
        <div className='main'>
      {/* first right image part */}
      <div className='first_right'>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg" alt="" />
        </div> 
        <div className='first_left'>
   <h1>Sustainability </h1>
 
   <p>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
<br /> <br />
With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
          <button className='read_more_btn'>Read More</button>
      </div>
        </div>

        {/* third part start here  */}
        <div className='main'>
    <div className='first_left'>
   <h1>Mineral Processing </h1>
  
   <p>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
          <button className='read_more_btn'>Read More</button>
      </div> 
      {/* first right image part */}
      <div className='first_right'>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg" alt="" />
        </div> 
    </div>

   {/* four part is start here */}
   <div className='main'>
      {/* first right image part */}
      <div className='first_right'>
        <img src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png" alt="" />
        </div> 
        <div className='first_left'>
   <h1>Mine-To-Mill-To-Mine </h1>
   <h1>Optimization</h1>
   <p>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
          <button className='read_more_btn'>Read More</button>
      </div>
        </div>

    </>
  )
}

export default Middle
