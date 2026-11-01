import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import StudioBookings from "./pages/StudioBookings.jsx";
import KarizmaAlbums from "./pages/KarizmaAlbums.jsx";
import GiftingCorner from "./pages/GiftingCorner.jsx";
import CameraShop from "./pages/CameraShop.jsx";

const pageComponents = {
  home: Home,
  bookings: StudioBookings,
  albums: KarizmaAlbums,
  gifting: GiftingCorner,
  cameras: CameraShop,
};

function App() {
  const [activePage, setActivePage] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  function navigateTo(page) {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addToCart() {
    setCartCount((count) => count + 1);
  }

  const CurrentPage = pageComponents[activePage] ?? Home;

  return (
    <div className="min-h-screen bg-rice-white text-peshwa-purple">
      <Navbar
        activePage={activePage}
        cartCount={cartCount}
        onNavigate={navigateTo}
      />
      <main id="main-content">
        <CurrentPage onNavigate={navigateTo} onAddToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
