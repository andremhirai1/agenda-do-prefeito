import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Value } from '../../types';

interface Props {
    onChange: React.Dispatch<React.SetStateAction<Value>>;
    value: Value;
}

const Calendario = ({ onChange, value }: Props) => {
    return (
        <div>
            <Calendar className="psp-calendar" onChange={onChange} value={value} locale="pt-BR" />
        </div>
    );
}

export default Calendario