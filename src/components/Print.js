import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Scheduler from './Scheduler';



const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      
      <button onClick={handlePrint}>Print this out!</button>

    </div>
  )
}

export default Print