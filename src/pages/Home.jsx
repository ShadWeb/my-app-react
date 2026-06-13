import React, { useEffect, useState } from "react";

function Home() {
  const [a, seta] = useState("shad");
  useEffect(() => {
    console.log(a);
    setTimeout(() => {
      seta("ShadWeb");
    }, 3000);
  }, [a]);

  return <div className="">{a}</div>;
}

export default Home;
