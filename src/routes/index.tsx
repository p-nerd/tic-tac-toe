import iconX from "~/assets/icon-x.svg";
import iconO from "~/assets/icon-o.svg";

import { createSignal } from "solid-js";
import { TTurn } from "~/contexts/game_context";
import { cn } from "~/libs/utils";
import { SelectOIcon, SelectXIcon } from "~/components/screens/home";

const PickFirstPlayerSymbol = () => {
    const [firstPlayerSymbol, setFirstPlayerSymbol] = createSignal<TTurn>("x");

    const buttonClass = (symbol: TTurn) =>
        cn("mx-auto flex w-1/2 items-center justify-center", {
            "ml-3 rounded-lg bg-gray-400 px-3 py-3": firstPlayerSymbol() === symbol,
        });

    return (
        <article class="w-[90%] rounded-lg bg-black-300 p-5 text-center">
            <h1 class="mb-5 text-lg font-bold">PICK PLAYER 1'S MARK</h1>
            <article class="mb-5 flex w-full rounded-lg bg-black-400 py-3">
                <button onClick={() => setFirstPlayerSymbol("x")} class={buttonClass("x")}>
                    <SelectXIcon active={firstPlayerSymbol() === "x"} />
                </button>
                <button onClick={() => setFirstPlayerSymbol("o")} class={buttonClass("o")}>
                    <SelectOIcon active={firstPlayerSymbol() === "o"} />
                </button>
            </article>
            <h3 class="text-gray-500">REMEMBER : X GOES FIRST</h3>
        </article>
    );
};

const StarButtons = () => {
    return (
        <article class="flex w-[90%] flex-col gap-3">
            <div class="w-full rounded-2xl bg-yellow-500 pb-2">
                <button class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400">
                    new game (vs cpu)
                </button>
            </div>
            <div class="w-full rounded-2xl bg-blue-500 pb-2">
                <button class="w-full cursor-default  rounded-2xl bg-blue-400 px-3 py-3 uppercase text-black-400">
                    new Game (vs player)
                </button>
            </div>
        </article>
    );
};

const Home = () => {
    return (
        <main class="flex h-screen flex-col items-center justify-center bg-black-400 text-gray-400">
            <section class="flex h-[70vh] w-full flex-col items-center justify-center gap-10 sm:w-[60%] lg:w-[40%]">
                <article class="flex gap-2">
                    <img src={iconX} alt="icon-o" class="h-16 w-16" />
                    <img src={iconO} alt="icon-x" class="h-16 w-16" />
                </article>
                <PickFirstPlayerSymbol />
                <StarButtons />
            </section>
        </main>
    );
};

export default Home;
