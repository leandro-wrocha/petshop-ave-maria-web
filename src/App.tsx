import { useState } from "react";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  const [userSign] = useState(false);
  
  return <SignIn /> 
}

export default App
