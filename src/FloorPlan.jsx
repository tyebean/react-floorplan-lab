// imports

import Kitchen from "./Kitchen";
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom'; 
import Bath from './Bath';

const FloorPlan = () => {
  return ( 
    <div className="floorplan">
      {/* <h1>Floorplan</h1> */}
      Floorplan
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} /> 
      <Bedroom bedNum={2} /> 
      <Bedroom bedNum={3} /> 
      <Bath size="full-bath" />
      <Bath size="half-bath" />
    </div>
  );
} 

export default FloorPlan; 