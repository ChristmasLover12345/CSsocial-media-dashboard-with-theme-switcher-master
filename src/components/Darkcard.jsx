import React from "react";

const Darkcard = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between w-full mt-[3.75rem]">

        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#198ff5] bg-[#252a41] hover:bg-[#384063] flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-facebook.svg" alt="Facebook logo" />
            <span className="text-gray-400 ms-2"> @nathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">1987</h1>
          <h1 className="text-gray-400 font-normal">F O L L O W E R S</h1>

          <div className="flex mt-6">
            <img
              className="w-[10px] h-[5px] self-center"
              src="../../images/icon-up.svg"
              alt="a green arrow pointing up"
            />
            <h3 className="text-[#3eda82] font-medium ms-2">12 Today</h3>
          </div>
        </div>


        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#1ca0f2] bg-[#252a41] hover:bg-[#384063] flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-twitter.svg" alt="twitter logo" />
            <span className="text-gray-400 ms-2"> @nathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">1044</h1>
          <h1 className="text-gray-400 font-normal">F O L L O W E R S</h1>

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
        <div className="h-[247px] sm:w-[270px] w-[100%] bg-[#252a41] hover:bg-[#384063] flex flex-col items-center rounded-md absolute bottom-0">
          <div className="flex mt-7">
            <img src="../../images/icon-instagram.svg" alt="instagram logo" />
            <span className="text-gray-400 ms-2"> @realnathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">11k</h1>
          <h1 className="text-gray-400 font-normal">F O L L O W E R S</h1>

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

        
        <div className="h-[250px] sm:w-[270px] w-[90%] border-t-4 border-[#c4032a] bg-[#252a41] hover:bg-[#384063] flex flex-col items-center rounded-md sm:mb-0 mb-4">
          <div className="flex mt-7">
            <img src="../../images/icon-youtube.svg" alt="twitter logo" />
            <span className="text-gray-400 ms-2"> @nathanf</span>
          </div>

          <h1 className="text-white text-[60px] font-bold mb-0 p-0">8239</h1>
          <h1 className="text-gray-400 font-normal">S U B S C R I B E R S</h1>

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
    </>
  );
};

export default Darkcard;
