import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'> 
      <div className='text-center mb-8'>
        <h1 className='text-5xl text-gray-600'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>Upload Your Image AI Change You</p>
      </div>
      <Home />
      <div className='text-lg text-gray-500 mt-8'>
          &copy; by nicxx
      </div>
    </div>
  )
}

export default App
