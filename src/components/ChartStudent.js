import React from "react"
import { useParams, Link } from "react-router-dom"
import { getStudent, groupedBy } from "./Filters"
import { useEffect } from "react"
import data from "../data/StudentMockData.json"
import "../styles/studentProfile.css"
import {
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryLine,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLabel,
} from "victory"

let wincData = data

function StudentProfile() {
    const chartdata = groupedBy(wincData, "name")
    const { id } = useParams()
    const student = getStudent(id)
    useEffect(() => console.log(student))

    if (student !== undefined || student === chartdata.name) {
        return (
            <div>
                <h3>Individual evaluation of {student.first_name} {student.last_name}:</h3>
                <div className="chart-basis">
                    <VictoryChart
                        width={1250}
                        height={400}
                        domain={{ y: [0, 5] }}
                        containerComponent={
                            <VictoryZoomContainer zoomDimension="x" allowPan={true} />
                        }
                    >
                        <VictoryLegend
                            x={550}
                            y={15}
                            orientation="horizontal"
                            gutter={30}
                            style={{
                                border: { stroke: "#333333" }
                            }}
                            data={[
                                { name: "difficult", symbol: { fill: "#333333", type: "square" } },
                                { name: "fun", symbol: { fill: "#efb000", type: "square" } },
                            ]}
                        />
                        <VictoryGroup offset={8} >
                            <VictoryLine
                                style={{
                                    data: { stroke: "#333333" },
                                    parent: { border: "1px solid" }
                                }}
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 2000 }
                                }}
                                name="difficult"
                                data={chartdata[student.first_name]}
                                x="assignment"
                                y="difficult"
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: "#efb000" },
                                    parent: { border: "1px solid" }
                                }}
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 2000 }
                                }}
                                name="fun"
                                data={chartdata[student.first_name]}
                                x="assignment"
                                y="fun"
                            />
                        </VictoryGroup>
                        <VictoryAxis tickLabelComponent={
                            <VictoryLabel
                                angle={45}
                                textAnchor="start"
                                y={355}
                            />
                        }
                        />
                        <VictoryAxis
                            style={{
                                grid: { stroke: '#888888', strokeWidth: .2 },
                            }}
                            tickFormat={[1, 2, 3, 4, 5]}
                            tickValues={[1, 2, 3, 4, 5]}
                            dependentAxis
                        />
                    </VictoryChart>
                </div>
                <div className="student-profile">
                    <img src={student.picture} alt="profile"></img>
                    <ul><li className="student-name"> {student.first_name} {student.last_name} </li>
                        <li> Born: {student.birthday} </li>
                        <li> Email: {student.email} </li>
                        <li> Phone: {student.Phone} </li>
                    </ul>
                    <Link to="/">
                        <button className="button-allstudents">
                            Back to all students
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StudentProfile