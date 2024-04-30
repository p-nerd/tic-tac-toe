import { TBoardItem } from "~/contexts/game_context";

export const gameResult = (board: TBoardItem[]): "x" | "o" | "t" | "" => {
    // console.log(board);
    // const grid: TBoardItem[][] = [
    //     [board[0], board[1], board[2]],
    //     [board[3], board[4], board[5]],
    //     [board[6], board[7], board[8]],
    // ];
    // console.log(grid);
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
            return board[possibility[0]];
        }
    }
    for (const bItem of board) {
        if (bItem === "") {
            return "";
        }
    }
    return "t";
};
