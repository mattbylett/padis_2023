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
        var postData = {
            type: type,
            internalID: internalID,
            productCode: productCode,
        };
        postData = JSON.stringify(postData);
        var header = [];
        header["Content-Type"] = "application/json";
        var apiURL = "https://padis.thinknew.nz/api/updateProduct";
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
