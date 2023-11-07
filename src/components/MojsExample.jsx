import React from "react";
import mojs from "@mojs/core";

const MojsExample = () => {

      
      const rect = new mojs.Shape({
        shape:        'rect',
        left:         '50%',
        fill:         'none',
        radius:       20,
        stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
        strokeWidth:  { 10: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%' : '100%' },
        rotate:        { 0: 180 },
        duration:     2000,
        repeat:       1,
      }).play();
    return (
      <div style={{textAlign:"center",zIndex:"1", alignItems:"center", width:"100%",marginTop:"56vh"}}>
 <h3>Loading...</h3>
      </div>
    );
  };
  export default MojsExample;