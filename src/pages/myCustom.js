import React from "react";
import MyComponent from "../../src/components/myComponent";

export default function myCustom() {
  var a = 9;
  var b = 18;
  return (
    <div>
      myCustom
      <MyComponent
        render={({ getMul, getSub, getSum, someVar }) => {
          return (
            <div>
              Urjih ${getMul(2, 6)} + Hasah ${getSub(2, 6)} + Nemeh ${getSum(2, 6)}
              <b> {someVar}</b>
            </div>
          );
        }}
      />
      {/* {myComponent((a,b)=>{
          return `Urjih ${a.getMul(2,6)}` + ` Hasah ${a.getSub(2,6)}` + ` Nemeh ${a.getSum(2,6)}` 
        })} */}
      <br />
    </div>
  );
}
