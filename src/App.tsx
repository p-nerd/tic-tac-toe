import { type JSXElement, Suspense, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { GameProvider } from "~/contexts/game_context";
import { ModalProvider } from "~/contexts/modal_context";

import GameModal from "~/components/GameModal";

const Layout = (props: { children: JSXElement }) => {
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

const Game = lazy(() => import("~/routes/game"));
const Home = lazy(() => import("~/routes/index"));
const NotFound = lazy(() => import("~/routes/[...404]"));

const App = () => {
    return (
        <Router root={Layout as any}>
            <Route path="/game" component={Game} />
            <Route path="/" component={Home} />
            <Route path="*404" component={NotFound} />
        </Router>
    );
};

export default App;
