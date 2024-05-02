const GoBack = (p: { onclick: () => void }) => {
    return (
        <div class="absolute left-2 top-2 flex px-4 pb-10 pt-8 lg:px-8">
            <button
                onclick={p.onclick}
                class="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
                <svg
                    viewBox="0 -9 3 24"
                    class="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                >
                    <path
                        d="M3 0L0 3L3 6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
                Go back
            </button>
        </div>
    );
};

export default GoBack;
