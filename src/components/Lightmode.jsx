import React from 'react'

const Lightmode = () => {
  return (
    
    <>
            {/* These are the top cards */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between w-full mt-[3.75rem] mb-4">

        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#198ff5] bg-[#f0f2fa] hover:bg-[#E1E3F0] flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
            <span className="text-[#63687e] ms-2"> @nathanf</span>
          </div>

          <h1 className="text-[#1e202a] text-[60px] font-bold mb-0 p-0">1987</h1>
          <h1 className="text-[#63687e] font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">12 Today</h3>
          </div>
        </div>


        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#1ca0f2] bg-[#f0f2fa] hover:bg-[#E1E3F0] flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-twitter.svg" alt="twitter logo" />
            <span className="text-[#63687e] ms-2"> @nathanf</span>
          </div>

          <h1 className="text-[#1e202a] text-[60px] font-bold mb-0 p-0">1044</h1>
          <h1 className="text-[#63687e] font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">99 Today</h3>
          </div>
        </div>

        {/* Sorry if this one looks weird, couldnt find a way to make the border gradient so i had to wrap it around another div and give that one the gradient background */}
        <div className="sm:w-[269px] w-[90%] h-[250px] rounded-md bg-gradient-to-r relative from-[#fdc468] to-[#df4996] sm:mb-0 mb-4">
        <div className="h-[247px] sm:w-[270px] w-[100%] bg-[#f0f2fa] hover:bg-[#E1E3F0] flex flex-col items-center rounded-md absolute bottom-0">
          <div className="flex mt-7">
            <img src="../../images/icon-instagram.svg" alt="instagram logo" />
            <span className="text-[#63687e] ms-2"> @realnathanf</span>
          </div>

          <h1 className="text-[#1e202a] text-[60px] font-bold mb-0 p-0">11k</h1>
          <h1 className="text-[#63687e] font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">1099 Today</h3>
          </div>
        </div>
        </div>


        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#c4032a] bg-[#f0f2fa] hover:bg-[#E1E3F0] flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-youtube.svg" alt="twitter logo" />
            <span className="text-[#63687e] ms-2"> @nathanf</span>
          </div>

          <h1 className="text-[#1e202a] text-[60px] font-bold mb-0 p-0">8239</h1>
          <h1 className="text-[#63687e] font-normal">S U B S C R I B E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-down.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#dc414c] font-medium ms-2">99 Today</h3>
          </div>
        </div>


        </div>

        {/* bottom cards tittle */}
        <div className="w-[90%] sm:w-full">
        <h1 className="text-[#1e202a] self-start text-3xl font-bold my-8">Overview - Today</h1>
        </div>
        {/* Bottom cards */}
        <div className="flex flex-col items-center sm:flex-row justify-between w-[90%] sm:w-full">

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-[#63687e] font-bold">Page Views</p>
          <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-[#1e202a] text-[36px] font-bold">87</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2 self-center">3%</h3>
          </div>
        </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-[#63687e] font-bold">Likes</p>
          <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-[#1e202a] text-[36px] font-bold">52</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-down.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#dc414c] font-medium ms-2 self-center">2%</h3>
          </div>
        </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full  mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-[#63687e] font-bold">Likes</p>
          <img src="../../images/icon-instagram.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-[#1e202a] text-[36px] font-bold">5462</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2 self-center">2257%</h3>
          </div>
        </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
          <p className="text-[#63687e] font-bold">Profile Views</p>
          <img src="../../images/icon-instagram.svg" alt="Facebook logo" />
        </div>

        <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
          <h1 className="text-[#1e202a] text-[36px] font-bold">52k</h1>
          <div className="flex mb-2">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2 self-center">1375%</h3>
          </div>
        </div>

        </div>


        </div>

        <div className="flex flex-col items-center sm:flex-row justify-between w-[90%] sm:w-full sm:mt-9">

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-[#63687e] font-bold">Retweets</p>
            <img src="../../images/icon-twitter.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-[#1e202a] text-[36px] font-bold">117</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-up.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#3eda82] font-medium ms-2 self-center">303%</h3>
            </div>
          </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-[#63687e] font-bold">Likes</p>
            <img src="../../images/icon-twitter.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-[#1e202a] text-[36px] font-bold">507</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-up.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#3eda82] font-medium ms-2 self-center">553%</h3>
            </div>
          </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-[#63687e] font-bold">Likes</p>
            <img src="../../images/icon-youtube.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-[#1e202a] text-[36px] font-bold">107</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-down.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#dc414c] font-medium ms-2 self-center">19%</h3>
            </div>
          </div>

        </div>

        <div className="h-[140px] sm:w-[270px] w-full mb-6 sm:mb-0 flex flex-col items-center bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md">

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6">
            <p className="text-[#63687e] font-bold">Total Views</p>
            <img src="../../images/icon-youtube.svg" alt="Facebook logo" />
          </div>

          <div className="flex w-[85%] justify-between sm:w-[75%] mt-6 items-end">
            <h1 className="text-[#1e202a] text-[36px] font-bold">1407</h1>
            <div className="flex mb-2">
              <img
                className="w-[10px] h-[5px] self-center"
                src="../../images/icon-down.svg"
                alt="a green arrow pointing up"
              />
              <h3 className="text-[#dc414c] font-medium ms-2 self-center">12%</h3>
            </div>
          </div>

        </div>


        </div>

    </>

  )
}

export default Lightmode