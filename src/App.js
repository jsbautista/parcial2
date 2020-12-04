import React, { useState } from "react";
import Series from "./series";
function App() {
  const urlen="https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
  const urles="https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
  function Naveg() {
    return  navigator.userLanguage || navigator.language;
  }
  function url()
  {
    const a = Naveg();
  if(a === "en") {
    return urlen;
  } else {
    return urles;
  }
  }

  return (
    <Serie url={url()}/>
  );
}

export default App;