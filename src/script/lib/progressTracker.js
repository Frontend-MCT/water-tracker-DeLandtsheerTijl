class ProgressTracker{
    constructor(options){
        console.log(options);
        this.options = options;

        this.currentProgress = []//dataAccess[this.options.mode].getProgressOfToday() || [];
        this.timerId = null;

        this.percentageRatio = 100 / this.options.dailyGoal;

        this.percentage = document.querySelector(`.${this.options.domRefs.percentage}`);
        this.timeStampHolder= document.querySelector(`.${this.options.domRefs.timeStampHolder}`);
        this.addButton= document.querySelector(`.${this.options.domRefs.addButton}`);

        this.currentGoalHolders= document.querySelectorAll(`.${this.options.domRefs.currentGoal}`);
        this.currentUnitsHolders= document.querySelectorAll(`.${this.options.domRefs.currentUnits}`);

        this.showUserOptions();
        this.updateProgress();
        // afterUpdate: ƒ (newPercentage)
        // dailyGoal: 2000
        // domRefs: {percentage: "js-amount", timeStampHolder: "js-time-stamps", addButton: "js-log", currentGoal: "js-goal", currentUnits: "js-units"}
        // mode: "local"
        // units: "ml"
    }

    updateProgress(newLogging = [null, 200]){ //newlogging is een array of obj met een timestamp en andere values
        this.currentProgress.push(newLogging);
        this.showTimeStamp(newLogging[0]);

        const oldProgress = this.percentage.innerText,
            newProgress = Number(oldProgress) + newLogging[1] * this.percentageRatio;

        let v = oldProgress;

        this.timerId = setInterval(() => {
            this.percentage.innerText = v;
            if(v >= newProgress){
                clearInterval(this.timerId);
            }
            v++;
        }, 16);
    }

    showUserOptions(){
        for(const g of this.currentGoalHolders){
            g.innerHTML = this.options.dailyGoal;
        }

        for(const u of this.currentUnitsHolders){
            u.innerHTML = this.options.units;
        }
    }
}