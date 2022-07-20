import React from "react";

import Header from "../components/Header";
import AllAssets from "../components/TableAssets/AllAssets";
import MyAssets from "../components/TableAssets/MyAssets";

function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main className="flex justify-center">
        <div className="space-y-3 mb-10 w-[calc(100vw-3rem)] lg:w-[50rem]">
          <MyAssets />
          <AllAssets />
        </div>
      </main>
    </div>
  );
}

export default Home;
