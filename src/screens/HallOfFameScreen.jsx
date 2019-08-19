import React from 'react';
import { AppContext } from '../screens/_context/AppContext';
import { Link } from 'react-router-dom'
import HallOfFameLists from './common/HallOfFameLists';
import HallOfFameUserStats from './common/HallOfFameUserStats';
import HallOfFameRealLifePlayerListStats from "./common/HallOfFameRealLifePlayerListStats";
import DashboardSelectDay from "./common/DashboardSelectDay";




class HallOfFameScreen extends React.Component {
    static contextType = AppContext;
    state = {
        listView: "basketball-players-real-life-stats",
    }

    depositSelectedDay = (event) => {
        const selectedDay = event.target.getAttribute("data-day-to-select")
        this.context.depositHallOfFameSelectedDay(selectedDay)
    }

    depositSelectedList = (event) => {
        const listView = event.target.getAttribute("data-view")
        this.setState({
            listView
        })
    }
    componentDidMount() {
        if (this.context.isInitialLoading) {
            this.context.getFantasyDataContext()
        }
        this.context.depositIsHallOfFame()
    }

    render() {
        return (
            <div className="hall-of-fame-screen-container d-flex flex-column">
                <div className="d-flex">
                    <div className="dashboard-select-day-container d-flex flex-column justify align-items-center show-selected-day">
                        <p><i>Select Round for more details</i></p>
                        <div className="dashboard-select-day-list-wrapper d-flex flex-column justify-content-between">
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "all-days" ? "is-selected" : ""}`} data-day-to-select="all-days" onClick={this.depositSelectedDay}>All rounds - Total</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "31st-August" ? "is-selected" : ""}`} data-day-to-select="31st-August" onClick={this.depositSelectedDay}>31st August</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "1st-September" ? "is-selected" : ""}`} data-day-to-select="1st-September" onClick={this.depositSelectedDay}>1st September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "2nd-September" ? "is-selected" : ""}`} data-day-to-select="2nd-September" onClick={this.depositSelectedDay}>2nd September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "3rd-September" ? "is-selected" : ""}`} data-day-to-select="3rd-September" onClick={this.depositSelectedDay}>3rd September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "4th-September" ? "is-selected" : ""}`} data-day-to-select="4th-September" onClick={this.depositSelectedDay}>4th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "5th-September" ? "is-selected" : ""}`} data-day-to-select="5th-September" onClick={this.depositSelectedDay}>5th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "6th-September" ? "is-selected" : ""}`} data-day-to-select="6th-September" onClick={this.depositSelectedDay}>6th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "7th-September" ? "is-selected" : ""}`} data-day-to-select="7th-September" onClick={this.depositSelectedDay}>7th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "8th-September" ? "is-selected" : ""}`} data-day-to-select="8th-September" onClick={this.depositSelectedDay}>8th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "9th-September" ? "is-selected" : ""}`} data-day-to-select="9th-September" onClick={this.depositSelectedDay}>9th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "10th-September" ? "is-selected" : ""}`} data-day-to-select="10th-September" onClick={this.depositSelectedDay}>10th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "11th-September" ? "is-selected" : ""}`} data-day-to-select="11th-September" onClick={this.depositSelectedDay}>11th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "12th-September" ? "is-selected" : ""}`} data-day-to-select="12th-September" onClick={this.depositSelectedDay}>12th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "13th-September" ? "is-selected" : ""}`} data-day-to-select="13th-September" onClick={this.depositSelectedDay}>13th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "14th-September" ? "is-selected" : ""}`} data-day-to-select="14th-September" onClick={this.depositSelectedDay}>14th September</button>
                            <button type="button" className={`btn btn-outline-light ${this.context.hallOfFameSelectedDay === "15th-September" ? "is-selected" : ""}`} data-day-to-select="15th-September" onClick={this.depositSelectedDay}>15th September</button>
                        </div>
                    </div>
                    {this.context.isInitialLoading &&
                        <h1>It's Loading...</h1>}
                    {!this.context.isInitialLoading &&
                        <div className="lists-container">
                            <div className="hall-of-fame-links-wrapper d-flex justify-content-around">
                                <button type="button" className={`btn btn-outline-dark ${this.state.listView === "f1wc" ? "active" : ""}`} data-view="f1wc" onClick={this.depositSelectedList}>Users F1WC Points</button>
                                <button type="button" className={`btn btn-outline-dark ${this.state.listView === "round-points" ? "active" : ""}`} data-view="round-points" onClick={this.depositSelectedList}>Users Round points</button>
                                <button type="button" className={`btn btn-outline-dark ${this.state.listView === "basketball-players-real-life-stats" ? "active" : ""}`} data-view="basketball-players-real-life-stats" onClick={this.depositSelectedList}>Players Real Life stats</button>
                            </div>
                            {/* <HallOfFameLists />
                            <HallOfFameUserStats /> */}
                            {this.state.listView === "basketball-players-real-life-stats" &&
                                <HallOfFameRealLifePlayerListStats />
                            }
                        </div>
                    }

                </div>
                <Link to={`user-screen`}>
                    <div className="go-back-button">Click here to go back to User screen</div>
                </Link>
            </div>
        )
    }
}

export default HallOfFameScreen