"use strict";
var KTModalOfferADealComplete = (function () {
    var e;
    return {
        init: function () {
            KTModalOfferADeal.getForm(),
                (e = KTModalOfferADeal.getStepperObj()),
                KTModalOfferADeal.getStepper()
                    .querySelector('[data-kt-element="complete-start"]')
                    .addEventListener("click", function () {
                        e.goTo(1);
                    });
        },
    };
})();
"undefined" != typeof module &&
    void 0 !== module.exports &&
    (window.KTModalOfferADealComplete = module.exports =
        KTModalOfferADealComplete);
