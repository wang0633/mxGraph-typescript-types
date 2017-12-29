declare module "mxgraphAllClasses" {

	/**
	 * Copyright (c) 2006-2015, JGraph Ltd
	 * Copyright (c) 2006-2015, Gaudenz Alder
	 */
	var mxClient: {
		/**
		 * Class: mxClient
		 *
		 * Bootstrapping mechanism for the mxGraph thin client. The production version
		 * of this file contains all code required to run the mxGraph thin client, as
		 * well as global constants to identify the browser and operating system in
		 * use. You may have to load chrome://global/content/contentAreaUtils.js in
		 * your page to disable certain security restrictions in Mozilla.
		 * 
		 * Variable: VERSION
		 *
		 * Contains the current version of the mxGraph library. The strings that
		 * communicate versions of mxGraph use the following format.
		 * 
		 * versionMajor.versionMinor.buildNumber.revisionNumber
		 * 
		 * Current version is 3.7.0.1.
		 */
		VERSION: string,

		/**
		 * Variable: IS_IE
		 *
		 * True if the current browser is Internet Explorer 10 or below. Use <mxClient.IS_IE11>
		 * to detect IE 11.
		 */
		IS_IE: boolean,

		/**
		 * Variable: IS_IE6
		 *
		 * True if the current browser is Internet Explorer 6.x.
		 */
		IS_IE6: boolean;

		/**
		 * Variable: IS_IE11
		 *
		 * True if the current browser is Internet Explorer 11.x.
		 */
		IS_IE11: boolean;

		/**
		 * Variable: IS_EDGE
		 *
		 * True if the current browser is Microsoft Edge.
		 */
		IS_EDGE: boolean;

		/**
		 * Variable: IS_QUIRKS
		 *
		 * True if the current browser is Internet Explorer and it is in quirks mode.
		 */
		IS_QUIRKS: boolean;

		/**
		 * Variable: IS_EM
		 * 
		 * True if the browser is IE11 in enterprise mode (IE8 standards mode).
		 */
		IS_EM: boolean;

		/**
		 * Variable: VML_PREFIX
		 * 
		 * Prefix for VML namespace in node names. Default is 'v'.
		 */
		VML_PREFIX: string;

		/**
		 * Variable: OFFICE_PREFIX
		 * 
		 * Prefix for VML office namespace in node names. Default is 'o'.
		 */
		OFFICE_PREFIX: string;

		/**
		 * Variable: IS_NS
		 *
		 * True if the current browser is Netscape (including Firefox).
		 */
		IS_NS: boolean;

		/**
		 * Variable: IS_OP
		 *
		 * True if the current browser is Opera.
		 */
		IS_OP: boolean;

		/**
		 * Variable: IS_OT
		 *
		 * True if -o-transform is available as a CSS style, ie for Opera browsers
		 * based on a Presto engine with version 2.5 or later.
		 */
		IS_OT: boolean;

		/**
		 * Variable: IS_SF
		 *
		 * True if the current browser is Safari.
		 */
		IS_SF: boolean;

		/**
		 * Variable: IS_IOS
		 * 
		 * Returns true if the user agent is an iPad, iPhone or iPod.
		 */
		IS_IOS: boolean;

		/**
		 * Variable: IS_GC
		 *
		 * True if the current browser is Google Chrome.
		 */
		IS_GC: boolean;

		/**
		 * Variable: IS_CHROMEAPP
		 *
		 * True if the this is running inside a Chrome App.
		 */
		IS_CHROMEAPP: boolean;

		/**
		 * Variable: IS_FF
		 *
		 * True if the current browser is Firefox.
		 */
		IS_FF: boolean;

		/**
		 * Variable: IS_MT
		 *
		 * True if -moz-transform is available as a CSS style. This is the case
		 * for all Firefox-based browsers newer than or equal 3, such as Camino,
		 * Iceweasel, Seamonkey and Iceape.
		 */
		IS_MT: boolean;

		/**
		 * Variable: IS_SVG
		 *
		 * True if the browser supports SVG.
		 */
		IS_SVG: boolean;

		/**
		 * Variable: NO_FO
		 *
		 * True if foreignObject support is not available. This is the case for
		 * Opera, older SVG-based browsers and all versions of IE.
		 */
		NO_FO: boolean;

		/**
		 * Variable: IS_VML
		 *
		 * True if the browser supports VML.
		 */
		IS_VML: boolean;

		/**
		 * Variable: IS_WIN
		 *
		 * True if the client is a Windows.
		 */
		IS_WIN: boolean;

		/**
		 * Variable: IS_MAC
		 *
		 * True if the client is a Mac.
		 */
		IS_MAC: boolean;

		/**
		 * Variable: IS_TOUCH
		 * 
		 * True if this device supports touchstart/-move/-end events (Apple iOS,
		 * Android, Chromebook and Chrome Browser on touch-enabled devices).
		 */
		IS_TOUCH: boolean;

		/**
		 * Variable: IS_POINTER
		 * 
		 * True if this device supports Microsoft pointer events (always false on Macs).
		 */
		IS_POINTER: boolean;

		/**
		 * Variable: IS_LOCAL
		 *
		 * True if the documents location does not start with http:// or https://.
		 */
		IS_LOCAL: boolean;

		/**
		 * Function: isBrowserSupported
		 *
		 * Returns true if the current browser is supported, that is, if
		 * <mxClient.IS_VML> or <mxClient.IS_SVG> is true.
		 * 
		 * Example:
		 * 
		 * (code)
		 * if (!mxClient.isBrowserSupported())
		 * {
		 *   mxUtils.error('Browser is not supported!', 200, false);
		 * }
		 * (end)
		 */
		isBrowserSupported(): boolean;

		/**
		 * Function: link
		 *
		 * Adds a link node to the head of the document. Use this
		 * to add a stylesheet to the page as follows:
		 *
		 * (code)
		 * mxClient.link('stylesheet', filename);
		 * (end)
		 *
		 * where filename is the (relative) URL of the stylesheet. The charset
		 * is hardcoded to ISO-8859-1 and the type is text/css.
		 * 
		 * Parameters:
		 * 
		 * rel - String that represents the rel attribute of the link node.
		 * href - String that represents the href attribute of the link node.
		 * doc - Optional parent document of the link node.
		 */
		link(rel: string, href: string, doc?: Document): undefined;

		/**
		 * Function: include
		 *
		 * Dynamically adds a script node to the document header.
		 * 
		 * In production environments, the includes are resolved in the mxClient.js
		 * file to reduce the number of requests required for client startup. This
		 * function should only be used in development environments, but not in
		 * production systems.
		 */
		include(src: string): undefined;

		/**
		 * Function: dispose
		 * 
		 * Frees up memory in IE by resolving cyclic dependencies between the DOM
		 * and the JavaScript objects.
		 */
		dispose(): undefined;

	}

	/**
	 * Variable: mxLoadResources
	 * 
	 * Optional global config variable to toggle loading of the two resource files
	 * in <mxGraph> and <mxEditor>. Default is true. NOTE: This is a global variable,
	 * not a variable of mxClient.
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		var mxLoadResources = false;
	 * </script>
	 * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
	 * (end)
	 */
	export var mxLoadResources: boolean;

	/**
	 * Variable: mxResourceExtension
	 * 
	 * Optional global config variable to specify the extension of resource files.
	 * Default is true. NOTE: This is a global variable, not a variable of mxClient.
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		var mxResourceExtension = '.txt';
	 * </script>
	 * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
	 * (end)
	 */
	export var mxResourceExtension: string;

	/**
	 * Variable: mxLoadStylesheets
	 * 
	 * Optional global config variable to toggle loading of the CSS files when
	 * the library is initialized. Default is true. NOTE: This is a global variable,
	 * not a variable of mxClient.
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		var mxLoadStylesheets = false;
	 * </script>
	 * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
	 * (end)
	 */
	export var mxLoadStylesheets: boolean;

	/**
	 * Variable: basePath
	 *
	 * Basepath for all URLs in the core without trailing slash. Default is '.'.
	 * Set mxBasePath prior to loading the mxClient library as follows to override
	 * this setting:
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		mxBasePath = '/path/to/core/directory';
	 * </script>
	 * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
	 * (end)
	 * 
	 * When using a relative path, the path is relative to the URL of the page that
	 * contains the assignment. Trailing slashes are automatically removed.
	 */
	export var mxBasePath: string;

	/**
	 * Variable: imageBasePath
	 *
	 * Basepath for all images URLs in the core without trailing slash. Default is
	 * <mxClient.basePath> + '/images'. Set mxImageBasePath prior to loading the
	 * mxClient library as follows to override this setting:
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		mxImageBasePath = '/path/to/image/directory';
	 * </script>
	 * <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
	 * (end)
	 * 
	 * When using a relative path, the path is relative to the URL of the page that
	 * contains the assignment. Trailing slashes are automatically removed.
	 */
	export var mxImageBasePath: string;

	/**
	 * Variable: language
	 *
	 * Defines the language of the client, eg. en for english, de for german etc.
	 * The special value 'none' will disable all built-in internationalization and
	 * resource loading. See <mxResources.getSpecialBundle> for handling identifiers
	 * with and without a dash.
	 * 
	 * Set mxLanguage prior to loading the mxClient library as follows to override
	 * this setting:
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		mxLanguage = 'en';
	 * </script>
	 * <script type="text/javascript" src="js/mxClient.js"></script>
	 * (end)
	 * 
	 * If internationalization is disabled, then the following variables should be
	 * overridden to reflect the current language of the system. These variables are
	 * cleared when i18n is disabled.
	 * <mxEditor.askZoomResource>, <mxEditor.lastSavedResource>,
	 * <mxEditor.currentFileResource>, <mxEditor.propertiesResource>,
	 * <mxEditor.tasksResource>, <mxEditor.helpResource>, <mxEditor.outlineResource>,
	 * <mxElbowEdgeHandler.doubleClickOrientationResource>, <mxUtils.errorResource>,
	 * <mxUtils.closeResource>, <mxGraphSelectionModel.doneResource>,
	 * <mxGraphSelectionModel.updatingSelectionResource>, <mxGraphView.doneResource>,
	 * <mxGraphView.updatingDocumentResource>, <mxCellRenderer.collapseExpandResource>,
	 * <mxGraph.containsValidationErrorsResource> and
	 * <mxGraph.alreadyConnectedResource>.
	 */
	export var mxLanguage: string;

	/**
	 * Variable: defaultLanguage
	 * 
	 * Defines the default language which is used in the common resource files. Any
	 * resources for this language will only load the common resource file, but not
	 * the language-specific resource file. Default is 'en'.
	 * 
	 * Set mxDefaultLanguage prior to loading the mxClient library as follows to override
	 * this setting:
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		mxDefaultLanguage = 'de';
	 * </script>
	 * <script type="text/javascript" src="js/mxClient.js"></script>
	 * (end)
	 */
	export var mxDefaultLanguage: string;

	// Adds all required stylesheets and namespaces
	// if (mxLoadStylesheets)
	// {
	// 	mxClient.link('stylesheet', mxClient.basePath + '/css/common.css');
	// }

	/**
	 * Variable: languages
	 *
	 * Defines the optional array of all supported language extensions. The default
	 * language does not have to be part of this list. See
	 * <mxResources.isLanguageSupported>.
	 *
	 * (code)
	 * <script type="text/javascript">
	 * 		mxLanguages = ['de', 'it', 'fr'];
	 * </script>
	 * <script type="text/javascript" src="js/mxClient.js"></script>
	 * (end)
	 * 
	 * This is used to avoid unnecessary requests to language files, ie. if a 404
	 * will be returned.
	 */
	export var mxLanguages: string[];
	// if (typeof(mxLanguages) != 'undefined' && mxLanguages != null)
	// {
	// 	mxClient.languages = mxLanguages;
	// }

	// Adds required namespaces, stylesheets and memory handling for older IE browsers
	// if (mxClient.IS_VML)
	// {
	// 	if (mxClient.IS_SVG)
	// 	{
	// 		mxClient.IS_VML = false;
	// 	}
	// 	else
	// 	{
	// 		// Enables support for IE8 standards mode. Note that this requires all attributes for VML
	// 		// elements to be set using direct notation, ie. node.attr = value. The use of setAttribute
	// 		// is not possible.
	// 		if (document.documentMode == 8)
	// 		{
	// 			document.namespaces.add(mxClient.VML_PREFIX, 'urn:schemas-microsoft-com:vml', '#default#VML');
	// 			document.namespaces.add(mxClient.OFFICE_PREFIX, 'urn:schemas-microsoft-com:office:office', '#default#VML');
	// 		}
	// 		else
	// 		{
	// 			document.namespaces.add(mxClient.VML_PREFIX, 'urn:schemas-microsoft-com:vml');
	// 			document.namespaces.add(mxClient.OFFICE_PREFIX, 'urn:schemas-microsoft-com:office:office');
	// 		}

	// 		// Workaround for limited number of stylesheets in IE (does not work in standards mode)
	// 		if (mxClient.IS_QUIRKS && document.styleSheets.length >= 30)
	// 		{
	// 			(function()
	// 			{
	// 				var node = document.createElement('style');
	// 				node.type = 'text/css';
	// 				node.styleSheet.cssText = mxClient.VML_PREFIX + '\\:*{behavior:url(#default#VML)}' +
	// 		        	mxClient.OFFICE_PREFIX + '\\:*{behavior:url(#default#VML)}';
	// 		        document.getElementsByTagName('head')[0].appendChild(node);
	// 			})();
	// 		}
	// 		else
	// 		{
	// 			document.createStyleSheet().cssText = mxClient.VML_PREFIX + '\\:*{behavior:url(#default#VML)}' +
	// 		    	mxClient.OFFICE_PREFIX + '\\:*{behavior:url(#default#VML)}';
	// 		}

	// 	    if (mxLoadStylesheets)
	// 	    {
	// 	    	mxClient.link('stylesheet', mxClient.basePath + '/css/explorer.css');
	// 	    }

	// 		// Cleans up resources when the application terminates
	// 		window.attachEvent('onunload', mxClient.dispose);
	// 	}
	// }




	// mxClient.include(mxClient.basePath+'/js/util/mxLog.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxObjectIdentity.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxDictionary.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxResources.js');

	/// <reference path="util/mxPoint.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/util/mxPoint.js');

	/// <reference path="util/mxRectangle.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/util/mxRectangle.js');

	// mxClient.include(mxClient.basePath+'/js/util/mxEffects.js');

	/// <reference path="util/mxUtils.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/util/mxUtils.js');

	// mxClient.include(mxClient.basePath+'/js/util/mxConstants.js');

	/// <reference path="util/mxEventObject.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/util/mxEventObject.js');


	// mxClient.include(mxClient.basePath+'/js/util/mxMouseEvent.js');

	/// <reference path="util/mxEventSource.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/util/mxEventSource.js');


	// mxClient.include(mxClient.basePath+'/js/util/mxEvent.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxXmlRequest.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxClipboard.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxWindow.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxForm.js');

	/// <reference path="util/mxImage.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/util/mxImage.js');


	// mxClient.include(mxClient.basePath+'/js/util/mxDivResizer.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxDragSource.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxToolbar.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxUndoableEdit.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxUndoManager.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxUrlConverter.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxPanningManager.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxPopupMenu.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxAutoSaveManager.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxAnimation.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxMorphing.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxImageBundle.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxImageExport.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxAbstractCanvas2D.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxXmlCanvas2D.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxSvgCanvas2D.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxVmlCanvas2D.js');
	// mxClient.include(mxClient.basePath+'/js/util/mxGuide.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxStencil.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxShape.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxStencilRegistry.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxMarker.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxActor.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxCloud.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxRectangleShape.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxEllipse.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxDoubleEllipse.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxRhombus.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxPolyline.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxArrow.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxArrowConnector.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxText.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxTriangle.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxHexagon.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxLine.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxImageShape.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxLabel.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxCylinder.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxConnector.js');
	// mxClient.include(mxClient.basePath+'/js/shape/mxSwimlane.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxGraphLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxStackLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxPartitionLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxCompactTreeLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxRadialTreeLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxFastOrganicLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxCircleLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxParallelEdgeLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxCompositeLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/mxEdgeLabelLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/model/mxGraphAbstractHierarchyCell.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/model/mxGraphHierarchyNode.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/model/mxGraphHierarchyEdge.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/model/mxGraphHierarchyModel.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/model/mxSwimlaneModel.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/stage/mxHierarchicalLayoutStage.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/stage/mxMedianHybridCrossingReduction.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/stage/mxMinimumCycleRemover.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/stage/mxCoordinateAssignment.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/stage/mxSwimlaneOrdering.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/mxHierarchicalLayout.js');
	// mxClient.include(mxClient.basePath+'/js/layout/hierarchical/mxSwimlaneLayout.js');
	// mxClient.include(mxClient.basePath+'/js/model/mxGraphModel.js');

	/// <reference path="model/mxCell.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/model/mxCell.js');


	// mxClient.include(mxClient.basePath+'/js/model/mxGeometry.js');
	// mxClient.include(mxClient.basePath+'/js/model/mxCellPath.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxPerimeter.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxPrintPreview.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxStylesheet.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxCellState.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxGraphSelectionModel.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxCellEditor.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxCellRenderer.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxEdgeStyle.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxStyleRegistry.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxGraphView.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxGraph.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxCellOverlay.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxOutline.js');

	/// <reference path="view/mxMultiplicity.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/view/mxMultiplicity.js');

	// mxClient.include(mxClient.basePath+'/js/view/mxLayoutManager.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxSwimlaneManager.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxTemporaryCellStates.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxCellStatePreview.js');
	// mxClient.include(mxClient.basePath+'/js/view/mxConnectionConstraint.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxGraphHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxPanningHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxPopupMenuHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxCellMarker.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxSelectionCellsHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxConnectionHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxConstraintHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxRubberband.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxHandle.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxVertexHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxEdgeHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxElbowEdgeHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxEdgeSegmentHandler.js');

	/// <reference path="handler/mxKeyHandler.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/handler/mxKeyHandler.js');

	// mxClient.include(mxClient.basePath+'/js/handler/mxTooltipHandler.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxCellTracker.js');
	// mxClient.include(mxClient.basePath+'/js/handler/mxCellHighlight.js');

	/// <reference path="editor/mxDefaultKeyHandler.d.ts"/>
	// mxClient.include(mxClient.basePath+'/js/editor/mxDefaultKeyHandler.js');

	// mxClient.include(mxClient.basePath+'/js/editor/mxDefaultPopupMenu.js');
	// mxClient.include(mxClient.basePath+'/js/editor/mxDefaultToolbar.js');
	// mxClient.include(mxClient.basePath+'/js/editor/mxEditor.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxCodecRegistry.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxObjectCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxCellCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxModelCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxRootChangeCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxChildChangeCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxTerminalChangeCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxGenericChangeCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxGraphCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxGraphViewCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxStylesheetCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxDefaultKeyHandlerCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxDefaultToolbarCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxDefaultPopupMenuCodec.js');
	// mxClient.include(mxClient.basePath+'/js/io/mxEditorCodec.js');
}