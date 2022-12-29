"use strict";
var KTModalCreateProjectTargets = (function () {
    var e, t, a, r, o;
    return {
        init: function () {
            (r = KTModalCreateProject.getForm()),
                (o = KTModalCreateProject.getStepperObj()),
                (e = KTModalCreateProject.getStepper().querySelector(
                    '[data-kt-element="targets-next"]'
                )),
                (t = KTModalCreateProject.getStepper().querySelector(
                    '[data-kt-element="targets-previous"]'
                )),
                new Tagify(r.querySelector('[name="target_tags"]'), {
                    whitelist: ["Important", "Urgent", "High", "Medium", "Low"],
                    maxTags: 5,
                    dropdown: { maxItems: 10, enabled: 0, closeOnSelect: !1 },
                }).on("change", function () {
                    a.revalidateField("tags");
                }),
                $(r.querySelector('[name="target_due_date"]')).flatpickr({
                    enableTime: !0,
                    dateFormat: "d, M Y, H:i",
                }),
                $(r.querySelector('[name="target_assign"]')).on(
                    "change",
                    function () {
                        a.revalidateField("target_assign");
                    }
                ),
                (a = FormValidation.formValidation(r, {
                    fields: {
                        target_title: {
                            validators: {
                                notEmpty: {
                                    message: "Target title is required",
                                },
                            },
                        },
                        target_assign: {
                            validators: {
                                notEmpty: { message: "Customer is required" },
                            },
                        },
                        target_due_date: {
                            validators: {
                                notEmpty: { message: "Due date is required" },
                            },
                        },
                        target_tags: {
                            validators: {
                                notEmpty: {
                                    message: "Target tags are required",
                                },
                            },
                        },
                        target_allow: {
                            validators: {
                                notEmpty: {
                                    message: "Allowing target is required",
                                },
                            },
                        },
                        "target_notifications[]": {
                            validators: {
                                notEmpty: {
                                    message: "Notifications are required",
                                },
                            },
                        },
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: "",
                        }),
                    },
                })),
                e.addEventListener("click", function (t) {
                    t.preventDefault(),
                        (e.disabled = !0),
                        a &&
                            a.validate().then(function (t) {
                                console.log("validated!"),
                                    "Valid" == t
                                        ? (e.setAttribute(
                                              "data-kt-indicator",
                                              "on"
                                          ),
                                          setTimeout(function () {
                                              e.removeAttribute(
                                                  "data-kt-indicator"
                                              ),
                                                  (e.disabled = !1),
                                                  o.goNext();
                                          }, 1500))
                                        : ((e.disabled = !1),
                                          Swal.fire({
                                              text: "Sorry, looks like there are some errors detected, please try again.",
                                              icon: "error",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, got it!",
                                              customClass: {
                                                  confirmButton:
                                                      "btn btn-primary",
                                              },
                                          }));
                            });
                }),
                t.addEventListener("click", function () {
                    o.goPrevious();
                });
        },
    };
})();
"undefined" != typeof module &&
    void 0 !== module.exports &&
    (window.KTModalCreateProjectTargets = module.exports =
        KTModalCreateProjectTargets);
