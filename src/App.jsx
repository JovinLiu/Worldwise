//Feature from React
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

//Context和Routing
import { CityContextsProvier } from "./Contexts/CityContexts.jsx";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

//Original Pages
// import Homepage from "./pages/Homepage.jsx";
// import Product from "./pages/Product.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import Login from "./pages/Login.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
//build的file size
// dist/assets/index-DgVPZKA4.css   31.10 kB │ gzip:   5.21 kB
// dist/assets/index-Cb09AYuS.js   511.23 kB │ gzip: 147.25 kB

//Components
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

//Lazy Load Page
const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

function App() {
  return (
    <AuthProvider>
      <CityContextsProvier>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to={"cities"} />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CityContextsProvier>
    </AuthProvider>
  );
}

export default App;
