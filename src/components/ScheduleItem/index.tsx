import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Item } from '../../types';
import { formatHours, limitText } from '../../utils';


const ScheduleItem = ({ item }: { item: Item }) => {
    return (
        <div className='psp-schedule-item'>
            <span className='psp-schedule-item-hours'>{formatHours(item.startDate)}</span>
            <div>
                <a className='psp-schedule-item-title' href={`/l/${item.id}`}>{limitText(item.title, 150)}</a>
                <span className='psp-schedule-item-location'>{item.location}</span>
            </div>
        </div>
    );
}

export default ScheduleItem