import { Suspense } from "react";
import DevelopmentSTack from "./components/DevelopmentSTack/DevelopmentSTack";
import Navbar from "./components/Navbar/Navbar";
import MainTechnologies from "./components/Technologies/MainTechnologies";
import type { ITechnologies } from "./types/types";
import Footer from "./Footer/Footer";

const technologiesData = async (): Promise<ITechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Navbar />
      <DevelopmentSTack />
      <Suspense fallback={<p>Loading....</p>}>
        <MainTechnologies technologiesData={technologiesData()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
