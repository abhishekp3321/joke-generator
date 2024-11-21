import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const favorites = useSelector((state) => state.jokes?.favorites || []);
    console.log('fav',favorites)  
    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="space-y-8 p-8 rounded-lg bg-gray-900 max-w-md w-full shadow-lg">
                <div className="justify-center flex">
                    <img 
                        src="https://img.icons8.com/?size=100&id=qdUJEVF6YIt4&format=png&color=000000" 
                        alt="Favorites Icon" 
                    />
                </div>

                <h1 className="text-3xl font-semibold text-center text-white">Favorites</h1>

                <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-lg italic text-center text-white">
                    <ul className="space-y-4">
                            {favorites.map((favo) => (
                                <li key={favo.id} className="bg-gray-600 p-4 rounded-lg">
                                    <p className="text-white">{favo.joke}</p>
                                </li>
                            ))}
                      
                        
                    </ul>
                </div>

                <Link to="/joke">
                    <div className="mt-4 text-center text-blue-400 underline">
                    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200">

                        Go back to Jokes
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Favorites;