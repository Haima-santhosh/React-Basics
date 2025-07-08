import { useState } from "react"
import "./assets/css/App.css"



function App() {

  let products = [1, 2, 3, 4, 5]
  let [nums,setNums]=useState([1,2,3,4,5])

  let[inputVal,setInputVal]=useState('state')
  let inputVariable="variable"
const updateValue=(data)=>
{
//console.log("Clicked");
console.log(data);


}

const updateInputVal=(event)=>
{
console.log(event.target.value);
setInputVal(event.target.value)

}

  return (
    <>
<button onClick={()=>updateValue(10)}>Update</button>                    
{/* if use updateValue(), it executed immediately */}
      <h1>Products</h1>
      <div className="productsContainer">
        {products.map((products, index) => {
          return (



            <p key={index}>{products}</p>

          )
        })}



      </div>
<hr/>

      <div className="productsContainer">
        {nums.map((num, index) => {
          return (



            <p key={index}>{num
            }</p>

          )
        })}



      </div>


      <input type="text" onChange={updateInputVal} />
      <p>{inputVal}</p>
      <p>{inputVariable}</p> 
{/* In state value change after updation , but in variable value will not */}





    </>
  )
}

export default App


