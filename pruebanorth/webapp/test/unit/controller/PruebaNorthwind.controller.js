/*global QUnit*/

sap.ui.define([
	"pruebanorth/controller/PruebaNorthwind.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PruebaNorthwind Controller");

	QUnit.test("I should test the PruebaNorthwind controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
