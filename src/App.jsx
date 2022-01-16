import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./containers/Home.jsx";
import { HomeClass } from "./containers/HomeClass.jsx";
import { About } from "./containers/About.jsx";
import { TimerClass } from "./containers/TimerClass.jsx";
import { FormClassPage } from "./containers/FormClassPage.jsx";
import { SearchPage } from "./containers/SearchPage/SearchPage.jsx";
import { NotFound } from "./containers/NotFound.jsx";
import { UseState } from "./containers/hooks/UseState.jsx";
import { UseEffect } from "./containers/hooks/UseEffect.jsx";
import { Contex } from "./containers/hooks/Context.jsx";
import { WithContex } from "./containers/hooks/WithContex.jsx";
import { UseLayoutEffect } from "./containers/hooks/UseLayoutEffect.jsx";
import { UseCallback } from "./containers/hooks/UseCallback.jsx";
import { UseImperativeHandle } from "./containers/hooks/UseImperativeHandle.jsx";
import { UseReducer } from "./containers/hooks/UseReducer.jsx";
import { UseCustomHook } from "./containers/hooks/UseCustomHook.jsx";
import { UseRouterHooks } from "./containers/hooks/UseRouterHooks.jsx";
import {Test} from './containers/Test'
export const App = (props) => {
  return (
    <Contex>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="class" element={<HomeClass />}></Route>
          <Route path="timer" element={<TimerClass />}></Route>
          <Route path="formclasspage" element={<FormClassPage />}></Route>
          <Route path="hook-search-logic-outside" element={<SearchPage />} ></Route>
          <Route path="test" element={<Test />} ></Route>
          <Route path="hooks">
            <Route path="useState" element={<UseState />}></Route>
            <Route path="useEffect" element={<UseEffect />} ></Route>
            <Route path="withContex" element={<WithContex />} ></Route>
            <Route path="useLayoutEffect" element={<UseLayoutEffect />} ></Route>
            <Route path="useCallback" element={<UseCallback />}></Route>
            <Route path="useImperativeHandle" element={<UseImperativeHandle />} ></Route>
            <Route path="useReducer" element={<UseReducer />} ></Route>
            <Route path="useCustomHook" element={<UseCustomHook />} ></Route>
            <Route path="useRouterHooks/:slug" element={<UseRouterHooks />} ></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Contex>);
};
// useState - Home.jsx
// useEffect useState - LogicTimer.jsx