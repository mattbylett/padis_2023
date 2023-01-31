/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(["N/search", "N/https"], function (search) {
    var findFeaturedProducts = search.create({
        type: "ITEM",
        columns: ["name", "custitem42"],
        filters: ["custitem42", "is", "true"],
    });
    var featuredProductArray = findFeaturedProducts.run();

    var featuredProducts = featuredProductArray.getRange({
        start: 0,
        end: 50,
    });

    for (var i = 0; i < featuredProducts.length; i++) {
        promotions = {
            id: featuredProducts[i].id,
            promotions: [
                {
                    promo_tag: "Home Page - Featured",
                    promo_order: 1,
                },
            ],
        };
        log.debug(promotions);
    }
    function sendFeaturedProducts(https) {}
    return { onRequest: sendFeaturedProducts };
});
