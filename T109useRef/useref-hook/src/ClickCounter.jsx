import { useRef } from "react";

function ClickCounter () {
  const clickRef = useRef(0);
  const handleClick = () => {
    clickRef.current = clickRef.current + 1
    alert(`I am clicked ${clickRef.current} times`)
  }
  return(
    <>
    <button onClick={handleClick}>
      Click Here
    </button>
    
    </>
  )


}

export default ClickCounter;
