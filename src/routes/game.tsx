const Game = () => {
    return (
        <main class="flex h-screen flex-col items-center justify-center bg-black-400 text-gray-400">
            <section class="flex h-screen w-full flex-col items-center justify-center sm:w-[60%] md:h-[70vh] lg:w-[40%]">
                <section class="mx-auto mb-10 flex w-[85%] items-center justify-between py-4">
                    <article class="flex gap-2">
                        <img src="/assets/icon-x-a59e88e5.svg" alt="icon-o" class="h-7 w-7" />
                        <img src="/assets/icon-o-7e375642.svg" alt="icon-x" class="h-7 w-7" />
                    </article>
                    <div class="bg-black-500 rounded-[0.2rem] pb-[0.2rem]">
                        <button class="flex cursor-default  gap-2 rounded-[0.2rem] bg-black-300 px-3 py-3 uppercase text-black-400">
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
                            <span class="block text-sm text-gray-400">TURN</span>
                        </button>
                    </div>
                    <div class="rounded-md bg-gray-500 pb-1">
                        <button class="cursor-default rounded-md  bg-gray-400 px-3 py-3 pb-2 uppercase text-black-400">
                            <img src="/assets/icon-restart-f09e91f1.svg" alt="" class="w-4" />
                        </button>
                    </div>
                </section>
                <section class="mx-auto mb-10 grid w-[90%] grid-cols-3 gap-5">
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="X">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3  py-6 uppercase text-black-400">
                            <img src="/assets/icon-x-a59e88e5.svg" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="O">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3 py-6 uppercase text-black-400">
                            <img src="/assets/icon-o-7e375642.svg" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="X">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3 py-6 uppercase text-black-400">
                            <img src="/assets/icon-x-a59e88e5.svg" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3 py-6 uppercase text-black-400">
                            <img src="" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="X">
                        <button class="h-full w-full cursor-default rounded-md bg-black-300 px-3 py-6 uppercase text-black-400">
                            <img src="/assets/icon-x-a59e88e5.svg" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="O">
                        <button class="h-full w-full cursor-default rounded-md bg-black-300 px-3 py-6 uppercase text-black-400">
                            <img src="/assets/icon-o-7e375642.svg" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3 py-6 uppercase text-black-400">
                            <img src="" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3  py-6 uppercase text-black-400">
                            <img src="" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
                    <div class="bg-black-500 h-[99px] w-full rounded-md pb-2" data-value="">
                        <button class="h-full w-full  cursor-default rounded-md bg-black-300 px-3  py-6 uppercase text-black-400">
                            <img src="" alt="" class="mx-auto w-11" />
                        </button>
                    </div>
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
