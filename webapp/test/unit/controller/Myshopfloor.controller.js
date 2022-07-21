/*global QUnit*/

sap.ui.define([
	"myapp1/controller/Myshopfloor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Myshopfloor Controller");

	QUnit.test("I should test the Myshopfloor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
