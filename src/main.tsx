/* @refresh reload */
import { render } from "solid-js/web";

import "./app.css";
import App from "./Appx";

const root = document.getElementById("root");

render(() => <App />, root!);
