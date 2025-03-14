import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import ListingPage from "./pages/ListingPage/ListingPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<ListingPage />} />
      <Route path="details/:id" element={<DetailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default App;
