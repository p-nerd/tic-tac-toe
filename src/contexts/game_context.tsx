import { createSignal, createContext, useContext, JSXElement } from "solid-js";

type TGameType = "humen" | "bot";
type TPlayerNames = { p1: string; p2: string };
export type TDifficulty = "easy" | "normal" | "hard";

export type TSymbol = "x" | "o";
export type TSpot = TSymbol | number;
export type TBoard = TSpot[];

type TScore = { x: number; o: number; t: number };

const makeGameContext = () => {
    const defaultGameType: TGameType = "bot";
    const defaultDiffeculty: TDifficulty = "hard";
    const defaultPlayerNames: TPlayerNames = { p1: "You", p2: `Bot'` };

    const defaultBoard: TBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const defaultTurn: TSymbol = "x";
    const defaultFirstPlayer: TSymbol = "x";

    const defaultScore: TScore = { x: 0, o: 0, t: 0 };

    const [gameType, setGameType] = createSignal<TGameType>(defaultGameType);
    const [playerNames, setPlayerNames] = createSignal<TPlayerNames>(defaultPlayerNames);
    const [diffeculty, setDiffeculty] = createSignal<TDifficulty>(defaultDiffeculty);

    const [turn, setTurn] = createSignal<TSymbol>(defaultTurn);
    const [firstPlayer, setFirstPlayer] = createSignal<TSymbol>(defaultFirstPlayer);
    const [board, setBoard] = createSignal<TBoard>(defaultBoard);

    const [score, setScore] = createSignal<TScore>(defaultScore);

    const [nextRound, setNextRound] = createSignal<boolean>(true);

    const reset = () => {
        setGameType(defaultGameType);
        setPlayerNames(defaultPlayerNames);
        setDiffeculty(defaultDiffeculty);
        setTurn(defaultTurn);
        setFirstPlayer(defaultFirstPlayer);
        setBoard(defaultBoard);
        setScore(defaultScore);
    };

    const resetGame = () => {
        setBoard(defaultBoard);
        setTurn(defaultTurn);
        setNextRound(true);
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
        diffeculty,
        setDiffeculty,
        nextRound,
        setNextRound,
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
