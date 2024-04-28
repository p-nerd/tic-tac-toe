import iconX from "~/assets/icon-x.svg";
import iconO from "~/assets/icon-o.svg";

const Home = () => {
    return (
        <main class="flex h-screen flex-col items-center justify-center bg-black-400 text-gray-400">
            <section class="flex h-[70vh] w-full flex-col items-center justify-center gap-10 sm:w-[60%] lg:w-[40%]">
                <article class="flex gap-2">
                    <img src={iconX} alt="icon-o" class="h-16 w-16" />
                    <img src={iconO} alt="icon-x" class="h-16 w-16" />
                </article>
                <article class="w-[90%] rounded-lg bg-black-300 p-5 text-center">
                    <h1 class="mb-5 text-lg font-bold">PICK PLAYER 1'S MARK</h1>
                    <article class="mb-5 flex w-full rounded-lg bg-black-400 py-3">
                        <button class="mx-auto ml-3 flex w-1/2 items-center justify-center rounded-lg bg-gray-400 px-3 py-3">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z"
                                    stroke="#A8BFC9"
                                    stroke-width="2"
                                    fill="#1A2A33"
                                ></path>
                            </svg>
                        </button>
                        <button class="false mx-auto flex w-1/2 items-center justify-center">
                            <svg
                                width="32"
                                height="32"
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
                        </button>
                    </article>
                    <h3 class="text-gray-500">REMEMBER : X GOES FIRST</h3>
                </article>
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
            </section>
        </main>
    );
};

export default Home;
