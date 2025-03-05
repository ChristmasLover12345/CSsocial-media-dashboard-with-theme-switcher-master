
import { useState } from 'react'
import './App.css'

function App() {
  const [bottomBg, setbottomBg] = useState('bg-[#1e202a] h-full w-full -z-10 relative')
  const [topBg, setTopBg] = useState('bg-[#1f212e] h-[30%] w-full absolute top-0 ')


  return (
    <>
     <div className='w-screen h-screen flex flex-col relative'>
      {/* Background */}
      <div className={bottomBg}>
        <div className={topBg}> 
        </div>
      </div>


      

     </div>
    </>
  )
}

export default App
