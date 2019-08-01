var johnTips = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    },
};

var markTips = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    },
};

function calcAverage(tipsArray) {
    var totatl = 0;
    for (var i = 0; i < tipsArray.length; i++) {
        totatl += tipsArray[i]
    }
    var average = totatl / tipsArray.length;
    return average
}

johnTips.calcTip();
markTips.calcTip();

johnTips.average = calcAverage(johnTips.tips);
markTips.average = calcAverage(markTips.tips);

console.log(johnTips);
console.log(markTips);

if (johnTips.average > markTips.average) {
    console.log(johnTips.fullName + ' giving higher average tips!')
} else if (johnTips.average < markTips.average) {
    console.log(markTips.fullName + ' giving higher average tips!')
} else {
    console.log(johnTips.fullName + ' and ' + markTips.fullName + 'are giving the same average tips!')
}


