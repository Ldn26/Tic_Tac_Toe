import { useRef, useState, useEffect } from "react";
import "./App.css";
import cirul from "./Assets/circle.png";
import cros from "./Assets/cross.png";

function App() {
  const [count, Setcount] = useState(0);
  const [isstarted, SetIsstarted] = useState(true);
  const [isValid, SetIsValid] = useState(true);
  let [data, setdata] = useState(["", "", "", "", "", "", "", "", ""]);
  let titelaRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const start = () => {
    SetIsstarted(false);
    data.forEach((el, index) => {
      data[index] = "";
    });
  };

  const replay = () => {
    data.map(() => "");
    SetIsValid(true);
    box1.current.innerHTML = "";
    box2.current.innerHTML = "";
    box3.current.innerHTML = "";
    box4.current.innerHTML = "";
    box5.current.innerHTML = "";
    box6.current.innerHTML = "";
    box7.current.innerHTML = "";
    box8.current.innerHTML = "";
    box9.current.innerHTML = "";
    SetIsstarted(true);
    titelaRef.current.innerHTML = "Enjoy With This React Game";
  };

  const won = (winner) => {
    SetIsValid(false);
    if (winner === "x") {
      titelaRef.current.innerHTML = `the winner is   <img src= '${cros}'  alt="cross"className = "cross" >`;
    } else if (winner === "o") {
      titelaRef.current.innerHTML = `the winner is   <img src= '${cirul}'  alt="cross" >`;
    } else if (winner === "draw") {
      titelaRef.current.innerHTML = `Opps We have equality `;
    }
  };

  const triger = (e, num) => {
    console.log(data);
    if (!isValid) {
      data.map(() => "");
      return 0;
    } else {
      if (count % 2 === 0) {
        e.target.innerHTML = `<img src= '${cros}'  alt="cross" >`;
        const newarray = [...data];
        newarray[num] = "x";
        setdata(newarray);
      } else {
        e.target.innerHTML = `<img src= '${cirul}' alt="circul" >`;
        const newarray = [...data];
        newarray[num] = "o";
        setdata(newarray);
      }
      Setcount(count + 1);
      checkwin();
    }
  };
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data.every((el) => el !== "")) {
      // la table est plein
      won("draw");
    }
  };

  useEffect(() => {
    if (count > 4) {
      checkwin();
    }
  }, [count]);

  return (
    <div className=" bg-sky-950 text-white h-screen  w-full font-bold  m-auto">
      <h1 className="text-center p-9 text-xl" ref={titelaRef}>
        Enjoy With This <span className="text-emerald-400">React Game </span>
      </h1>

      <div className="flex justify-around items-center mb-4">
        <button
          onClick={start}
          className={`border-2   border-emerald-400 py-1 px-3 hover:bg-emerald-400 transition duration-500 ease-out  rounded-full  ${
            isstarted ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Start{" "}
        </button>
        <button
          onClick={replay}
          className={`border-2   border-emerald-400 py-1 px-3 hover:bg-emerald-400 transition duration-500 ease-out  rounded-full  ${
            !isValid ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Replay{" "}
        </button>
      </div>
      <div
        className={`w-80 h-80  md:w-96 md:h-96 transition ease-out duration-1000 m-auto ${
          isstarted ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex justify-around  h-1/3 items-center ">
          <div
            ref={box1}
            onClick={(e) => {
              triger(e, 0);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
          <div
            ref={box2}
            onClick={(e) => {
              triger(e, 1);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
          <div
            ref={box3}
            onClick={(e) => {
              triger(e, 2);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
        </div>
        <div className="flex justify-around   h-1/3 items-center">
          <div
            ref={box4}
            onClick={(e) => {
              triger(e, 3);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center  w-full h-full"
          ></div>
          <div
            ref={box5}
            onClick={(e) => {
              triger(e, 4);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
          <div
            ref={box6}
            onClick={(e) => {
              triger(e, 5);
            }}
            className="b rounded-md bg-sky-300  bg-opacity-55 m-1   border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
        </div>
        <div className="flex justify-around  h-1/3 items-center">
          <div
            ref={box7}
            onClick={(e) => {
              triger(e, 6);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
          <div
            ref={box8}
            onClick={(e) => {
              triger(e, 7);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
          <div
            ref={box9}
            onClick={(e) => {
              triger(e, 8);
            }}
            className=" rounded-md bg-sky-300  bg-opacity-55 m-1    border-2 border-sky-950 cursor-pointer flex justify-center items-center w-full h-full"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
