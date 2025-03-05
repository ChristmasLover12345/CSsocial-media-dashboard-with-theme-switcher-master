
import { useState } from 'react'
import './App.css'
import Test1 from './components/test1'
import Test2 from './components/test2'

function App() {
  const [bottomBg, setbottomBg] = useState('bg-[#1e202a] h-full w-full -z-10 relative')
  const [topBg, setTopBg] = useState('bg-[#1f212e] h-[30%] w-full absolute top-0 ')

  const [testing, setTesting] = useState(Test1)


  return (
    <>
     <div className='w-screen h-screen flex flex-col relative'>
      {/* Background */}
      <div className={bottomBg}>
        <div className={topBg}> 
        </div>
      </div>

      <div>
        {testing}
      </div>
      

     </div>
    </>
  )
}

export default App
