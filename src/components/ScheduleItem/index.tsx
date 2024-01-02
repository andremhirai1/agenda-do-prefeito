import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Item } from '../../types';
import { formatHours, limitText } from '../../utils';


const ScheduleItem = ({ item }: { item: Item }) => {
    return (
        <a className='psp-schedule-item' href={`/l/${item.id}`}>
            <span className='psp-schedule-item-hours'>{formatHours(item.startDate)}</span>
            <div>
                <span className='psp-schedule-item-title'>{limitText(item.title, 150)}</span>
                <span className='psp-schedule-item-location'>{item.location}</span>
            </div>
        </a>
    );
}

export default ScheduleItem