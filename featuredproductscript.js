/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

require(["N/search"], function (search) {
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
    return promotions;
});
