// Renders the text “Kitchen” and the following components:
// - A <Oven> component
// - A <Sink> component

import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return (
    <div>
    Kitchen
    <Oven />
    <Sink />
    </div>
    );
}

export default Kitchen; 