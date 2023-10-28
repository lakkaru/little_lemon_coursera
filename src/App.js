import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import HomeMain from "./homePage/HomeMain";
import BookingMain from "./bookingPage/BookingMain";
import AboutSection from "./homePage/main/AboutSection";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <HomeMain /> */}
        <Route path="/" element={<HomeMain />} />
        <Route path="/reservation" element={<BookingMain />} />
        <Route path="about" element={<AboutSection />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
