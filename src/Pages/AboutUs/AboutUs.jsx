import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { colorContext } from '../../contexts/colorContext'

export default function AboutUs() {

  const { color,setColor } = useContext(colorContext)
  return (
    <>
      color is {color}

      <button
        className="btn btn-success  m-5"
        onClick={() => {
          setColor((color=='red')?'blue':'red')

        }}
      >
        change Name by context
      </button>
      <div>
        <Link to='/about'> values</Link>
        <Link to='/about/vision'> vision</Link>
      </div>


      <Outlet />
    </>

  )
}
