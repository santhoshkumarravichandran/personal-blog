import React from 'react';
import { parseISO, format } from 'date-fns';
import { IDate } from 'pages/interfaces';

const Date = ({ date }: IDate) => {
    const parsedDate = date ? <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time> : <div />;
    return parsedDate;
};
export default Date;
