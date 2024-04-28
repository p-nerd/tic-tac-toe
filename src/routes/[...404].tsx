const NotFound = () => {
    return (
        <main class="flex h-screen flex-col items-center justify-center bg-black-400 text-gray-400">
            <div class="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
                <h1 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:pr-6 sm:text-3xl dark:text-slate-200 sm:dark:border-slate-300/10">
                    404
                </h1>
                <h2 class="mt-2 text-lg text-slate-700 sm:mt-0 dark:text-slate-400">
                    This page could not be found.
                </h2>
            </div>
        </main>
    );
};

export default NotFound;
