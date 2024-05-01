import type { TBoard } from "~/contexts/game_context";

type TIndexedSpot = "x" | "o" | number;
type TIndexedBoard = TIndexedSpot[];

/**
 * bot take the board array and return best possible index turn for bot player
 */
const bot = (board: TBoard): number => {
    console.log(board);
    const indexedBoard = convertEmtySpotWithIndex(board);
    console.log(indexedBoard);
    const freeSpots = filterFreeSpots(indexedBoard);
    console.log(freeSpots);

    return basicLogic(board);
};

export default bot;

const basicLogic = (board: TBoard) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            return i;
        }
    }
    return 0;
};

const convertEmtySpotWithIndex = (board: TBoard): TIndexedBoard => {
    return board.map((spot, index) => (spot === "" ? index : spot));
};

const filterFreeSpots = (board: TIndexedBoard) => {
    return board.filter(spot => (typeof spot === "number" ? true : false));
};
