"use strict";
function twoCitySchedCost(costs) {
    costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
    let totalCost = 0;
    const n = costs.length / 2;
    for (let i = 0; i < n; i++) {
        totalCost += costs[i][0];
    }
    for (let i = n; i < costs.length; i++) {
        totalCost += costs[i][1];
    }
    return totalCost;
}
console.log(twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
]));
console.log(twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
]));
console.log(twoCitySchedCost([
    [515, 563],
    [451, 713],
    [537, 709],
    [343, 819],
    [855, 779],
    [457, 60],
    [650, 359],
    [631, 42],
]));
