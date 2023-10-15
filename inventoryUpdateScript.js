/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.x
 * @NScriptType usereventscript
 */

define(["N/https", "N/runtime"], function (https, runtime) {
    function sendProductData(context) {
        var prodNewRecord = context.newRecord;
        var internalID = prodNewRecord.id;
        var type = context.type;
        var productCode = prodNewRecord.getValue("itemid");

        // var remainingUsage = runtime.getCurrentScript().getRemainingUsage();
        // log.debug("Remaining units", remainingUsage);

        log.debug("Starting pricingQuantities loop");

        var pricingQuantities = [];
        var i = 1; // Assuming the numbering starts from 1

        while (true) {
            var currentFieldId = "pricequantity" + i;

            // Trying to get the value of the current field.
            // If the field does not exist, getValue will return null or throw an error.
            var fieldValue = null;
            try {
                fieldValue = prodNewRecord.getValue(currentFieldId);
            } catch (error) {
                // If error occurs (field not found), break out of the loop
                break;
            }

            // If no error and a valid value is returned, push to the array
            if (fieldValue !== null && fieldValue !== "") {
                pricingQuantities.push(fieldValue);
            } else {
                // If fieldValue is null or empty, you can choose to break out of the loop or continue.
                break;
            }

            i++; // Increment the counter for the next iteration
        }

        // log.debug("Pricing Quantities", pricingQuantities);
        log.debug("Ending pricingQuantities loop");

        var remainingUsage = runtime.getCurrentScript().getRemainingUsage();
        log.error("Remaining units", remainingUsage);

        log.debug("Starting API call");

        var postData = {
            type: type,
            internalID: internalID,
            productCode: productCode,
            pricingQuantities: pricingQuantities,
            //          basePrices: basePrices,
        };
        postData = JSON.stringify(postData);

        var header = [];
        header["Content-Type"] = "application/json";
        var apiURL = "https://insinc.cluster.nz/api/updateProduct";
        // var apiURL = "https://padis.thinknew.nz/api/updateProduct";

        try {
            var response = https.post({
                url: apiURL,
                headers: header,
                body: postData,
            });
            log.error({
                title: "API CALL",
                details:
                    context.type + " internal id = " + internalID + " Success",
            });
        } catch (er02) {
            log.error({
                title: "API CALL",
                details: "ERROR",
            });
        }

        log.error("Ending API call");
        var remainingUsage = runtime.getCurrentScript().getRemainingUsage();
        log.error("Remaining units", remainingUsage);
    }

    return {
        afterSubmit: sendProductData,
    };
});

// log.debug("Starting basePrices loop");
// var basePrices = [];
// var basePriceCounter = 1; // Assuming the numbering starts from 1

// // log.debug("This should be #1 - ", basePriceCounter);
// while (true) {
//     var basePriceId = "price_2_" + basePriceCounter + "_formattedValue";
//     log.debug("this is the basePriceId - ", basePriceId);
//     //     // Trying to get the value of the current field.
//     //     // If the field does not exist, getValue will return null or throw an error.
//     var fieldValue = null;
//     try {
//         fieldValue = prodNewRecord.getValue(basePriceId);
//     } catch (error) {
//         // If error occurs (field not found), break out of the loop
//         break;
//     }

//     //     // If no error and a valid value is returned, push to the array
//     if (fieldValue !== null && fieldValue !== "") {
//         basePrices.push(fieldValue);
//     } else {
//         // If fieldValue is null or empty, you can choose to break out of the loop or continue.
//         break;
//     }

//     basePriceCounter++; // Increment the counter for the next iteration
// }

// log.debug("Base Prices", basePrices);
// log.debug("Ending basePrices loop");

// var remainingUsage = runtime.getCurrentScript().getRemainingUsage();
// log.debug("Remaining units", remainingUsage);
