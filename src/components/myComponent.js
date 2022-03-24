import React from 'react'

const myComponent = (props)=> {

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
       getMul: getMul
     })}
   </div>
  )
}

export default myComponent;