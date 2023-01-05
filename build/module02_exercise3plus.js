"use strict";
/* EXERCISE 3
   A better implementation that not requires switch functionality */
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Fall"] = 0] = "Fall";
    Seasons[Seasons["Winter"] = 1] = "Winter";
    Seasons[Seasons["Sprint"] = 2] = "Sprint";
    Seasons[Seasons["Summer"] = 3] = "Summer";
})(Seasons || (Seasons = {}));
const seasonMonths = {
    [Season.Fall]: "September to November",
    [Season.Winter]: "December to February",
    [Season.Sprint]: "March to May",
    [Season.Summer]: "June to August"
};
function returnMonths(season) {
    return seasonMonths[season];
}
console.log(returnMonths(Seasons.Fall));
