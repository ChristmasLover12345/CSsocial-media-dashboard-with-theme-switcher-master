import React, { useEffect, useState } from "react";
import { FetchData } from "../Services/DataService";

const Darkcard = () => {
  const[facebook1, setFacebook1] = useState("")
  const[facebook2, setFacebook2] = useState("")
  const[facebook3, setFacebook3] = useState("")
  const[facebook4, setFacebook4] = useState("")
  const[facebook5, setFacebook5] = useState("")
  const[facebook6, setFacebook6] = useState("")

  const[twitter1, setTwitter1] = useState("")
  const[twitter2, setTwitter2] = useState("")
  const[twitter3, setTwitter3] = useState("")
  const[twitter4, setTwitter4] = useState("")
  const[twitter5, setTwitter5] = useState("")
  const[twitter6, setTwitter6] = useState("")

  const[instagram1, setInstagram1] = useState("")
  const[instagram2, setInstagram2] = useState("")
  const[instagram3, setInstagram3] = useState("")
  const[instagram4, setInstagram4] = useState("")
  const[instagram5, setInstagram5] = useState("")
  const[instagram6, setInstagram6] = useState("")

  const[youtube1, setYoutube1] = useState("")
  const[youtube2, setYoutube2] = useState("")
  const[youtube3, setYoutube3] = useState("")
  const[youtube4, setYoutube4] = useState("")
  const[youtube5, setYoutube5] = useState("")
  const[youtube6, setYoutube6] = useState("")
  


  useEffect( () => {

    const SetTheData = async () =>{
     const data = await FetchData()
    setFacebook1(data[0].facebook[0])
    setFacebook2(data[0].facebook[1])
    setFacebook3(data[0].facebook[2])
    setFacebook4(data[0].facebook[3])
    setFacebook5(data[0].facebook[4])
    setFacebook6(data[0].facebook[5])

    setTwitter1(data[0].twitter[0])
    setTwitter2(data[0].twitter[1])
    setTwitter3(data[0].twitter[2])
    setTwitter4(data[0].twitter[3])
    setTwitter5(data[0].twitter[4])
    setTwitter6(data[0].twitter[5])

    setInstagram1(data[0].instagram[0])
    setInstagram2(data[0].instagram[1])
    setInstagram3(data[0].instagram[2])
    setInstagram4(data[0].instagram[3])
    setInstagram5(data[0].instagram[4])
    setInstagram6(data[0].instagram[5])

    setYoutube1(data[0].youtube[0])
    setYoutube2(data[0].youtube[1])
    setYoutube3(data[0].youtube[2])
    setYoutube4(data[0].youtube[3])
    setYoutube5(data[0].youtube[4])
    setYoutube6(data[0].youtube[5]) 
    }

    
    SetTheData()

  },[])
 

  return (
    <>

      {/* These are the top cards */}
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-center justify-between w-full mt-[3.75rem] mb-4">

        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#198ff5] bg-[#252a41] hover:bg-[#384063] sm:justify-self-center flex flex-col items-center rounded-md lg:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
            <span className="text-gray-400 ms-2"> @nathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">{facebook1}</h1>
          <h1 className="text-gray-400 font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">{facebook4}</h3>
          </div>
        </div>


        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#1ca0f2] bg-[#252a41] hover:bg-[#384063] sm:justify-self-center flex flex-col items-center rounded-md lg:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-twitter.svg" alt="twitter logo" />
            <span className="text-gray-400 ms-2"> @nathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">{twitter1}</h1>
          <h1 className="text-gray-400 font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">{twitter4}</h3>
          </div>
        </div>

        {/* Sorry if this one looks weird, couldnt find a way to make the border gradient so i had to wrap it around another div and give that one the gradient background */}
        <div className="sm:w-[269px] w-[90%] h-[250px] rounded-md bg-gradient-to-r relative sm:justify-self-center from-[#fdc468] to-[#df4996] sm:mb-0 mb-4">
        <div className="h-[247px] sm:w-[270px] w-[100%] bg-[#252a41] hover:bg-[#384063] flex flex-col items-center rounded-md absolute bottom-0">
          <div className="flex mt-7">
            <img src="../../images/icon-instagram.svg" alt="instagram logo" />
            <span className="text-gray-400 ms-2"> @realnathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">{instagram1}</h1>
          <h1 className="text-gray-400 font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">{instagram4}</h3>
          </div>
        </div>
        </div>

        
        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#c4032a] bg-[#252a41] hover:bg-[#384063] sm:justify-self-center flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-youtube.svg" alt="twitter logo" />
            <span className="text-gray-400 ms-2"> @nathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">{youtube1}</h1>
          <h1 className="text-gray-400 font-normal">S U B S C R I B E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-down.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#dc414c] font-medium ms-2">{youtube4}</h3>
          </div>
        </div>


      </div>

      {/* bottom cards tittle */}
      <div className="w-[90%] sm:w-full">
      <h1 className="text-white self-start text-3xl font-bold my-8">Overview - Today</h1>
      </div>
      {/* Bottom cards */}
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between w-[90%] sm:w-full">

      <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-gray-400 font-bold">Page Views</p>
          <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-white text-[36px] font-bold">{facebook2}</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2 self-center">{facebook5}</h3>
          </div>
        </div>

      </div>

      <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-gray-400 font-bold">Likes</p>
          <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-white text-[36px] font-bold">{facebook3}</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-down.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#dc414c] font-medium ms-2 self-center">{facebook6}</h3>
          </div>
        </div>

      </div>

      <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-gray-400 font-bold">Likes</p>
          <img src="../../images/icon-instagram.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-white text-[36px] font-bold">{instagram2}</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2 self-center">{instagram5}</h3>
          </div>
        </div>

      </div>

      <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-gray-400 font-bold">Profile Views</p>
          <img src="../../images/icon-instagram.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-white text-[36px] font-bold">{instagram3}</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2 self-center">{instagram6}</h3>
          </div>
        </div>

      </div>


      </div>
      {/* Bottom cards second row */}
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between w-[90%] sm:w-full lg:mt-9">

        <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-gray-400 font-bold">Retweets</p>
            <img src="../../images/icon-twitter.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-white text-[36px] font-bold">{twitter2}</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-up.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#3eda82] font-medium ms-2 self-center">{twitter5}</h3>
            </div>
          </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-gray-400 font-bold">Likes</p>
            <img src="../../images/icon-twitter.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-white text-[36px] font-bold">{twitter3}</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-up.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#3eda82] font-medium ms-2 self-center">{twitter6}</h3>
            </div>
          </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-gray-400 font-bold">Likes</p>
            <img src="../../images/icon-youtube.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-white text-[36px] font-bold">{youtube2}</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-down.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#dc414c] font-medium ms-2 self-center">{youtube5}</h3>
            </div>
          </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full bg-[#252a41] mb-6 lg:mb-0 flex flex-col items-center hover:bg-[#384063] sm:justify-self-center rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-gray-400 font-bold">Total Views</p>
            <img src="../../images/icon-youtube.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-white text-[36px] font-bold">{youtube3}</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-down.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#dc414c] font-medium ms-2 self-center">{youtube6}</h3>
            </div>
          </div>

        </div>


      </div>

    </>
  );
};

export default Darkcard;
