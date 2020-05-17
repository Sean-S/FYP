sap.ui.define([
	"./BaseController",
	"../model/formatter",
	"../model/types",
	"sap/ui/layout/VerticalLayout"
], function (BaseController, formatter, types, VerticalLayout) {
	"use strict";
	return BaseController.extend("erp.com.ManageProductionLots.controller.Detail", {

		formatter: formatter,
		types: types,

		// =========================================================== / / lifecycle methods /
		// =========================================================== /

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit: function () {
			this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
		},

		// =========================================================== / / event handlers /
		// =========================================================== /

		/**
		 * Navigates back to the Master
		 * @function
		 */
		onNavPress: function () {
			this.onNavBack("master");
		},

		// =========================================================== / / internal methods /
		// =========================================================== /

		/**
		 * Binds the view to the object path.
		 *
		 * @function
		 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
		 * @private
		 */
		_onObjectMatched: function (oEvent) {
			var sObjectId = oEvent.getParameter("arguments").Prueflos;
			var sObjectPath = this.getModel().createKey("InspectionLotSet", {
				Prueflos: sObjectId
			});
			this._bindView("/" + sObjectPath);
		},

		/**
		 * Binds the view to the object path.
		 *
		 * @function
		 * @param {string} sObjectPath path to the object to be bound
		 * @private
		 */
		_bindView: function (sObjectPath) {
			var oView = this.getView();
			oView.bindElement({
				path: sObjectPath,
				parameters: {
					expand: "ToInspectionPoint"
				}
			});
		},

		/**
		 * Creates the line items for the products table using a factory.
		 *
		 * @function
		 * @private
		 */
		_createProductsAggregation: function (ObjectPath) {
			var oTable = this.getView().byId("table");

			oTable.bindAggregation("items", ObjectPath, function (sId, oContext) {
				//var sSample = oContext.getProperty("Prueflos");

				var oColumnListItem = new sap.m.ColumnListItem(sId);
				oColumnListItem.addCell(new sap.m.ObjectIdentifier({
					text: "{Prueflos}"
				}));
				return oColumnListItem;
			});
		}
	});
});