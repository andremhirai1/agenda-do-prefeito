import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Item } from '../../types';
import { formatHours } from '../../utils';


const ScheduleItem = ({ item }: { item: Item }) => {
    return (
        <div>
            <span>{formatHours(item.startDate)}</span>
            <p>{item.title}</p>
            <span>{item.location}</span>
        </div>
    );
}

export default ScheduleItem