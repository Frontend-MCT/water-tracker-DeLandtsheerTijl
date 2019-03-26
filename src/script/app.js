(function() {
    console.log('💧', 'https://www.youtube.com/watch?v=ARC1w1WWxGY');
    
    const options = {
        units: 'ml', 
        dailyGoal: 3000,
        mode: 'local',
        domRefs: {
            //Het huidige percentage
            percentage: 'js-amount',
            //De tijdstippen
            timeStampHolder: 'js-time-stamps',
            //De ('voeg toe') - knop
            addButton: 'js-log',
            //Een klasse voor elk element waarin de goal moet komen
            currentGoal: 'js-goal',
            //Een klasse voor elk element waarin de eengeden mogen komen
            currentUnits: 'js-units'
        },
        afterUpdate: function(newPercentage){
            console.log('It has been updated!');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new ProgressTracker(options);
    });
    
})(); 
