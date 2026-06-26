/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Promo from "./pages/Promo";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Bundle from "./pages/Bundle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import HowToBuy from "./pages/HowToBuy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Categories from "./pages/Categories";

// Layout for customer-facing pages
function PrimaryLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function ProtectedRoute({ children, role }: { children: React.ReactNode, role?: 'admin' | 'customer' }) {
  const { currentUser, loading, isAdmin } = useAuth();

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  if (!currentUser) return <Navigate to="/login" replace />;

  if (role === 'admin' && !isAdmin) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="promo" element={<Promo />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="bundle" element={<Bundle />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="dashboard" element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            } />
            <Route path="about" element={<About />} />
            <Route path="categories" element={<Categories />} />
            <Route path="how-to-buy" element={<HowToBuy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="faq" element={<FAQ />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Layout (No Navbar/Footer) */}
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
