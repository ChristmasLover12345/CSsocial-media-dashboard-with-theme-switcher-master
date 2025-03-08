import { useEffect, useState } from "react";
import "./App.css";

import Darkcard from "./components/Darkcard";
import Lightmode from "./components/Lightmode";
import { FetchData, GetMode, SaveMode } from "./Services/DataService";

function App() {
  const [bottomBg, setbottomBg] = useState("");
  const [topBg, setTopBg] = useState("");

  const[total, setTotal] = useState("")
  const [checked, setChecked] = useState("")

  const[title, setTitle] = useState("text-white text-[28px] sm:text-4xl font-bold")
  const [mode, setMode] = useState("");


  useEffect( () => {
    const SetTheData = async () =>{
      const data = await FetchData()
 
     setTotal(data[0].total)
    }

    SetTheData()
    

   const data = GetMode()
    
   if (data === "dark")
   {
      setMode("dark");
      setChecked()
      setbottomBg("bg-[#1e202a] min-h-screen w-full relative")
      setTopBg("bg-[#1f212e] h-[30vh] w-full absolute top-0 ")
      setTitle("text-white text-[28px] sm:text-4xl font-bold")
   }
   else
   {
    setMode("light");
    setChecked("checked")
    setbottomBg("bg-white min-h-screen w-full relative")
    setTopBg("bg-[#f5f7ff] h-[30vh] w-full absolute top-0 ")
    setTitle("text-[28px] sm:text-4xl font-bold")
   }

  },[])


  const Toggle = () => {
    
    

    if (mode === "dark")
    {
      setMode("light");
      SaveMode("light")
      setChecked("checked")
      setbottomBg("bg-white min-h-screen w-full relative")
      setTopBg("bg-[#f5f7ff] h-[30vh] w-full absolute top-0 ")
      setTitle("text-[28px] sm:text-4xl font-bold")
    }
    else
    {
      setMode("dark");
      SaveMode("dark")
      setChecked()
      setbottomBg("bg-[#1e202a] min-h-screen w-full relative")
      setTopBg("bg-[#1f212e] h-[30vh] w-full absolute top-0 ")
      setTitle("text-white text-[28px] sm:text-4xl font-bold")
    }
  };

  return (
    <>
      {/* Background */}
      <div className="fixed  inset-0 -z-10">
        <div className={bottomBg}>
          <div className={topBg}></div>
        </div>
      </div>





    <div className="w-screen min-h-screen flex flex-col items-center z-20">

      <div className="flex flex-col sm:flex-row sm:items-center w-[90%] sm:w-[80%] justify-between mt-10">
        <div>
          <h1 className={title}>Social Media Dashboard</h1>
          <h6 className="text-gray-400 font-semibold">Total Followers: <span className="">{total}</span></h6>
          <div className="block sm:hidden w-full h-[1px] my-5 bg-gray-400"></div>

        </div>

        <label className="inline-flex items-center cursor-pointer w-full sm:w-[40%]">
        <div className=" flex flex-row justify-between self-center sm:place-content-end w-full ">
        <span className="text-gray-400 hover:text-white me-3 font-bold">Dark Mode</span>

          <input type="checkbox" value="" checked={checked} className="sr-only peer sm:justify-slef-end" />
          <div onClick={Toggle}
            className={mode === "dark" ?  "relative w-11 h-6 rounded-full bg-gradient-to-r from-[#378fe6] to-[#3eda82] transition-all before:absolute before:top-[2px] before:start-[2px] before:h-5 before:w-5 before:rounded-full before:border before:border-gray-300 before:bg-[#1f212e] peer-checked:before:bg-white peer-checked:before:translate-x-full peer-checked:bg-gray-400  rtl:peer-checked:before:translate-x-0" :  "relative w-11 h-6 rounded-full hover:bg-gradient-to-r from-[#378fe6] to-[#3eda82]  transition-all before:absolute before:top-[2px] before:start-[2px] before:h-5 before:w-5   before:rounded-full before:border before:border-gray-300 before:bg-[#1f212e]  peer-checked:before:bg-white peer-checked:before:translate-x-full   peer-checked:bg-gray-400 bg-white rtl:peer-checked:before:translate-x-0" }>
             </div>

          </div>

        </label>
      </div>

      <div className="relative flex flex-col items-center w-full sm:w-[80%]">
        {mode === "dark" ? <Darkcard /> : <Lightmode />}
      </div>


      </div>
    </>
  );
}

export default App;
