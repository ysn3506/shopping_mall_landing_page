import React, { useEffect, useRef } from "react";
import "./App.scss";
import Header from "./components/header";
import loader from "./utils/loader";
import Home from "./views/home";
import ErrorView from "./views/error";
import ErrorBoundary from "./components/error-boundary";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BrandView from "./views/brands";
import PlanYourVisitView from "./views/plan-your-visit";
import { useSelector } from "react-redux";
import LoadingView from "./views/loading-view/loading-view";
import { store } from "./storage/store";
import { setLoadingStatus } from "./storage/redux/actions";

function App() {
  const appRef = useRef(false);
  const {loading, error} = useSelector(state => state.reducer);
  console.log(loading)

  useEffect(() => {
    if (appRef.current) return;
    appRef.current = true;
    store.dispatch(setLoadingStatus(true));
    loader().then(() => {
      store.dispatch(setLoadingStatus(false))
    })
  }, []);


  return (
    <div className="App">
      {error && <ErrorView/>}
      {loading ? 
        <LoadingView />
      : 
        <>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                exact
                path="/brands"
                element={
                  <ErrorBoundary>
                    <BrandView />
                  </ErrorBoundary>
                }
              />
              <Route
                exact
                path="/plan-your-visit"
                element={
                  <ErrorBoundary>
                    <PlanYourVisitView />
                  </ErrorBoundary>
                }
              />
              <Route exact path="/home" element={<Navigate to="/" />} />
              <Route path="*" element={<ErrorView />} />
            </Routes>
          </BrowserRouter>
        </>
      }
    </div>
  );
}

export default App;
