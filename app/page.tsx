"use client";
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
    }, 1500); // 1.5秒後にローディングを解除

    return () => clearTimeout(timer);
  }, []);

  return <div className="App">{loading ? <Loading /> : <MainContent />}</div>;
};

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex-grow">
        <Three />
      </div>
      <div className="flex-grow">
        <Profile />
      </div>
      <div className="flex-grow">
        <Skills />
      </div>
      <div className="flex-grow">
        <Works />
      </div>
      <div className="flex-grow">
        <Active />
      </div>
    </main>
  );
};

export default App;
