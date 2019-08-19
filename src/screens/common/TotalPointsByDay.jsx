import React from 'react';
import { AppContext } from "../_context/AppContext";


class TotalPointsByDay extends React.Component {
    static contextType = AppContext;




    render() {
        return (
            <div className="total-points-by-day-container d-flex justify-content-between align-items-center">
               {!isNaN(this.context.userAvgRoundPointsPerGame) &&
                   <div className="d-flex">
                    Average Round points per round:
                    <span >
                    {this.context.userAvgRoundPointsPerGame.toFixed(2)}
                    </span>
                </div>
               }
                <div className="d-flex">
                    Grand Total round points:
                    <span>
                        {this.context.userTotalRoundPoints.toFixed(2)}
                    </span>
                </div>
            </div>
        )
    }
}

export default TotalPointsByDay