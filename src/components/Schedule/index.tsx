import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Item, Value } from '../../types';
import { formatExtendedDate } from '../../utils';
import ScheduleItem from '../ScheduleItem';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Schedule = ({ date, items, loading, onChange }: { items: Item[], date: Value, loading: boolean, onChange: React.Dispatch<React.SetStateAction<Value>> }) => {

    const handleDayClick = (type: string = "INCREMENT") => {
        if (date instanceof Date) {
            const nextDay = new Date(date);
            if (type === "INCREMENT") nextDay.setDate(date.getDate() + 1);
            else nextDay.setDate(date.getDate() - 1);
            onChange(nextDay);
        }
    };

    return (
        <div>
            <h2>Agenda do prefeito</h2>
            <h3>{formatExtendedDate(date)}</h3>
            {!loading ?
                (<div>
                    {items.map(item => <ScheduleItem key={item.id} item={item} />)}
                </div>)
                :
                <div>
                    {Array.from({ length: 5 }, (_, idx) => (
                        <div key={idx} className="psp-skeleton">
                            <Skeleton width={"30px"} />
                            <Skeleton height={"20px"} />
                            <Skeleton width={"150px"} />
                        </div>
                    ))}
                </div>}
            <div className='psp-actions'>
                <button onClick={() => handleDayClick("DECREMENT")}>&lt; Dia anterior</button>
                <button onClick={() => handleDayClick("INCREMENT")}>Dia seguinte &gt;</button>
            </div>
        </div>
    );
}

export default Schedule