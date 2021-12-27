import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./expenses";
import Invoices from "./invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />} />
        <Route path="expenses" element={<Expenses />} />
        
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
