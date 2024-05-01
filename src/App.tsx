import "./app.css";

import { JSXElement, Suspense } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { GameProvider } from "~/contexts/game_context";
import { ModalProvider } from "~/contexts/modal_context";

import GameModal from "~/components/GameModal";
import Game from "~/routes/game";
import Home from "~/routes";
import NotFound from "~/routes/[...404]";

const Providers = (props: { children: JSXElement }) => {
    return (
        <Suspense>
            <ModalProvider>
                <GameProvider>
                    <GameModal />
                    {props.children}
                </GameProvider>
            </ModalProvider>
        </Suspense>
    );
};

const App = () => {
    return (
        <Router root={Providers as any}>
            <Route path="/game" component={Game} />
            <Route path="/" component={Home} />
            <Route path="*404" component={NotFound} />
        </Router>
    );
};

export default App;
