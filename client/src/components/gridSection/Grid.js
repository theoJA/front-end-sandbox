import React from 'react';
import '../../css/grid.css';

const Grid = props => {
    return (
        <React.Fragment>
            <h2 style={{ textAlign: "start" }}>Pattern 1</h2>
            <div className="grid-1">
                <div className="grid1-div1">1</div>
                <div className="grid1-div2">2</div>
                <div className="grid1-div3">3</div>
                <div className="grid1-div4">4</div>
                <div className="grid1-div5">5</div>
                <div className="grid1-div6">6</div>
            </div>

            <h2 style={{ textAlign: "start" }}>Pattern 2</h2>
            <div className="grid-2">
                <div className="grid2-div1">1</div>
                <div className="grid2-div2">2</div>
                <div className="grid2-div3">3</div>
                <div className="grid2-div4">4</div>
                <div className="grid2-div5">5</div>
            </div>
        </React.Fragment>
    )
}

export default Grid;