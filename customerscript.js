/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.x
 * @NScriptType usereventscript
 */

define(["N/record", "N/https"], function (record, https) {
    function sendCustomerData(context) {
        var customerRecord = context.newRecord;
        var internalID = customerRecord.id;
        var type = context.type;

        // Here you'd use the appropriate field names for the customer data you need
        var customerName = customerRecord.getValue("entityid");
        var customerEmail = customerRecord.getValue("email");

        var postData = {
            type: type,
            internalID: internalID,
            customerName: customerName,
            customerEmail: customerEmail,
        };

        postData = JSON.stringify(postData);
        var header = [];
        header["Content-Type"] = "application/json";
        var apiURL = "https://your-app-url/api/updateCustomer";

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
        } catch (er) {
            log.debug({
                title: "API CALL",
                details: "ERROR",
            });
        }
    }

    return {
        afterSubmit: sendCustomerData,
    };
});
