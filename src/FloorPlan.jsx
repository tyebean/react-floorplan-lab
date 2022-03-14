// imports

import Kitchen from "./Kitchen";
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom'; 
import Bath from './Bath';

const FloorPlan = () => {
  return ( 
    <div>
      {/* <h1>Floorplan</h1> */}
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} /> 
      <Bedroom bedNum={2} /> 
      <Bedroom bedNum={3} /> 
      <Bath size="Half Bath" />
      <Bath size="Full Bath" />
    </div>
  );
} 

export default FloorPlan; 