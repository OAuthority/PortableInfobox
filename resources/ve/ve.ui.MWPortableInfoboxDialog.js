/**
 * Define the dialog
 */
ve.ui.MWPortableInfoboxDialog = function VeUiMWPortableInfoboxDialog() {
	ve.ui.MWPortableInfoboxDialog.super.apply( this, arguments );
};

/**
 * Inheritance from the VE FragmentDialog
 */
OO.inheritClass( ve.ui.MWPortableInfoboxDialog, ve.ui.FragmentDialog );

/**
 * Static properties such as the title, size, and name
 */
ve.ui.MWPortableInfoboxDialog.static.name = "mwPIDialog";
ve.ui.MWPortableInfoboxDialog.static.title = OO.ui.deferMsg( "portableinfobox-visualeditor-mwportableinfoboxdialog-title" );
ve.ui.MWPortableInfoboxDialog.static.size = "medium";

/**
 * Initialize the content of the dialog
 */
ve.ui.MWPortableInfoboxDialog.prototype.initialize = function () {
	ve.ui.MWPortableInfoboxDialog.super.prototype.initialize.call( this );

	this.content = new OO.ui.PanelLayout( {
		padded: true,
		expanded: false
	} );

	this.content.$element.append( "<p></p>" );

	this.$body.append( this.content.$element );
};

/**
 * The height of the dialog, only need a small dialog at first which will list all
 * of the Portable Infoboxes, clicking one will give a bigger dialog later on in the code
 */
ve.ui.MWPortableInfoboxDialog.prototype.getBodyHeight = function () {
	return 200;
};

/**
 * Register the dialog with the VE WindowFactory
 */
ve.ui.windowFactory.register( ve.ui.MWPortableInfoboxDialog );

// Define a new tool for the dialog
ve.ui.MWPortableInfoboxTool = function VeUiMWPortableInfoboxTool() {
	ve.ui.MWPortableInfoboxTool.super.apply( this, arguments );
};

OO.inheritClass( ve.ui.MWPortableInfoboxTool, ve.ui.FragmentWindowTool );

ve.ui.MWPortableInfoboxTool.static.name = "mwPIDialog";
ve.ui.MWPortableInfoboxTool.static.group = "object";
ve.ui.MWPortableInfoboxTool.static.icon = "puzzle";
ve.ui.MWPortableInfoboxTool.static.title = OO.ui.deferMsg( "portableinfobox-visualeditor-mwportableinfoboxdialog-title" );
ve.ui.MWPortableInfoboxTool.static.commandName = "mwPIDialog";

/**
 * Register the tool with the toolFactory
 */
ve.ui.toolFactory.register( ve.ui.MWPortableInfoboxTool );
