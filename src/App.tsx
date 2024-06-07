import { BrowserRouter } from "react-router-dom";
import Content from "@/content";
import Navigation from "@/contexts/nav/navbar";

function App() {
  return (
    <BrowserRouter>
    
      <Navigation />
      <Content />

    </BrowserRouter>
  );
}

export default App;
