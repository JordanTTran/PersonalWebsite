import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Resume from './routes/resume';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);