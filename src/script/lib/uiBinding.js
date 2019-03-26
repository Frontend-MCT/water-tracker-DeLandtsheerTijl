//hoofdmodule
const uiBinding = (function () {

    //submodule
    const wave = (function () {
        const setup = function () {
            console.log("setup");
        };
        const updateWaveHeight = function () {
            console.log('updateWaveHeight');
        };

        return {
            setup: setup,
            updateWaveHeight: updateWaveHeight
        }
    })();

    //submodule
    const logging = (function () {
        const setup = function () {
            console.log('setup');
        }

        const enableAmountOptions = function () {
            console.log("enable Amount options");
        }

        return {
            setup: setup,
            enableAmountOptions: enableAmountOptions
        }
    })();

    return {
        wave: wave,
        logging: logging
    };
})();