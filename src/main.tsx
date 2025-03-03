/* @refresh reload */
import { render } from "solid-js/web";
import { inject } from "@vercel/analytics";

import "~/main.css";
import App from "~/App";

inject();

const root = document.getElementById("root");

render(() => <App />, root!);
