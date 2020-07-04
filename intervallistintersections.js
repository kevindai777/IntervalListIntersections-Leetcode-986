//Objective is to find the intersections between two lists.

let A = [[0,2],[5,10],[13,23],[24,25]]
let B = [[1,5],[8,12],[15,24],[25,26]]


//O(n) solution that uses two pointers, one for each array.

let p1 = 0
let p2 = 0
let result = []

while (p1 < A.length && p2 < B.length) {
    //Find the smallest intersection by maxing the start and mining the end
    let start = Math.max(A[p1][0], B[p2][0])
    let end = Math.min(A[p1][1], B[p1][1])

    //If the interval is valid
    if (start <= end) {
        result.push([start, end])
    }

    //Move along the interval with the smaller start time
    if (A[p1][1] < B[p1][1]) {
        p1++
    } else {
        p2++
    }
}

return result