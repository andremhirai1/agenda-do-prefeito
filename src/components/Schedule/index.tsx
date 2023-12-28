import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Item, Value } from '../../types';
import { formatExtendedDate } from '../../utils';
import ScheduleItem from '../ScheduleItem';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Schedule = ({ date, items, loading }: { items: Item[], date: Value, loading: boolean }) => {
    console.log(loading)
    return (
        <div>
            <h2>Agenda do prefeito</h2>
            <h3>{formatExtendedDate(date)}</h3>
            {!loading ?
                (<div>
                    {items.map((item, idx) => <ScheduleItem key={idx} item={item} />)}
                </div>)
                :
                <div>
                    {Array.from({ length: 10 }, (_, idx) => (
                        <div className="psp-skeleton">
                            <Skeleton width={"30px"} />
                            <Skeleton />
                            <Skeleton width={"150px"} />
                        </div>
                    ))}
                </div>}
        </div>
    );
}

export default Schedule