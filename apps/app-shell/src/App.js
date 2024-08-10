import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";

const MicroFrontend1App = React.lazy(() => import("microfrontend1/App"));

const SubComponent = () => {
  return <h1>App 1</h1>;
};

export function App() {
  return (
    <div>
      <h1>App-Shell</h1>
      <Suspense>
        <BrowserRouter basename="/omg">
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route path="microfrontend1/*" element={<MicroFrontend1App />} />
              <Route path="test" element={<SubComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
