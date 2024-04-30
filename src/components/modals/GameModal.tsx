import { useNavigate } from "@solidjs/router";
import { Show } from "solid-js";
import { useGame } from "~/contexts/game_context";
import { useModal } from "~/contexts/modal_context";

export const Modal = () => {
    return (
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="fixed inset-0 h-full w-full bg-[black] opacity-40"></div>
            <div class="flex min-h-screen items-center py-8">
                <div class="relative mx-auto  w-full bg-black-300 px-4 py-7 shadow-lg md:py-12">
                    <div class="mx-auto mt-3 md:w-2/3">
                        <div class="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 class="text-center text-lg font-medium uppercase ">
                                restart game?
                            </h4>
                            <div class="mt-3 flex items-center justify-center gap-2">
                                <div class="w-auto rounded-2xl bg-gray-500 pb-2">
                                    <button class="w-full cursor-default  rounded-2xl bg-gray-400 px-3 py-3 uppercase text-black-400">
                                        no, cancel
                                    </button>
                                </div>
                                <div class="w-1/2 rounded-2xl bg-yellow-500 pb-2 lg:w-auto">
                                    <button class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400">
                                        yes, restart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Player2WinModal = () => {
    return (
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="fixed inset-0 h-full w-full bg-[black] opacity-40"></div>
            <div class="flex min-h-screen items-center py-8">
                <div class="relative mx-auto  w-full bg-black-300 px-4 py-7 shadow-lg md:py-12">
                    <div class="mx-auto mt-3 md:w-2/3">
                        <div class="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 class="text-center text-lg font-medium uppercase ">
                                player 2 wins!
                            </h4>
                            <p class="my-7 flex items-center justify-center gap-2 text-2xl uppercase ">
                                <img src="/assets/icon-o-7e375642.svg" alt="" class="w-7" />
                                <span class="block text-yellow-400">takes the round</span>
                            </p>
                            <div class="mt-3 flex items-center justify-center gap-2">
                                <div class="w-1/4 rounded-2xl bg-gray-500 pb-2 md:w-auto">
                                    <button class="w-full cursor-default  rounded-2xl bg-gray-400 px-3 py-3 uppercase text-black-400">
                                        quit
                                    </button>
                                </div>
                                <div class="w-1/2 rounded-2xl bg-yellow-500 pb-2 lg:w-auto">
                                    <button class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400">
                                        next round
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Player1WinModal = () => {
    return (
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="fixed inset-0 h-full w-full bg-[black] opacity-40"></div>
            <div class="flex min-h-screen items-center py-8">
                <div class="relative mx-auto  w-full bg-black-300 px-4 py-7 shadow-lg md:py-12">
                    <div class="mx-auto mt-3 md:w-2/3">
                        <div class="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 class="text-center text-lg font-medium uppercase ">
                                player 1 wins!
                            </h4>
                            <p class="my-7 flex items-center justify-center gap-2 text-2xl uppercase ">
                                <img src="/assets/icon-x-a59e88e5.svg" alt="" class="w-7" />
                                <span class="block text-blue-400">takes the round</span>
                            </p>
                            <div class="mt-3 flex items-center justify-center gap-2">
                                <div class="w-1/4 rounded-2xl bg-gray-500 pb-2 md:w-auto">
                                    <button class="w-full cursor-default  rounded-2xl bg-gray-400 px-3 py-3 uppercase text-black-400">
                                        quit
                                    </button>
                                </div>
                                <div class="w-1/2 rounded-2xl bg-yellow-500 pb-2 lg:w-auto">
                                    <button class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400">
                                        next round
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GameModal = () => {
    const { active, type, reset: modalReset, setActive } = useModal();
    const { reset: gameReset, nextRound } = useGame();
    const navigate = useNavigate();

    return (
        <Show when={active()}>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="fixed inset-0 h-full w-full bg-[black] opacity-40"></div>
                <div class="flex min-h-screen items-center py-8">
                    <div class="relative mx-auto  w-full bg-black-300 px-4 py-7 shadow-lg md:py-12">
                        <div class="mx-auto mt-3 md:w-2/3">
                            <div class="mt-2 text-center sm:ml-4 sm:text-left">
                                <Show when={type() === "tied"}>
                                    <h4 class="text-center text-lg font-medium uppercase text-[#a8bfc9]">
                                        round tied
                                    </h4>
                                </Show>
                                <div class="mt-3 flex items-center justify-center gap-2">
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
                                    <Show when={type() === "tied"}>
                                        <div class="w-1/2 rounded-2xl bg-yellow-500 pb-2 lg:w-auto">
                                            <button
                                                onclick={() => {
                                                    nextRound();
                                                    setActive(false);
                                                }}
                                                class="w-full cursor-default  rounded-2xl bg-yellow-400 px-3 py-3 uppercase text-black-400"
                                            >
                                                next round
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
