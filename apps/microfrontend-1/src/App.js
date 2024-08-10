import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const PageOne = React.lazy(() => import("./components/PageOne"));

function App() {
  return (
    <Suspense>
      <BrowserRouter basename="/microfrontend1">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="page" element={<PageOne />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
