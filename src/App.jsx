import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Middle from "./pages/Middle";
import Footer from "./pages/Footer";
import MojsExample from "./components/MojsExample";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <MojsExample onComplete={() => setLoading(false)} />
      ) : (
        <div className="App">
          <Navbar />
          {/* <GoogleAuth /> */}
          <Middle />
          <Footer />
        </div>
      )
      }
    </>
  );
}

export default App;
