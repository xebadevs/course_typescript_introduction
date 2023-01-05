/* EXERCISE 3
   A better implementation that not requires switch functionality */

    enum Seasons {
        Fall,
        Winter,
        Sprint,
        Summer
    }

    // Receives the enum as key (0, 1, etc., also works) and assigns values to them
    const seasonMonths = {
        [Season.Fall] : "September to November",
        [Season.Winter] : "December to February",
        [Season.Sprint] : "March to May",
        [Season.Summer] : "June to August"
    }

   function returnMonths(season: Seasons) {
    return seasonMonths[season];
}

console.log(returnMonths(Seasons.Fall));