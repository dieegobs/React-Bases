import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter ] = useState( 0 )

    const handleAdd = () => {
       setCounter(counter +1);
    }





  return (
    <>
    <div>CounterApp</div>
    <h2>{counter}</h2>
    <button onClick={handleAdd}>
        +1
    </button>

    </>
  )
}

CounterApp.PropTypes = {
    value: PropTypes.number
}