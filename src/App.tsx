import { Routes,Route } from "react-router"
import TermsPage from "./pages/TermsPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductDetailPages from "./pages/ProductDetailPages"
import ProductListPage from "./pages/ProductListPage"
import FormPage from "./pages/FormPage"
import RHFPage from "./pages/RHFPage"
import EmployePage from "./pages/EmployePage"



//component
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/terms"  element={<TermsPage/>}/>
      <Route path="/product-list" element={<ProductListPage/>}/>
      <Route path="/product/:productSlug" element={<ProductDetailPages/>}/>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="/rhf" element={ <RHFPage/>}/>
      <Route path="employe" element={<EmployePage/>}/>
      <Route path="*"  element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
