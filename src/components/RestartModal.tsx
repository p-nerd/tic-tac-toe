const Modal = () => {
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

export default Modal;
