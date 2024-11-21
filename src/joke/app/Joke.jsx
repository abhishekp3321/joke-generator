import React, { useState } from 'react'
import axios from 'axios'
import { addFavorite } from '../Jokeslice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Joke = () => {
  const [jokes, setJokes] = useState([])  
  const [randJoke, setRandJoke] = useState(null)
  const dispatch = useDispatch();

  const generateJoke = async () => {
    try {
      const response = await axios.get('http://localhost:4000/jokes')
      setJokes(response.data)  
      const randomIndex = Math.floor(Math.random() * response.data.length)
      setRandJoke(response.data[randomIndex]) 
    } catch (err) {
      console.error('Error fetching jokes:', err)
    }
  }

  

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="space-y-8 p-8 rounded-lg bg-gray-900 max-w-md w-full shadow-lg">
        <div className='justify-center flex'>
          <img src="https://img.icons8.com/?size=100&id=qdUJEVF6YIt4&format=png&color=000000" alt="not" />
        </div>

        <h1 className="text-3xl font-semibold text-center text-white">Random Joke Generator</h1>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-lg italic text-center text-white">
          {randJoke ? <p>{randJoke.joke}</p> : <p>Click the button to get a joke!</p>}
        </div>
        
        <button
          onClick={generateJoke} 
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          Click Here
        </button>
        <button onClick={()=>{
          dispatch(addFavorite(randJoke))
          console.log("faorites:",randJoke)
        }}className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
        > add to favorites </button>
<div>
        <Link to={'/fav'}>
         <button
      
          className="w-full bg-green-600 text-white py-2  rounded-md hover:bg-green-700 transition duration-200"
        >
          my favorites
        </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Joke
