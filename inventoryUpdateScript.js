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
            "quantityPricingSchedule"
        );

        var pricingData = null;
        if (qtyPricingScheduleID) {
            var qtyPricingRecord = record.load({
                type: "quantityPricingSchedule", // assuming this is the correct record type
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

        var postData = {
            type: type,
            internalID: internalID,
            productCode: productCode,
            pricingData: pricingData,
        };
        postData = JSON.stringify(postData);

        var header = [];
        header["Content-Type"] = "application/json";
        var apiURL = "https://padis.thinknew.nz/api/updateProduct";
        //var apiURL = "https://insinc.cluster.nz/api/updateProduct";
        try {
            var response = https.post({
                url: apiURL,
                headers: header,
                body: postData,
            });
            log.debug({
                title: "API CALL",
                details:
                    context.type + "internal id = " + internalID + "Success",
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
