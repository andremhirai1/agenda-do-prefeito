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
        if (!(date instanceof Date)) return;

        const increment = type === "INCREMENT" ? 1 : -1;
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + increment);
        onChange(nextDay);
    };

    return (
        <div>
            <h2 className='psp-calendar-title'>Agenda do prefeito</h2>
            <h3 className='psp-calendar-subtitle'>{formatExtendedDate(date)}</h3>
            <div className='psp-calendar-container'>
                {!loading ?
                    (
                        <div>
                            {items.length > 0 ? (
                                <div>
                                    {items.map(item => <ScheduleItem key={item.id} item={item} />)}
                                </div>
                            ) : (
                                <p>Não há eventos para a data selecionada.</p>
                            )}
                        </div>
                    )
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
            </div>
            <div className='psp-actions'>
                <button onClick={() => handleDayClick("DECREMENT")}><span className='arrow-left'></span> <span>Dia anterior</span></button>
                <button onClick={() => handleDayClick("INCREMENT")}>Dia seguinte &gt;</button>
            </div>
        </div>
    );
}

export default Schedule