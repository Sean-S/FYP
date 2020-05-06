function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZIEQ_MANAGE_PROD_INSPECTIONS_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}