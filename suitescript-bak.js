/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.x
 * @NScriptType usereventscript
 */

define(["N/record", "N/https"], function (record, https) {
    function sendProductData(context) {
        var prodNewRecord = context.newRecord;
        var internalID = prodNewRecord.id;
        var type = context.type;
        var productCode = prodNewRecord.getValue("itemid");

        // Get the associated Quantity Pricing Schedule ID
        var qtyPricingScheduleID = prodNewRecord.getValue(
            "QuantityPricingSchedule"
        );

        log.debug("Quantity Pricing Schedule ID", qtyPricingScheduleID);

        var pricingData = null;
        if (qtyPricingScheduleID) {
            var qtyPricingRecord = record.load({
                type: "QuantityPricingSchedule", // assuming this is the correct record type
                id: qtyPricingScheduleID,
            });

            pricingData = {
                baseDiscount: qtyPricingRecord.getValue("basediscount"),
                quantityPricingType: qtyPricingRecord.getValue(
                    "overallQuantityPricingType"
                ),
                // Add other fields as needed
            };
        }

        log.debug("Pricing Data", pricingData); // This outputs an empy array

        var pricingLevels = [];

        log.debug("Before getting line count for level");

        try {
            var lineCount = prodNewRecord.getLineCount({ sublistId: "level" });
            log.debug("Line count for level", lineCount); // This outputs -1 to the Log
        } catch (error) {
            log.debug("Error getting line count", error);
        }
        for (var i = 0; i < lineCount; i++) {
            var discount = prodNewRecord.getSublistValue({
                sublistId: "level",
                fieldId: "levelDiscount",
                line: i,
            });
            var quantity = prodNewRecord.getSublistValue({
                sublistId: "level",
                fieldId: "levelCount",
                line: i,
            });
            // Store these in an array or object
            pricingLevels.push({ discount: discount, quantity: quantity });
        }

        log.debug("Pricing Levels", pricingLevels);

        var postData = {
            type: type,
            internalID: internalID,
            productCode: productCode,
            pricingData: pricingData,
            pricingLevels: pricingLevels, // Include pricing levels in postData
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
            log.debug({
                title: "API CALL",
                details:
                    context.type + " internal id = " + internalID + " Success",
            });
        } catch (er02) {
            log.debug({
                title: "API CALL",
                details: "ERROR",
            });
        }
    }

    return {
        afterSubmit: sendProductData,
    };
});
