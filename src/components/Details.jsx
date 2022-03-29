import React from 'react'

const Details = ({vehicle, closeModalProp}) => {
  return (
    <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-gray-400 bg-opacity-30">
      <div className="bg-white p-8">
      <button onClick={closeModalProp} className="p-2 bg-indigo-600 text-white font-bold">Close</button>
          <div >
              <img src={vehicle.photo} alt="vehicle photo"  />
          </div>
          <div className="">
            <h1 className="">{vehicle.colors}</h1>
            <hr />
            <h2 >${vehicle.price}</h2>
            <p className="lead">{vehicle.range.distance}</p>
            
          </div>
    </div>
    </div>
  )
}

export default Details