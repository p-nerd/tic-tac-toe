import { createSignal, createContext, useContext, JSXElement } from "solid-js";

type TGameType = "humen" | "bot";
type TPlayerNames = { p1: string; p2: string };

export type TSymbol = "x" | "o";
export type TSpot = TSymbol | "";
export type TBoard = TSpot[];

type TScore = { x: number; o: number; t: number };

const makeGameContext = () => {
    const defaultGameType: TGameType = "bot";
    const defaultPlayerNames: TPlayerNames = { p1: "You", p2: "Bot" };

    const defaultBoard: TBoard = ["", "", "", "", "", "", "", "", ""];
    const defaultTurn: TSymbol = "x";
    const defaultFirstPlayer: TSymbol = "x";

    const defaultScore: TScore = { x: 0, o: 0, t: 0 };

    const [gameType, setGameType] = createSignal<TGameType>(defaultGameType);
    const [playerNames, setPlayerNames] = createSignal<TPlayerNames>(defaultPlayerNames);

    const [turn, setTurn] = createSignal<TSymbol>(defaultTurn);
    const [firstPlayer, setFirstPlayer] = createSignal<TSymbol>(defaultFirstPlayer);
    const [board, setBoard] = createSignal<TBoard>(defaultBoard);

    const [score, setScore] = createSignal<TScore>(defaultScore);

    const reset = () => {
        setGameType(defaultGameType);
        setPlayerNames(defaultPlayerNames);
        setTurn(defaultTurn);
        setFirstPlayer(defaultFirstPlayer);
        setBoard(defaultBoard);
        setScore(defaultScore);
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
