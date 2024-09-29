import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="flex h-screen bg-gray-100 w-full">
  {/* Chat Window */}
  <div className="flex flex-col w-full h-full bg-white">
    {/* Chat Header */}
    <div className="flex items-center justify-between p-6 bg-[#6609bd] text-white">
      <h1 className="text-xl font-semibold">AI Chatbot</h1>
      <span className="text-sm">Online</span>
    </div>

    {/* Chat Messages Container */}
    <div className="flex-grow overflow-y-auto p-8 space-y-6">
      {/* Example User Message */}
      <div className="flex justify-end">
        <div className="bg-[#6609bd] text-white rounded-lg p-4 max-w-3xl">
          Hi there! How can I assist you today?
        </div>
      </div>

      {/* Example AI Response */}
      <div className="flex justify-start">
        <div className="bg-gray-300 text-gray-800 rounded-lg p-4">
          I need some help setting up my project.
        </div>
      </div>
    </div>

    {/* Chat Input */}
    <div className="flex items-center p-6 bg-gray-100 border-t border-gray-300">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-grow p-4 border border-[#9658d1] rounded-lg outline-none focus:border-[#6609bd]"
      />
      <button className="ml-4 bg-[#6609bd] text-white px-6 py-3 rounded-lg hover:bg-[#9658d1]">
        Send
      </button>
    </div>
  </div>
</div>


    </>
  )
}

export default App
