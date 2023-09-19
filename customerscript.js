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

        var customerName = customerRecord.getValue("companyname");
        var customerEmail = customerRecord.getValue("email");
        var category = customerRecord.getValue("category");

        var loadedCustomerRecord = record.load({
            type: record.Type.CUSTOMER,
            id: internalID,
        });

        var attention;
        var numLines = loadedCustomerRecord.getLineCount({
            sublistId: "addressbook",
        });

        for (var i = 0; i < numLines; i++) {
            var subrecord = loadedCustomerRecord.getSublistSubrecord({
                sublistId: "addressbook",
                fieldId: "addressbookaddress",
                line: i,
            });

            attention = subrecord.getValue({
                fieldId: "attention",
            });
        }

        var subscriptions = [];
        var subscriptionCount = customerRecord.getLineCount({
            sublistId: "subscriptions",
        });
        for (var j = 0; j < subscriptionCount; j++) {
            var subscriptionId = customerRecord.getSublistValue({
                sublistId: "subscriptions",
                fieldId: "subscription",
                line: j,
            });

            var isSubscribed = customerRecord.getSublistValue({
                sublistId: "subscriptions",
                fieldId: "subscribed",
                line: j,
            });

            var subscriptionText = customerRecord.getSublistText({
                sublistId: "subscriptions",
                fieldId: "subscription",
                line: j,
            });
            subscriptions.push({
                id: subscriptionId,
                name: subscriptionText,
                value: isSubscribed,
            });
        }

        var postData = {
            type: type,
            internalID: internalID,
            customerName: customerName,
            customerEmail: customerEmail,
            category: category,
            attention: attention,
            subscriptions: subscriptions,
        };

        postData = JSON.stringify(postData);
        var header = [];
        header["Content-Type"] = "application/json";
        var apiURL = "https://insinc.cluster.nz/api/updateCustomer";

        try {
            var response = https.post({
                url: apiURL,
                headers: header,
                body: postData,
            });
            log.debug({ title: "API Response", details: response });
            if (response.code !== 200) {
                log.error({ title: "API CALL Error", details: response });
            } else {
                log.debug({ title: "API CALL", details: "Success" });
            }
        } catch (er) {
            log.error({ title: "API CALL Exception", details: er });
        }
    }

    return {
        afterSubmit: sendCustomerData,
    };
});
