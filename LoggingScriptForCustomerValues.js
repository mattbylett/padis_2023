/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(["N/log", "N/currentRecord"], function (log, currentRecord) {
    var dataList = [
        { "Field ID": "subscribed", Value: "true" },
        { "Field ID": "subscribed1", Value: "true" },
        { "Field ID": "subscribed2", Value: "true" },
        { "Field ID": "subscribed3", Value: "true" },
        { "Field ID": "subscribed4", Value: "true" },
        { "Field ID": "subscribed5", Value: "true" },
        { "Field ID": "subscribed6", Value: "true" },
    ];

    function fieldChanged(context) {
        var record = context.currentRecord;
        var fieldId = context.fieldId;
        var value = record.getValue({ fieldId: fieldId });

        log.debug(
            "Field Changed",
            "Field ID: " + fieldId + ", Value: " + value
        );
    }

    function sublistChanged(context) {
        var sublistId = context.sublistId;
        var record = context.currentRecord;

        if (sublistId === "subscriptions") {
            var targetID = "subscribed4";
            var fieldId = null;

            for (var item of dataList) {
                if (item["Field ID"] === targetID) {
                    fieldId = item["Field ID"];
                    break;
                }
            }

            if (fieldId) {
                var line = record.getCurrentSublistIndex({
                    sublistId: sublistId,
                });
                var value = record.getSublistValue({
                    sublistId: sublistId,
                    fieldId: fieldId,
                    line: line,
                });

                log.debug(
                    "Sublist Field Value",
                    "Sublist ID: " +
                        sublistId +
                        ", Field ID: " +
                        fieldId +
                        ", Value: " +
                        value
                );
            } else {
                log.debug(`Item with Field ID: ${targetID} not found.`);
            }
        }
    }

    function lineInit(context) {
        var sublistId = context.sublistId;
        var record = context.currentRecord;

        if (sublistId === "subscriptions") {
            var fieldId = "subscribed"; // Adjust this to the actual field ID once you have it
            var value = record.getCurrentSublistValue({
                sublistId: sublistId,
                fieldId: fieldId,
            });
            log.debug(
                "Sublist Field Value",
                "Sublist ID: " +
                    sublistId +
                    ", Field ID: " +
                    fieldId +
                    ", Value: " +
                    value
            );
        }
    }

    return {
        fieldChanged: fieldChanged,
        sublistChanged: sublistChanged,
        lineInit: lineInit,
    };
});
