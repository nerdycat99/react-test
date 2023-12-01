import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
//Initialize GA4
ReactGA.initialize("G-4SBJ4GDTJW");
ReactDOM.createRoot(entryPoint).render(
  <>
    <App />
  </>
);

const SendAnalytics = ()=> {
  // console.log("it ran.......")
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

reportWebVitals(SendAnalytics);
