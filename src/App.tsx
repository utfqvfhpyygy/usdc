import { Navigate, Route, Routes } from "react-router-dom";
import WebPage from "./pages/WebPage";
import H5Page from "./pages/H5Page";
import HomeRedirect from "./pages/HomeRedirect";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/web" element={<WebPage />} />
      <Route path="/h5" element={<H5Page />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
