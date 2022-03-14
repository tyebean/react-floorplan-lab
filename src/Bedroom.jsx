//Accepts a bedNum prop and renders the text:
//“Bedroom [bedNum]” (substituting the value of the bedNum prop)


const Bedroom = (props) => {
  return (  
    <div id={`bedroom-${props.bedNum}`}> 
      Bedroom {props.bedNum}
      </div>
  );
}

export default Bedroom; 

