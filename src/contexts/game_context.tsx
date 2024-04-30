import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type TTurn = "x" | "o";
export type TBoardItem = TTurn | "";
export type TScore = { x: number; o: number; t: number };

const makeGameContext = () => {
    const defaultBoard: TBoardItem[] = ["", "", "", "", "", "", "", "", ""];
    const defaultTurn: TTurn = "x";
    const defaultFirstPlayer: TTurn = "x";
    const defaultScore: TScore = { x: 0, o: 0, t: 0 };

    const [board, setBoard] = createSignal<TBoardItem[]>(defaultBoard);
    const [turn, setTurn] = createSignal<TTurn>(defaultTurn);
    const [firstPlayer, setFirstPlayer] = createSignal<TTurn>(defaultFirstPlayer);
    const [score, setScore] = createSignal<TScore>(defaultScore);

    const reset = () => {
        setBoard(defaultBoard);
        setTurn(defaultTurn);
        setFirstPlayer(defaultFirstPlayer);
        setScore(defaultScore);
    };

    const resetGame = () => {
        setBoard(defaultBoard);
        setTurn(defaultTurn);
    };

    return {
        board,
        setBoard,
        turn,
        setTurn,
        firstPlayer,
        setFirstPlayer,
        score,
        setScore,
        reset,
        resetGame,
    } as const;
};

type TGameContext = ReturnType<typeof makeGameContext>;
const GameContext = createContext<TGameContext>();

export const GameProvider = (p: { children: JSXElement }) => {
    return <GameContext.Provider value={makeGameContext()}>{p.children}</GameContext.Provider>;
};

export const useGame = (): TGameContext => {
    return useContext(GameContext) as any;
};
