import React from "react"
import { Outlet, Link } from "react-router-dom"
import getStudentProfile from "./Filters"
import "../styles/studentBar.css"

function StudentNavBar() {
    const allStudents = getStudentProfile()

    return (
        <div>
            <nav className="student-bar">
                {allStudents.map((student) => (
                    <Link
                        to={`/studentprofile/${student.first_name}`}
                        key={student.id}
                    >
                        <div>
                            {student.first_name}
                            <img src={student.picture} alt="Profile"></img>
                        </div>
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}

export default StudentNavBar