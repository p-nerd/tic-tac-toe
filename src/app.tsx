import "./app.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { GameProvider } from "~/contexts/game_context";

export default function App() {
    return (
        <Router
            root={props => (
                <>
                    <Suspense>
                        <GameProvider>{props.children}</GameProvider>
                    </Suspense>
                </>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
