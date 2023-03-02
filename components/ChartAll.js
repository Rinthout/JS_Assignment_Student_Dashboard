import React from "react"
import { useState, useEffect } from "react"
import { sortCases, sortDifficult, sortFun } from "./Filters"
import "../styles/chart.css"
import {
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryBar,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLabel,
} from "victory"

function ChartAll() {
    const [chart, setChart] = useState(sortCases)
    useEffect(() => { setChart(chart) }, [chart])

    return (
        <div >
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
                        <VictoryBar
                            name="difficult"
                            data={chart}
                            x="assignment"
                            y="difficult"
                            style={{
                                data: {
                                    fill: "#333333",
                                },
                            }}
                            barRatio={1}
                            barWidth={8}
                            cornerRadius={4}
                        />
                        <VictoryBar
                            name="fun"
                            data={chart}
                            x="assignment"
                            y="fun"
                            style={{
                                data: {
                                    fill: "#efb000",
                                },
                            }}
                            barRatio={1}
                            barWidth={8}
                            cornerRadius={4}
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
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault()
                    setChart(sortCases())
                }}
            >
                All 56 cases
            </button>
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault()
                    setChart(sortDifficult())
                }}
            >
                Most difficult
            </button>
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault()
                    setChart(sortFun())
                }}
            >
                Most fun
            </button>
        </div>
    )
}

export default ChartAll