declare module "mxgraphAllClasses" {

/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxRectangleShape
 *
 * Extends <mxShape> to implement a rectangle shape.
 * This shape is registered under <mxConstants.SHAPE_RECTANGLE>
 * in <mxCellRenderer>.
 * 
 * Constructor: mxRectangleShape
 *
 * Constructs a new rectangle shape.
 * 
 * Parameters:
 * 
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 1. This is stored in <strokewidth>.
 */
export class mxRectangleShape extends mxShape {

	constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);
	// {
	// 	mxShape.call(this);
	// 	this.bounds = bounds;
	// 	this.fill = fill;
	// 	this.stroke = stroke;
	// 	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
	// };

	/**
	 * Extends mxShape.
	 */
	// mxUtils.extend(mxRectangleShape, mxShape);

	/**
	 * Function: isHtmlAllowed
	 *
	 * Returns true for non-rounded, non-rotated shapes with no glass gradient.
	 */
	isHtmlAllowed(): boolean;
	// {
	// 	var events = true;
		
	// 	if (this.style != null)
	// 	{
	// 		events = mxUtils.getValue(this.style, mxConstants.STYLE_POINTER_EVENTS, '1') == '1';		
	// 	}
		
	// 	return !this.isRounded && !this.glass && this.rotation == 0 && (events ||
	// 		(this.fill != null && this.fill != mxConstants.NONE));
	// };

	/**
	 * Function: paintBackground
	 * 
	 * Generic background painting implementation.
	 */
	paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
	// {
	// 	var events = true;
		
	// 	if (this.style != null)
	// 	{
	// 		events = mxUtils.getValue(this.style, mxConstants.STYLE_POINTER_EVENTS, '1') == '1';		
	// 	}
		
	// 	if (events || (this.fill != null && this.fill != mxConstants.NONE) ||
	// 		(this.stroke != null && this.stroke != mxConstants.NONE))
	// 	{
	// 		if (!events && (this.fill == null || this.fill == mxConstants.NONE))
	// 		{
	// 			c.pointerEvents = false;
	// 		}
			
	// 		if (this.isRounded)
	// 		{
	// 			var f = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE,
	// 				mxConstants.RECTANGLE_ROUNDING_FACTOR * 100) / 100;
	// 			var r = Math.min(w * f, h * f);
	// 			c.roundrect(x, y, w, h, r, r);
	// 		}
	// 		else
	// 		{
	// 			c.rect(x, y, w, h);
	// 		}
				
	// 		c.fillAndStroke();
	// 	}
	// };

	/**
	 * Function: paintForeground
	 * 
	 * Generic background painting implementation.
	 */
	paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
	// {
	// 	if (this.glass && !this.outline && this.fill != null && this.fill != mxConstants.NONE)
	// 	{
	// 		this.paintGlassEffect(c, x, y, w, h, this.getArcSize(w + this.strokewidth, h + this.strokewidth));
	// 	}
	// };
}
}