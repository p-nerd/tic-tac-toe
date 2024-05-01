import iconX from "~/assets/icon-x.svg";
import iconO from "~/assets/icon-o.svg";

import { Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useGame } from "~/contexts/game_context";
import { useModal } from "~/contexts/modal_context";
import { cn } from "~/libs/utils";

const GameModal = () => {
    const navigate = useNavigate();

    const { active, type, reset: modalReset, setActive } = useModal();
    const { reset: gameReset, resetGame, firstPlayer, playerNames } = useGame();

    return (
        <Show when={active()}>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="fixed inset-0 h-full w-full bg-[black] opacity-40"></div>
                <div class="flex min-h-screen items-center py-8">
                    <div class="relative mx-auto  w-full bg-black-300 px-4 py-7 shadow-lg md:py-12">
                        <div class="mx-auto mt-3 md:w-2/3">
                            <div class="mt-2 text-center sm:ml-4 sm:text-left">
                                <h4 class="text-center text-lg font-medium uppercase text-[#a8bfc9]">
                                    <Show when={type() === "tied"}>round tied</Show>
                                    <Show when={type() === "restart"}>restart game?</Show>
                                    <Show when={type() === "xwin"}>
                                        {firstPlayer() === "x"
                                            ? playerNames().p1
                                            : playerNames().p2}{" "}
                                        wins!
                                    </Show>
                                    <Show when={type() === "owin"}>
                                        {firstPlayer() === "o"
                                            ? playerNames().p1
                                            : playerNames().p2}{" "}
                                        wins!
                                    </Show>
                                </h4>
                                <Show when={type() === "xwin" || type() === "owin"}>
                                    <p class="my-7 flex items-center justify-center gap-2 text-2xl uppercase ">
                                        <img
                                            src={type() === "xwin" ? iconX : iconO}
                                            alt=""
                                            class="w-7"
                                        />
                                        <span
                                            class={cn(
                                                "block",
                                                type() === "xwin"
                                                    ? "text-blue-400"
                                                    : "text-yellow-400",
                                            )}
                                        >
                                            takes the round
                                        </span>
                                    </p>
                                </Show>
                                <div class="mt-3 flex items-center justify-center gap-2">
                                    <Show
                                        when={
                                            type() === "tied" ||
                                            type() === "xwin" ||
                                            type() === "owin"
                                        }
                                    >
                                        <div class="w-1/4 rounded-2xl bg-gray-500 pb-2 md:w-auto">
                                            <button
                                                onclick={() => {
                                                    modalReset();
                                                    gameReset();
                                                    navigate("/", { replace: true });
                                                }}
                                                class="w-full cursor-default  rounded-2xl bg-gray-400 px-3 py-3 uppercase text-black-400"
                                            >
                                                quit
                                            </button>
                                        </div>
                                        <div class="w-1/2 rounded-2xl bg-yellow-500 pb-2 lg:w-auto">
                                            <button
                                                onclick={() => {
                                                    resetGame();
                                                    setActive(false);
                                                }}
                                                class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400"
                                            >
                                                next round
                                            </button>
                                        </div>
                                    </Show>
                                    <Show when={type() === "restart"}>
                                        <div class="w-auto rounded-2xl bg-gray-500 pb-2">
                                            <button
                                                onclick={() => modalReset()}
                                                class="w-full cursor-default  rounded-2xl bg-gray-400 px-3 py-3 uppercase text-black-400"
                                            >
                                                no, cancel
                                            </button>
                                        </div>
                                        <div
                                            onclick={() => {
                                                resetGame();
                                                setActive(false);
                                            }}
                                            class="w-1/2 rounded-2xl bg-yellow-500 pb-2 lg:w-auto"
                                        >
                                            <button class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400">
                                                yes, restart
                                            </button>
                                        </div>
                                    </Show>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    );
};

export default GameModal;
