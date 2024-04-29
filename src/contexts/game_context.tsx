import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type TTurn = "x" | "o";
export type TBoardItem = TTurn | "";

const makeGameContext = () => {
    const [board, setBoard] = createSignal<TBoardItem[]>([...Array(9).map(() => "" as TBoardItem)]);
    const [turn, setTurn] = createSignal<TTurn>("x");
    const [firstPlayer, setFirstPlayer] = createSignal<TTurn>("x");

    return { board, setBoard, turn, setTurn, firstPlayer, setFirstPlayer } as const;
};

type TGameContext = ReturnType<typeof makeGameContext>;
const GameContext = createContext<TGameContext>();

export const GameProvider = (p: { children: JSXElement }) => {
    return <GameContext.Provider value={makeGameContext()}>{p.children}</GameContext.Provider>;
};

export const useGame = (): TGameContext => {
    return useContext(GameContext) as any;
};
