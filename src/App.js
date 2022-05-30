import "./App.css";
import Homepage from "./Homepage/Homepage";
import Recommendation from "./Recommendation/Recommendation";
import Tour from "./Tour/Tour";
import Review from "./ReviewSection/Review";
import Blogs from "./Blogs/Blogs";
import Subscription from "./Subscription/Subscription";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Homepage />
      <Recommendation />
      <Tour />
      <Review />
      <Blogs />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
