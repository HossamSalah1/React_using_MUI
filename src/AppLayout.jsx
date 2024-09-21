import React from 'react'
import Header from './components/Navbar/Navbar'
import {Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AppLayout() {
const lang = useSelector((state)=>state.language.language)
  //en ltr
  //ar rtl
  return (
    <>

    <div dir={`${(lang =='en')?'ltr':'rtl'}`}>
    <Header></Header>

<Outlet></Outlet>
    </div>

    </>
  )
}
