import "./App.scss";
import "animate.css";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateApiContext } from "./componenst/pages/api/constext";
import Route1 from "./Route1";
import Landing from "./componenst/pages/landing/landing";
import Calc from "./componenst/pages/calc/Calc";
import HomeSpace from "./componenst/pages/space/Home";
import { SpaceContextProvider } from "../src/componenst/pages/space/SpaceContext";
import Destination from "./componenst/pages/space/Destination";
import Crew from "./componenst/pages/space/Crew";
import Technology from "./componenst/pages/space/Technology";
import MainApi from "../src/componenst/pages/api/MainApi";
import Details from "./componenst/pages/api/details";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CreateApiContext>
        <SpaceContextProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Route1 />} />
              <Route path="/pages/landing" element={<Landing />} />
              <Route path="/pages/calc" element={<Calc />} />
              <Route element={<HomeSpace />} path="/pages/space/home" />
              <Route
                element={<Destination />}
                path="/pages/space/destination"
              />
              <Route element={<Crew />} path="/pages/space/crew" />
              <Route element={<Technology />} path="/pages/space/technology" />
              <Route path="/pages/api/" element={<MainApi />} />
              <Route path="/pages/api/name/:fds" element={<Details />} />
            </Routes>
          </HashRouter>
        </SpaceContextProvider>
      </CreateApiContext>
    </QueryClientProvider>
  );
}

export default App;
