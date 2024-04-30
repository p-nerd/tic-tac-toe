import "./app.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { GameProvider } from "~/contexts/game_context";
import { ModalProvider } from "./contexts/modal_context";

import GameModal from "./components/modals/GameModal";

const App = () => {
    return (
        <Router
            root={props => (
                <>
                    <Suspense>
                        <ModalProvider>
                            <GameProvider>
                                <GameModal />
                                {props.children}
                            </GameProvider>
                        </ModalProvider>
                    </Suspense>
                </>
            )}
        >
            <FileRoutes />
        </Router>
    );
};

export default App;
