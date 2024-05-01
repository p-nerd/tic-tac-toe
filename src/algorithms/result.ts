import { type TBoard } from "~/contexts/game_context";

const result = (board: TBoard): "x" | "o" | "t" | "" => {
    const gameOverPossibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const possibility of gameOverPossibilities) {
        if (
            board[possibility[0]] === board[possibility[1]] &&
            board[possibility[1]] === board[possibility[2]]
        ) {
            return board[possibility[0]] as any;
        }
    }
    for (const bItem of board) {
        if (typeof bItem === "number") {
            return "";
        }
    }
    return "t";
};

export default result;
