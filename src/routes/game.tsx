import iconX from "~/assets/icon-x.svg";
import iconO from "~/assets/icon-o.svg";
import iconRestart from "~/assets/icon-restart.svg";

import { For, Show, createEffect, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { type TSpot, useGame, TSymbol } from "~/contexts/game_context";
import { useModal } from "~/contexts/modal_context";
import { cn } from "~/libs/utils";

import GoBack from "~/components/GoBack";
import result from "~/algorithms/result";
import bot from "~/algorithms/bot";

const WhichTurn = () => {
    const { turn } = useGame();

    return (
        <div class="rounded-[0.2rem] bg-black-500 pb-[0.2rem]">
            <button class="flex cursor-default  gap-2 rounded-[0.2rem] bg-black-300 px-3 py-3 uppercase text-black-400">
                <Show when={turn() === "o"}>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16ZM9.48145 16C9.48145 12.3999 12.3999 9.48147 16 9.48147C19.6 9.48147 22.5185 12.3999 22.5185 16C22.5185 19.6001 19.6 22.5185 16 22.5185C12.3999 22.5185 9.48145 19.6001 9.48145 16Z"
                            stroke-width="2"
                            stroke="#1A2A33"
                            fill="#A8BFC9"
                        ></path>
                    </svg>
                </Show>
                <Show when={turn() === "x"}>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z"
                            stroke="#1A2A33"
                            stroke-width="2"
                            fill="#A8BFC9"
                        ></path>
                    </svg>
                </Show>
                <span class="block text-sm text-gray-400">TURN</span>
            </button>
        </div>
    );
};

const Restart = () => {
    const { setActive, setType } = useModal();
    return (
        <div class="rounded-md bg-gray-500 pb-1">
            <button
                onclick={() => {
                    setType("restart");
                    setActive(true);
                }}
                class="rounded-md  bg-gray-400 px-3 py-3 pb-2 uppercase text-black-400"
            >
                <img src={iconRestart} alt="" class="w-4" />
            </button>
        </div>
    );
};

const BoardBox = (p: { type: TSpot; onclick: () => void }) => {
    return (
        <div class="h-[99px] w-full rounded-md bg-black-500 pb-2">
            <button
                onclick={p.onclick}
                class="h-full w-full rounded-md bg-black-300 px-3  py-6 uppercase text-black-400"
            >
                <img
                    src={p.type === "x" ? iconX : p.type === "o" ? iconO : ""}
                    alt=""
                    class="mx-auto w-11"
                />
            </button>
        </div>
    );
};

const FooterBox = (p: { class: string; label: string; score: number }) => {
    return (
        <button class={cn("cursor-default rounded-lg px-7 py-3 uppercase text-black-400", p.class)}>
            <span class="block text-xs">{p.label}</span>
            <span class="block font-bold">{p.score}</span>
        </button>
    );
};

const Board = () => {
    const { board, setBoard, turn, setTurn, setScore, gameType, firstPlayer, diffeculty } =
        useGame();
    const { setActive, setType } = useModal();

    const takeTurn = (boardIndex: number): "game-over" | undefined => {
        if (typeof board()[boardIndex] !== "number") {
            return;
        }

        const bb = [...board()];
        bb[boardIndex] = turn();
        setBoard(bb);

        setTurn(turn() === "x" ? "o" : "x");

        switch (result(board())) {
            case "":
                return;
            case "t":
                setTimeout(() => {
                    setActive(true);
                    setType("tied");
                    setScore(prev => ({ ...prev, t: prev.t + 1 }));
                }, 500);
                return "game-over";
            case "x":
                setTimeout(() => {
                    setActive(true);
                    setType("xwin");
                    setScore(prev => ({ ...prev, x: prev.x + 1 }));
                }, 500);
                return "game-over";
            case "o":
                setTimeout(() => {
                    setActive(true);
                    setType("owin");
                    setScore(prev => ({ ...prev, o: prev.o + 1 }));
                }, 500);
                return "game-over";
        }
    };

    const botPlayer = (): TSymbol => {
        return firstPlayer() === "x" ? "o" : "x";
    };

    onMount(() => {
        if (gameType() === "bot" && firstPlayer() === "o") {
            takeTurn(Math.floor(Math.random() * board().length));
        }
    });

    return (
        <section class="mx-auto mb-10 grid w-[90%] grid-cols-3 gap-5">
            <For each={board()}>
                {(bb, index) => (
                    <BoardBox
                        type={bb}
                        onclick={() => {
                            if (takeTurn(index()) === "game-over") {
                                return;
                            }
                            if (gameType() === "bot") {
                                takeTurn(bot(board(), botPlayer(), diffeculty()));
                            }
                        }}
                    />
                )}
            </For>
        </section>
    );
};

const Game = () => {
    const navigate = useNavigate();

    const { reset, firstPlayer, score, playerNames, nextRound, diffeculty, setNextRound } =
        useGame();

    createEffect(() => {
        if (nextRound()) {
            setNextRound(false);
        }
    });

    return (
        <main class="flex min-h-screen flex-col items-center justify-center bg-black-400 text-gray-400">
            <GoBack
                onclick={() => {
                    reset();
                    navigate("/");
                }}
            />
            <section class="flex w-full flex-col items-center justify-center sm:w-[60%] md:h-[70vh] lg:w-[40%]">
                <section class="mx-auto mb-10 flex w-[85%] items-center justify-between py-4">
                    <article class="flex gap-2">
                        <img src={iconX} alt="icon-x" class="h-7 w-7" />
                        <img src={iconO} alt="icon-o" class="h-7 w-7" />
                    </article>
                    <WhichTurn />
                    <Restart />
                </section>
                <Show when={!nextRound()}>
                    <Board />
                </Show>
                <section class="mx-auto grid w-[90%] grid-cols-3 gap-5">
                    <FooterBox
                        class="bg-blue-400"
                        label={`x (${firstPlayer() === "x" ? playerNames().p1 : playerNames().p2})`}
                        score={score().x}
                    />
                    <FooterBox class="bg-gray-400" label="ties" score={score().t} />
                    <FooterBox
                        class="bg-yellow-400"
                        label={`o (${firstPlayer() === "o" ? playerNames().p1 : playerNames().p2})`}
                        score={score().o}
                    />
                </section>
                <section class="mx-auto mt-5 w-[90%] text-center">
                    The BOT Dificulty is "<span class="uppercase">{diffeculty()}</span>"
                </section>
            </section>
        </main>
    );
};

export default Game;
