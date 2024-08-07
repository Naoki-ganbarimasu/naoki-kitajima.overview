'use client'

import Three from "./components/Three";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Active from "./components/Active";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 3秒後にローディングを解除

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> : <MainContent />}
    </div>
  );
};

const MainContent = () => {

  return (
    <main className="flex flex-col w-full h-screen">
    <div className="flex-grow">
      <Three />
    </div>
    <div className="flex-grow">
      <Profile />
    </div>
    <div>
      <Skills />
    </div>
    <div>
      <Works/>
    </div>
    <div>
      <Active/>
    </div>
  </main>
  );
}
export default App;
