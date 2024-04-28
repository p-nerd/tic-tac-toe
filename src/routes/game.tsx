import iconX from "~/assets/icon-x.svg";
import iconO from "~/assets/icon-o.svg";
import iconRestart from "~/assets/icon-restart.svg";

import { For, Show } from "solid-js";

type TBoxType = "x" | "o";

const Box = (p: { type: TBoxType }) => {
    return (
        <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="X">
            <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3  py-6 uppercase text-black-400">
                <img src={p.type === "x" ? iconX : iconO} alt="" class="mx-auto w-11" />
            </button>
        </div>
    );
};

const Game = () => {
    const borad: TBoxType[] = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
    const turn: any = "o";

    return (
        <main class="flex h-screen flex-col items-center justify-center bg-black-400 text-gray-400">
            <section class="flex h-screen w-full flex-col items-center justify-center sm:w-[60%] md:h-[70vh] lg:w-[40%]">
                <section class="mx-auto mb-10 flex w-[85%] items-center justify-between py-4">
                    <article class="flex gap-2">
                        <img src={iconO} alt="icon-o" class="h-7 w-7" />
                        <img src={iconX} alt="icon-x" class="h-7 w-7" />
                    </article>
                    <div class="bg-black-500 rounded-[0.2rem] pb-[0.2rem]">
                        <button class="flex cursor-default  gap-2 rounded-[0.2rem] bg-black-300 px-3 py-3 uppercase text-black-400">
                            <Show when={turn === "o"}>
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
                            <Show when={turn === "x"}>
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
                    <div class="rounded-md bg-gray-500 pb-1">
                        <button class="cursor-default rounded-md  bg-gray-400 px-3 py-3 pb-2 uppercase text-black-400">
                            <img src={iconRestart} alt="" class="w-4" />
                        </button>
                    </div>
                </section>
                <section class="mx-auto mb-10 grid w-[90%] grid-cols-3 gap-5">
                    <For each={borad}>{b => <Box type={b} />}</For>
                </section>
                <section class="mx-auto grid w-[90%] grid-cols-3 gap-5">
                    <button class="cursor-default rounded-lg  bg-blue-400  px-7 py-3 uppercase text-black-400">
                        <span class="block text-xs uppercase">x (p2)</span>
                        <span class="block font-bold">0</span>
                    </button>
                    <button class="cursor-default rounded-lg  bg-gray-400  px-7 py-3 uppercase text-black-400">
                        <span class="block text-xs uppercase">ties</span>
                        <span class="block font-bold">0</span>
                    </button>
                    <button class="cursor-default rounded-lg  bg-yellow-400  px-7 py-3 uppercase text-black-400">
                        <span class="block text-xs uppercase">o (p1)</span>
                        <span class="block font-bold">0</span>
                    </button>
                </section>
            </section>
        </main>
    );
};

export default Game;
