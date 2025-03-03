import { type JSXElement, Suspense, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { GameProvider } from "~/contexts/game_context";
import { ModalProvider } from "~/contexts/modal_context";

import GameModal from "~/components/GameModal";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Layout = (props: { children: JSXElement }) => {
    return (
        <Suspense>
            <ModalProvider>
                <GameProvider>
                    <div class="flex h-screen min-h-screen w-full flex-col justify-between bg-black-400 text-gray-400">
                        <div class="h-full w-full">
                            <Header />
                        </div>
                        <main class="h-full w-full">
                            <GameModal />
                            {props.children}
                        </main>
                        <div class="h-full w-full">
                            <Footer />
                        </div>
                    </div>
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
            <Route path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="*404" component={NotFound} />
        </Router>
    );
};

export default App;
