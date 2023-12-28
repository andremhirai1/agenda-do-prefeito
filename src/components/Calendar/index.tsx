import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Value } from '../../types';

interface MeuComponenteProps {
    onChange: React.Dispatch<React.SetStateAction<Value>>;
    value: Value;
}

const Calendario = ({ onChange, value }: MeuComponenteProps) => {
    return (
        <div>
            <Calendar onChange={onChange} value={value} locale="pt-BR" />
        </div>
    );
}

export default Calendario