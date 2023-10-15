/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.x
 * @NScriptType usereventscript
 */

/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.x
 * @NScriptType usereventscript
 */

define(["N/https", "N/runtime", "N/record"], function (https, runtime, record) {
    function sendProductData(context) {
        log.debug("New Product Script Kicks Off");
        var prodNewRecord = context.newRecord;
        var internalID = prodNewRecord.id;
        var type = context.type;
        var productCode = prodNewRecord.getValue("itemid");

        // Get Bulk Buy Quantities
        log.debug("Starting pricingQuantities loop");

        var pricingQuantities = [];
        var qty = 1; // Assuming the numbering starts from 1

        while (true) {
            var currentFieldId = "pricequantity" + qty;

            // Trying to get the value of the current field.
            // If the field does not exist, getValue will return null or throw an error.
            var fieldValue = null;
            try {
                fieldValue = prodNewRecord.getValue(currentFieldId);
            } catch (error) {
                log.debug("Catch: " + error);
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

            qty++; // Increment the counter for the next iteration
        }

        // log.debug("Pricing Quantities", pricingQuantities);
        log.debug("Ending pricingQuantities loop");

        // Get Bulk Buy Base Prices
        log.debug("Starting Base Price loop");

        var basePrices = [];
        function getFieldValues() {
            log.debug("Getting the field values...");
            try {
                var lineCount = prodNewRecord.getLineCount({
                    sublistId: "pricelevel",
                });
                log.debug("Line Count: " + lineCount);
                for (var i = 0; i < lineCount; i++) {
                    var name = prodNewRecord.getSublistValue({
                        sublistId: "pricelevel",
                        fieldId: "name",
                        line: i,
                    });
                    log.debug("Discount Percentage: " + name);
                }
            } catch (error) {
                log.debug("Something Went Wrong: ... " + error);
            }
        }

        getFieldValues();

        log.debug("Ending Base prices loop");
    }

    return {
        afterSubmit: sendProductData,
    };
});

// function getFieldValues() {
//     log.debug("Getting the field values...");
//     try {
//         var lineCount = prodNewRecord.getLineCount({ sublistId: "pricelevel" });
//         log.debug("Line Count: " + lineCount)
//         for (var i = 0; i < lineCount; i++) {
//             var discountPct = prodNewRecord.getSublistValue({
//                 sublistId: "pricelevel",
//                 fieldId: "name",
//                 line: i,
//             });
//             log.debug("Discount Percentage: " + discountPct);
//         }
//     } catch (error) {
//         log.debug("Something Went Wrong: ... " + error);
//     }
// }

//         getFieldValues();
