export const RIGHT_TITLE_IDX = 'right-title';

export const TOP_FULL_IDX = 'top-fill';
export const MID_FULL_IDX = 'mid-fill';
export const BOT_FULL_IDX  = 'bot-fill';

export const RIGHT_TITLE_BIT:GridFill= {x:0, y:0, xSpan:3, ySpan:12};

export const TOP_FULL_BIT:GridFill= {x:0, y:0, xSpan:12, ySpan:4};
export const MID_FULL_BIT:GridFill= {x:0, y:4, xSpan:12, ySpan:5};
export const BOT_FULL_BIT:GridFill= {x:0, y:8, xSpan:12, ySpan:4};

export type Position <Type> = {
    x: number;
    y: number;
} & Type


export type GridFill =Position<{
    xSpan:number;
    ySpan:number;
}>