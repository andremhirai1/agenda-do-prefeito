import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Item, Value } from '../../types';
import { formatExtendedDate } from '../../utils';
import ScheduleItem from '../ScheduleItem';


const Schedule = ({ date, items }: { items: Item[], date: Value }) => {
    return (
        <div>
            <h2>Agenda do prefeito</h2>
            <h3>{formatExtendedDate(date)}</h3>
            <div>
                {items.map((item, idx) => <ScheduleItem key={idx} item={item} />)}
            </div>
        </div>
    );
}

export default Schedule