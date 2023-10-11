sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mytestapp.controller.app", {
            onInit: function () {

            },

            onOpenBankDetails: function () {
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        { name: "com.sap.mytestapp.view.fragments.MoreDetails" }
                    );

                }
                this.moreBankDetails.then(
                    function (oDialog) {
                        oDialog.open();

                    });
            },


            onCloseBankDetail: function () {
                this.byId("moreBankDetails").close();
            }
        });
    });
