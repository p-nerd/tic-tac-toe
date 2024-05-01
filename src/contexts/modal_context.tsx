import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type TModalType = "tied" | "restart" | "xwin" | "owin";

const makeModalContext = () => {
    const defaultActive: boolean = false;
    const defaultType: TModalType = "tied";

    const [active, setActive] = createSignal<boolean>(defaultActive);
    const [type, setType] = createSignal<TModalType>(defaultType);

    const reset = () => {
        setActive(defaultActive);
        setType(defaultType);
    };

    return { active, setActive, type, setType, reset } as const;
};

type TModalContext = ReturnType<typeof makeModalContext>;
const ModalContext = createContext<TModalContext>();

export const ModalProvider = (p: { children: JSXElement }) => {
    return <ModalContext.Provider value={makeModalContext()}>{p.children}</ModalContext.Provider>;
};

export const useModal = (): TModalContext => {
    return useContext(ModalContext) as any;
};
