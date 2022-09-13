import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Square(props) {
    const highlight= props.highlight ? "square squareWin" :"square";
    return (
        <button className={highlight} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        const winLine = this.props.winLine;
        return (
            <Square 
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                highlight={winLine && winLine.includes(i)}
            />
        );
    }

    render() {
        const boardSize = this.props.boardSize;
        let squares = [];
        for(let i=0; i<boardSize; ++i) {
            let row = [];
            for(let j=0; j<boardSize; ++j) {
                let item = i * boardSize + j;
                row.push(this.renderSquare(item));
            }
            let itemSquare = <div key={i} className="board-row">{row}</div>;
                squares.push(itemSquare);
            }
            return (
                <div>{squares}</div>
            );
        }
    }

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                    squares: Array(9).fill(null),
                }],
                isAscending: true,//升序降序
                stepNumber: 0,//当前走到第几步
                xIsNext: true,//下一个棋手出棋
                boardSize: 3,//棋盘是几*几格
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const historyLength = history.length; 
        const current = history[historyLength - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
            {
                squares: squares,
                latestMoveSquare: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleSortToggle() {
        this.setState({
            isAscending: !this.state.isAscending,
        });
    }

    render() { 
        const {history, stepNumber, boardSize, isAscending, xIsNext} = this.state; 
        const current = history[stepNumber];
        const winInfo = calculateWinner(current.squares);
        const winner = winInfo.winner;
        const sortFont = isAscending ?  '👆':'👇';

        let moves = history.map((step, move) => {
            const latestMoveSquare = step.latestMoveSquare;
            const col = 1 + latestMoveSquare % 3;
            const row = 1 + Math.floor(latestMoveSquare / 3);
            const stepNumberStatus = (move === stepNumber) ? 
                "buttonLi currentBu" : 'buttonLi'
            const desc = move ?
                `第${move}步，在${row}行${col} 列`:
                'Go to game start';
            return (
                <li key={move} className = {stepNumberStatus}>
                <button className="buttonBack" onClick={() => this.jumpTo(move)}>返回</button>
                <p>{desc}</p>
            </li>
            );
        });

        if(!isAscending) {
            moves.reverse();
        }

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else if( !winner && stepNumber === boardSize*boardSize ){
            status ="平局"
        } else {
            status = "Next player: " + (xIsNext ? "X" : "O");
        }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    winLine={winInfo.line}
                    squares={current.squares}
                    boardSize = {boardSize}
                    onClick={i => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button 
                    className="buttonSort" 
                    onClick={() => this.handleSortToggle()}>
                {sortFont}
                </button>
                <ol className="historyList">{moves}</ol>
            </div>
        </div>
        );
    }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

//判断是否三颗棋子连一条线的函数
function calculateWinner(squares) {
    const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner:squares[a],
                line: lines[i],//返回成一线的 3 颗棋子的位置
            }
        }
    }
    return {
        winner: null,
    };
}

