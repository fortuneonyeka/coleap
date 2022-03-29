import React from 'react'

const Details = ({vehicle, closeModalProp}) => {
  return (
    <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-gray-400 bg-opacity-30">
      <div className="bg-white p-8">
      <button onClick={closeModalProp} className="p-2 bg-indigo-600 text-white font-bold">Close</button>
          <div className="col-md-6 d-flex justify-content-center  my-5">
              <img src={vehicle.photo} alt="vehicle photo" height="500px" width="500px" />
          </div>
          <div className="col-md-6 my-5 py-3">
            <h1 className="text-danger fw-bold">{vehicle.colors}</h1>
            <hr />
            <h2 className="text-info my-3">${vehicle.price}</h2>
            <p className="lead">{vehicle.range.distance}</p>
            
          </div>
    </div>
    </div>
  )
}

export default Details