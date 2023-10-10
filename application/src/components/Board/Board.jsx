/* eslint-disable react/prop-types */
import Cell from "../Cell/Cell";
import "./Board.css"


function Board({ data }) {

    const cells = data.map((row) => (
        row.map((cellValue, columnIndex) => (cellValue == 0 ?
            <Cell key={columnIndex} /> : <Cell key={columnIndex} value={cellValue} />
        ))

    ))

    return <div className="board-container">
        {cells}
    </div>
}

export default Board;