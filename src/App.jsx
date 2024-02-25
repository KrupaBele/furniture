import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Italia from "./pages/Italia";
import Editions from "./pages/Editions";
import Account from "./pages/Account";
import SingleProduct from "./pages/SingleProduct";
import MultipleProducts from "./pages/MultipleProducts";

const App = () => {
  const [userToken, setUserToken] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              userToken={userToken}
              setUserToken={setUserToken}
              userName={userName}
              setUserName={setUserName}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/italia" element={<Italia />} />
          <Route path="/editions" element={<Editions />} />
          <Route path="/account" element={<Account />} />

          <Route
            path={`/:level1/:level2/:level3`}
            element={<MultipleProducts />}
          />
          <Route
            path={`/:level1/:level2/:level3/:level4`}
            element={<SingleProduct />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
