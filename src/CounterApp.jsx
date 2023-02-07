import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const handleAdd = () => {
        console.log('olá mundo');
    }





  return (
    <>
    <div>CounterApp</div>
    <h2>{value}</h2>
    <button onClick={handleAdd}>
        +1
    </button>

    </>
  )
}

CounterApp.PropTypes = {
    value: PropTypes.number
}