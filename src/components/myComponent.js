import React, {useState} from 'react'

const MyComponent = (props)=> {
  const [someVar, setSomeVar] = useState(100);

const getSum = (x,y) => x + y;

const getSub = (x,y) => {
  return x - y
};

const getMul = (x,y) => x * y;

  return (
   <div>
     Heregtei zuiliin jagsaalt nemeh {props.render({
       getSum: getSum,
       getSub: getSub,
       getMul: getMul,
       someVar: someVar
     })}
   </div>
  )
}

export default MyComponent;