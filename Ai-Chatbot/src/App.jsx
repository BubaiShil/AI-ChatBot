import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import main from './Components/AIservice'
import './App.css'

function App() {


  const [response, setResponse] = useState('')
  const [promt, setPromt] = useState('')


  const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const res = await main(promt)
        setResponse(res)
      } catch (error) {
        throw new Error("error");
        
      }
      setPromt('')
  }

  

  return (
    <>
      {/* <div className='h-[100%] w-[100%] top-0 fixed bg-black z-99'></div> */}
      <div className="flex h-screen items-center justify-center bg-gray-200">
        
        <div className="flex flex-col w-full max-w-4xl h-[90vh] bg-white shadow-2xl rounded-lg overflow-hidden">
          
          <div className="flex items-center justify-between p-6 bg-[#6609bd] text-white">
            <h1 className="text-xl font-semibold">AI ChatApp</h1>
            <span className="text-sm">Online</span>
          </div>

          
          <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-gray-100">
            
            <div className="flex justify-end">
              <div className="bg-[#6609bd] text-white rounded-lg p-4 max-w-3xl">
                Hi there! How can I assist you today?
              </div>
            </div>

            
            <div className="flex justify-start">
              <div className="bg-gray-300 text-gray-800 rounded-lg p-4">
                {response ? <h3>{response}</h3> : <p>Type something to get a response</p> }
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-6 bg-gray-200 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type a message..."
              value={promt}
              onChange={(e)=>setPromt(e.target.value)}
              className="flex-grow p-4 border border-[#9658d1] rounded-lg outline-none focus:border-[#6609bd]"
            />
            <button onClick={handleSubmit} className="ml-4 bg-[#6609bd] text-white px-6 py-3 rounded-lg hover:bg-[#9658d1]">
              Send
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
