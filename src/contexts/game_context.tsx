import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type TTurn = "x" | "o";
export type TBoardItem = TTurn | "";

const makeGameContext = () => {
    const defaultBoard: TBoardItem[] = ["", "", "", "", "", "", "", "", ""];
    const defaultTurn: TTurn = "x";
    const defaultFirstPlayer: TTurn = "x";

    const [board, setBoard] = createSignal<TBoardItem[]>(defaultBoard);
    const [turn, setTurn] = createSignal<TTurn>(defaultTurn);
    const [firstPlayer, setFirstPlayer] = createSignal<TTurn>(defaultFirstPlayer);

    const reset = () => {
        setBoard(defaultBoard);
        setTurn(defaultTurn);
        setFirstPlayer(defaultFirstPlayer);
    };

    return { board, setBoard, turn, setTurn, firstPlayer, setFirstPlayer, reset } as const;
};

type TGameContext = ReturnType<typeof makeGameContext>;
const GameContext = createContext<TGameContext>();

export const GameProvider = (p: { children: JSXElement }) => {
    return <GameContext.Provider value={makeGameContext()}>{p.children}</GameContext.Provider>;
};

export const useGame = (): TGameContext => {
    return useContext(GameContext) as any;
};
