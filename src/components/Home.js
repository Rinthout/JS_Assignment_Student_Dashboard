import React from "react"
import StudentBar from "./StudentNavBar"
import Chart from "./ChartAll"
import "../styles/home.css"

function Home() {
	return (
		<div className="home">
			<h3>Barchart of the evaluations (fun & difficult) of all students:</h3>
			<Chart />
			<h3>Click on a student to see her/his personal evaluation:</h3>
			<StudentBar />
		</div>
	)
}

export default Home