import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./containers/Home.jsx";
import { HomeClass } from "./containers/HomeClass.jsx";
import { About } from "./containers/About.jsx";
import { TimerClass } from "./containers/TimerClass.jsx";
import { FormClassPage } from "./containers/FormClassPage.jsx";
import { SearchPage } from "./containers/SearchPage/SearchPage.jsx";
export const App = (props) => {
  console.log(props);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/class" element={<HomeClass />}></Route>
        <Route path="/timer" element={<TimerClass />}></Route>
        <Route path="/formclasspage" element={<FormClassPage />}></Route>
        <Route
          path="/hook-search-logic-inside"
          element={<SearchPage />}
        ></Route>
        <Route
          path="/hook-search-logic-outside"
          element={<SearchPage />}
        ></Route>
      </Route>
    </Routes>
  );
};
