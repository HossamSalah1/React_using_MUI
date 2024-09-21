import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/slices/language";
import { changName } from "../../store/slices/userName";
import { colorContext } from "../../contexts/colorContext";
import { cnameContext } from "../../contexts/changNameContext";

export default function Home() {
  const lang = useSelector((state) => state.language.language);
  const name = useSelector((state) => state.userName.userName)

  const { color } = useContext(colorContext)
  // console.log(state.language.language);

  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage((lang == 'en') ? 'ar' : 'en'));
  };

  const toggleName = () => {
    dispatch(changName((name == 'Hossam') ? 'mohammed' : 'Hossam'));
  };

  const { cname, setName } = useContext(cnameContext)



  return (
    <>
      Home language is {lang}

      color is  {color}
      <br></br>


      <button
        className="btn btn-success"
        onClick={() => {
          toggleLanguage();
        }}
      >
        change language
      </button>
      <br />

      <button
        className="btn btn-success  m-5"
        onClick={() => {
          toggleName();
        }}
      >
        change Name
      </button>
      user name is : {name}

      <br />

      <button
        className="btn btn-success  m-5"
        onClick={() => {

          setName((cname == 'Hossam') ? 'Ali' : 'Hossam')

        }}
      >
        change Name by context
      </button>
      Name using context is {cname}
      <br />
      
    </>
  );
}
