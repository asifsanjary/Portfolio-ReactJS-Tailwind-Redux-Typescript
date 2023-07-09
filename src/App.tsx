import { Provider } from "react-redux";
import Employments from "./components/Employments/Employments";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects/Projects";
import ScrollTop from "./components/ScrollTop";
import Skills from "./components/Skills/Skills";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <div className="w-1/6"></div>
        <div className="w-4/6 flex flex-col">
          <Header />
          <Intro />
          <Projects />
          <Skills />
          <Employments />
          <Footer />
        </div>
        <div className="w-1/6 flex flex-col items-center">
          <ScrollTop />
        </div>
      </div>
    </Provider>
  );
}

export default App;
