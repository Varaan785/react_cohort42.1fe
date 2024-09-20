import React, { useState } from "react";
import Button from "../Button/Button";



function Feedback() {
  const [count, setCount] = useState(0);
  const [countd2, setCount2] = useState(0);
  const result = setCount + setCount2;



  const Like = () => {
    setCount((vorherigerWert) => {
      return vorherigerWert + 1;
    });

    const Dislike = () => {
      setCount2((vorherigerWert) => {
        return vorherigerWert + 1;
      });
    };
  };
  return (
    <div>
        <div> 
            <div className="button-control">Like</div>
            <Button name="Like" onClick={Like}/>
        </div>
        <div> 
            <div className="button-control">Dislike</div>
            <Button name="Dislike" onClick={Dislike}/>
        </div>
        <div> 
            <div className="button-control">Result</div>
            <Button name="Result" onClick={result}/>
        </div>
     
    </div>
  );
}
export default Feedback;