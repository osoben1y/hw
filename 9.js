"use strict";
function maximumPopulation(logs) {
    const years = new Array(101).fill(0);
    for (const [birth, death] of logs) {
        years[birth - 1950] += 1;
        years[death - 1950] -= 1;
    }
    let maxPop = 0;
    let year = 1950;
    let currentPop = 0;
    for (let i = 0; i < 101; i++) {
        currentPop += years[i];
        if (currentPop > maxPop) {
            maxPop = currentPop;
            year = 1950 + i;
        }
    }
    return year;
}
maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
]);
