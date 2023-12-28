import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Item } from '../../types';
import { formatHours, limitText } from '../../utils';


const ScheduleItem = ({ item }: { item: Item }) => {
    return (
        <div className='psp-schedule-item'>
            <span className='psp-schedule-item-hours'>{formatHours(item.startDate)}</span>
            <p className='psp-schedule-item-title'>{limitText(item.title, 200)}</p>
            <span className='psp-schedule-item-location'>{item.location}</span>
        </div>
    );
}

export default ScheduleItem