sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("pruebanorth.controller.PruebaNorthwind", {
            onInit: function () {

            },

            onFetch: function () {
                var that = this;
                const sAppId = this.getOwnerComponent().getManifestEntry('/sap.app/id');
                let sAppPath = sAppId.replaceAll(".", "/");
                let sAppModulePath = sap.ui.require.toUrl(sAppPath);
                let sUrl = sAppModulePath + "/V2/Northwind/Northwind.svc/Products";
                debugger;
                $.ajax({
                    type: "GET",
                    url: sUrl,
                    dataType: "json",
                    data: {
                        "Content-Type": "application/json"
                    },
                    async: true,
                    success: function (oData) {
                        let oModel = new JSONModel(oData);
                        that.getView().setModel(oModel,"Products");
                        debugger;
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            }
        });
    });
