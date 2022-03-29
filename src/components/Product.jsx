
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Details from "./Details"

const Product = () => {
  const [vehicles, setVehicles] = useState([])
  const [orderBy, setOrderBy] = useState("price")
  const [fromMin, setFromMin] = useState(true)
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  const closeModal = () => {
    setSelectedVehicle(null)
  }

  const fetchData = async () => {
    const response = await fetch("https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles")
    const data = await response.json()
    setVehicles(data)
  }

  useEffect(() => {
    fetchData()
    
  }, [])

 
 const option = () => {
  let vehicleTemp = [...vehicles]
  vehicleTemp = vehicleTemp.sort((itemA, itemB) => {
   if (orderBy === "price") {
     let priceA = itemA.price.split(" ")
     let priceB = itemB.price.split(" ")
     
     priceA.pop()
     
     priceB.pop()
     priceA = priceA[0]
    
     priceB = priceB[0]
     
     
     return fromMin ? parseInt(priceA, 10) < parseInt(priceB, 10) : parseInt(priceA, 10)> parseInt(priceB, 10)
   }
   if (orderBy === "range") { 
     return fromMin ? parseInt(itemA.range.distance, 10) < parseInt(itemB.range.distance, 10) : parseInt(itemA.range.distance, 10) > parseInt(itemB.range.distance, 10)
   }
  })
  
  return vehicleTemp

 }

 useEffect(() => {
   
  let result = option()
  console.log(result);
  setVehicles(result)
}, [orderBy, fromMin])


 const onChangeOrderBy = (value) => {
  setOrderBy(value)
 }
 const onChangeFromMin = (value) => {
  setFromMin(value)
 }


  return (
    <div>
      {selectedVehicle && <Details  vehicle={selectedVehicle} closeModalProp={()=>closeModal()}/> }
      <div onChange={(e) => onChangeOrderBy(e.target.value)}>
        <label htmlFor=""> <span>Range</span>
        <input type="radio"  name="orderBy" value="range"/>
        </label>
        <label htmlFor=""><span>Price</span>
          <input type="radio"  name="orderBy" value="price"/>
        </label>
      </div>
      <div onChange={(e) => onChangeFromMin(e.target.value)}>
        <label htmlFor=""><span>Max</span>
          <input type="radio" name="fromMin"  value={false}/>
        </label>
        <label htmlFor=""><span>Min</span>
          <input type="radio" name="fromMin"  value={true}/>
        </label>
      </div>
      {vehicles.length > 0 && (
       
        <div className="">
          <h1>Available vehicles</h1>
          <ul className="grid grid-cols-4">
          {vehicles.map(vehicles => (
            <li key={vehicles.id}> 
            <img onClick={()=>setSelectedVehicle(vehicles)} src={vehicles.photo} alt="Vehicle photo" /> 
            <h2>{vehicles.make}  {vehicles.model} | {vehicles.price}</h2>
            </li>
          ))}
          </ul>
          
        </div>
       
      )}
    </div>
  )
}

export default Product


