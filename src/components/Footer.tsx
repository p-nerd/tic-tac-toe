const Footer = () => {
    return (
        <footer class="w-full bg-black-400 py-4 text-center text-sm text-gray-400 ">
            <div class="container mx-auto px-4">
                <p>
                    © {new Date().getFullYear()}{" "}
                    <a href="https://finnext.co" class="underline" target="_blank">
                        Finnext
                    </a>
                    . Created with ❤️ by{" "}
                    <a href="https://developershihab.com" class="underline" target="_blank">
                        Shihab Mahamud
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
