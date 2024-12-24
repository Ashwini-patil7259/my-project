import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center mt-80 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">

          <button
            onClick={() => setColor('red')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-600"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>

          <button
            onClick={() => setColor('green')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-600"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>

          <button
            onClick={() => setColor('blue')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-600"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor('purple')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-600"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor('brown')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-brown-600"
            style={{ backgroundColor: 'brown' }}
          >
            Brown
          </button>

          <button
            onClick={() => setColor('grey')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
            style={{ backgroundColor: 'grey' }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor('pink')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-pink-600"
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor('yellow')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor('olive')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-olive-600"
            style={{ backgroundColor: 'olive' }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor('lavender')}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-lavender-600"
            style={{ backgroundColor: 'lavender' }}
          >
            Lavender
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
