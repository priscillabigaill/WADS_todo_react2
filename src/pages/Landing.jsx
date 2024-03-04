import { Link } from "react-router-dom";
import React from 'react';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center p-11 bg-white rounded-lg">
        <div>
          <h1 className="text-purple-900 text-2xl font-semibold mb-3">Welcome to your to-do list! ⸜(｡˃ ᵕ ˂ )⸝♡</h1>
        </div>
        <div>
          <Link to="/todo">
            <button className="bg-yellow-300 hover:bg-yellow-200 text-yellow-800 font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-500 rounded mt-3">Go to Todo List</button>
          </Link>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 p-4 text-sky-900 font-bold">
          <h3>Priscilla Abigail Munthe - 2602109883</h3>
      </div>
    </div>
  );
}  