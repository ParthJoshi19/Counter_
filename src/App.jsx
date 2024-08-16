import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [anime, setAnime] = useState(false);
  const [maxCount,setmaxCount]=useState(0);
  const [minCount,setminCount]=useState(0);
  
  const handleAdd = () => {
    if (count === 150) {
      confirm("OOPS! You are at boundary, Please Click on '-' for Change");
    } else {
      trigger();
      setCount(count + 1);
      if(count>maxCount){
        setmaxCount(count);
      }
    }
  };
  const handleSub = () => {
    if (count === 0) {
      confirm("OOPS! You are at boundary, Please Click on '+' for Change");
    } else {
      trigger();
      setCount(count - 1);
      if(count<minCount){
        setminCount(count);
      }
    }
  };

  const trigger = () => {
    setAnime(true);
    setTimeout(() => setAnime(false), 300);
  };

  const handleUndo=()=>{
    if(count>minCount)
    setCount(count-1);
  }

  const handleRedo=()=>{

    if(count>0 && count<=maxCount)
    setCount(count+1);
    else if(count==0 && maxCount>1){
      setCount(count+1);
    }
  }

  const handleReset=()=>{
    setCount(0);
  }

  return (
    <div className="container flex justify-center items-center h-screen w-screen bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500">
      <div className="relative flex flex-col h-[90vh] border-4 border-white w-[80vw] items-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl p-10">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 rounded-xl"></div>
        <div className="relative z-10 text-white text-[60px] mb-10">
          <div
            className={`h-[100px] border-4 mt-20 border-white flex items-center justify-center rounded-lg shadow-lg w-[300px] backdrop-blur-sm bg-opacity-50 bg-black ${
              anime ? "fader" : ""
            }`}
          >
            {count}
          </div>
        </div>
        <div className="flex w-[35vw] justify-between mt-20">
          <button
            onClick={handleSub}
            className="w-[70px] h-[70px] flex justify-center items-center font-extrabold text-3xl text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full border-4 border-red-700 shadow-lg transition-transform transform hover:scale-105 active:scale-95"
          >
            -
          </button>
          <button
            onClick={handleAdd}
            className="w-[70px] h-[70px] flex justify-center items-center font-extrabold text-3xl text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full border-4 border-blue-700 shadow-lg transition-transform transform hover:scale-105 active:scale-95"
          >
            +
          </button>
        </div>
        <div className="flex justify-between gap-16 mt-20">
          <button onClick={handleRedo} className="bg-green-500 z-10 relative hover:bg-green-600 text-white font-bold border-2 border-white py-2 px-4 rounded flex items-center">
            Redo
          </button>
          <button onClick={handleUndo} className="bg-blue-500 z-10 relative hover:bg-blue-600 text-white font-bold border-2 border-white py-2 px-4 rounded flex items-center">
            Undo
          </button>
        </div>
          <button onClick={handleReset} className="bg-red-500 mt-10 z-10 relative hover:bg-red-600 text-white border-2 border-white font-bold py-2 px-4 rounded flex items-center">Reset</button>
      </div>
    </div>
  );
}

export default App;
