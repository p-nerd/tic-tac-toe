import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type TSpot = "x" | "o" | "";
export type TBoard = TSpot[];

export type TGameType = "humen" | "bot";
export type TTurn = "x" | "o";
export type TScore = { x: number; o: number; t: number };
export type TPlayerNames = { p1: string; p2: string };

const makeGameContext = () => {
    const defaultGameType: TGameType = "bot";
    const defaultBoard: TBoard = ["", "", "", "", "", "", "", "", ""];
    const defaultTurn: TTurn = "x";
    const defaultFirstPlayer: TTurn = "x";
    const defaultScore: TScore = { x: 0, o: 0, t: 0 };
    const defaultPlayerNames = { p1: "You", p2: "Bot" };

    const [gameType, setGameType] = createSignal<TGameType>(defaultGameType);
    const [board, setBoard] = createSignal<TBoard>(defaultBoard);
    const [turn, setTurn] = createSignal<TTurn>(defaultTurn);
    const [firstPlayer, setFirstPlayer] = createSignal<TTurn>(defaultFirstPlayer);
    const [score, setScore] = createSignal<TScore>(defaultScore);
    const [playerNames, setPlayerNames] = createSignal<TPlayerNames>(defaultPlayerNames);

    const reset = () => {
        setGameType(defaultGameType);
        setBoard(defaultBoard);
        setTurn(defaultTurn);
        setFirstPlayer(defaultFirstPlayer);
        setScore(defaultScore);
        setPlayerNames(defaultPlayerNames);
    };

    const resetGame = () => {
        setBoard(defaultBoard);
        setTurn(defaultTurn);
    };

    return {
        gameType,
        setGameType,
        board,
        setBoard,
        turn,
        setTurn,
        firstPlayer,
        setFirstPlayer,
        score,
        setScore,
        playerNames,
        setPlayerNames,
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
