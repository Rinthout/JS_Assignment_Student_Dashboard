import StudentData from "../data/StudentData.json"
import data from "../data/StudentMockData.json"

// Alle ingevulde data van studenten (uit de csv/json)
let casesData = data

export function getAllData() {
    const data = casesData.map((data) => data)
    return data
}

// De 56 assigments voor x-assen
export function sortCases() {
    const cases = casesData.slice(0, 56)

    return cases
}

// De tien namen van de studenten
export function getStudent(studentName) {
    const student = StudentData.valueOf().filter(
        (student) => student.first_name === studentName
    )
    return student[0]
}

// reduce group
export function groupedBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property]
        const curGroup = acc[key] ?? []
        return { ...acc, [key]: [...curGroup, obj] }
    }, {})
}

// difficult en fun gemiddelde van alle assignments
export function averageCase() {
    const dataSet = data
    let allCases = data.map((cases) => cases.assignment)
    let unique = [...new Set(allCases)]
    let average = []

    for (let cases of unique) {
        let sumFun = 0
        let funScore = 0
        let sumDifficult = 0
        let difficultScore = 0
        for (let newobject of dataSet.filter(
            (item) => item.assignment === cases,
            data
        )) {
            if (newobject.fun) {
                sumFun += newobject.fun
            }
            sumDifficult += newobject.difficult
            funScore++
            difficultScore++
        }

        const resultObject = {
            assignment: cases,
            fun: sumFun / funScore,
            difficult: sumDifficult / difficultScore,
        }
        average.push(resultObject);
    }
    return average;
}

const newAverageArrayFun = averageCase()
const newAverageArrayDifficult = averageCase()



// sorten op fun
export function sortFun() {
    const newArray = []
    const sortingFun = newAverageArrayFun.sort(
        (a, b) => b.fun - a.fun)

    for (let i = 0; i < sortingFun.length; i++) {
        delete sortingFun[i].difficult

        newArray.push(sortingFun[i])
    }
    return newArray
}

// sorteren op difficult
export function sortDifficult() {
    const newArray = []
    const sortingDifficult = newAverageArrayDifficult.sort(
        (a, b) => b.difficult - a.difficult)

    for (let i = 0; i < sortingDifficult.length; i++) {
        delete sortingDifficult[i].fun

        newArray.push(sortingDifficult[i])
    }
    return newArray
}

// De tien mockdata studenten
export function getAllStudentData() {
    return StudentData
}

export default getAllStudentData
