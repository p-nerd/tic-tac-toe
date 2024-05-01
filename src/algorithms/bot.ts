/**
 * bot take the board array and return best possible index turn for bot player
 */
const bot = (board: ("x" | "o" | "")[]): number => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            return i;
        }
    }
    return 0;
};

export default bot;
