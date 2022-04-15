import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, Button } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<h1>Cart</h1>} />

              <Route path="/product/:id" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
