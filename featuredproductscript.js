/**
 * @NApiVersion 2.x
 * @NScriptType ScheduledScript
 */
define(["N/search", "N/https"], function (search, https) {
    function execute(context) {
        var featuredProducts = [];

        var inventorySearch = search.create({
            type: search.Type.INVENTORY_ITEM,
            filters: [["custitem42", "is", true]],
            columns: [
                "itemid",
                "displayname",
                "salesdescription",
                // Add more columns as required
            ],
        });

        inventorySearch.run().each(function (result) {
            featuredProducts.push({
                itemId: result.getValue("itemid"),
                displayName: result.getValue("displayname"),
                salesDescription: result.getValue("salesdescription"),
                // Add more fields as required
            });
            return true;
        });

        if (featuredProducts.length) {
            sendDataToBackend(featuredProducts);
        }
    }

    function sendDataToBackend(data) {
        var apiURL = "https://insinc.cluster.nz/api/featuredProducts";
        https.post({
            url: apiURL,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    return {
        execute: execute,
    };
});
