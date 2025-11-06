// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Home } from "lucide-react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;
import Home from "./pages/home/index";

export default function App() {
  return (
    <div className="w-full h-screen bg-blue-300 flex items-center justify-center">
      <Home />
      <h1 className="text-4xl font-bold text-white">Tailwind funcionando 🎉</h1>
    </div>
  );
}
