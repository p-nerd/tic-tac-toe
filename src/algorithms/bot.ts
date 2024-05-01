import { type TSymbol, type TBoard, type TDifficulty } from "~/contexts/game_context";
import result from "./result";

/**
 * bot take the board array and return best possible index turn for bot player
 */
const bot = (board: TBoard, botPlayer: TSymbol, difficulty: TDifficulty = "normal"): number => {
    switch (difficulty) {
        case "easy":
            return easy(board);
        case "normal":
            return normal(board, botPlayer);
        case "hard":
            return hard(board, botPlayer);
    }
};

export default bot;

const easy = (board: TBoard): number => {
    const freeSpots = helpers.filterFreeSpots(board);
    return helpers.randomArrayItem(freeSpots);
};

const normal = (board: TBoard, botPlayer: TSymbol): number => {
    const bestIndex = hard(board, botPlayer);
    const dumpIndex = easy(board);
    return Math.random() < 0.75 ? bestIndex : dumpIndex;
};

const hard = (board: TBoard, botPlayer: TSymbol): number => {
    return minimax(board, botPlayer, botPlayer).index || 0;
};

type TMove = { score: number; index?: number };

const minimax = (board: TBoard, player: TSymbol, botPlayer: TSymbol): TMove => {
    switch (result(board)) {
        case "":
            break;
        case "t":
            return { score: 0 };
        case botPlayer:
            return { score: 1 };
        default:
            return { score: -1 };
    }
    const aviableSpots = helpers.filterFreeSpots(board);
    const moves: TMove[] = [];
    for (let i = 0; i < aviableSpots.length; i++) {
        const index = aviableSpots[i];
        board[aviableSpots[i]] = player;

        const move =
            player === botPlayer
                ? minimax(board, botPlayer === "x" ? "o" : "x", botPlayer)
                : minimax(board, botPlayer, botPlayer);

        move.index = index;
        board[aviableSpots[i]] = index;

        moves.push(move);
    }
    let bestMove: number = 0;
    if (player === botPlayer) {
        let bestScore = -1000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 1000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
};

const helpers = {
    filterFreeSpots: (board: TBoard): number[] => {
        return board.filter(spot => (typeof spot === "number" ? true : false)) as any as number[];
    },
    randomArrayItem: (board: number[]) => {
        return board[Math.floor(Math.random() * board.length)];
    },
};
