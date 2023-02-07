import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
  return (
    <>
    <div>CounterApp</div>
    <div>{value}</div>
    </>
  )
}

CounterApp.PropTypes = {
    value: PropTypes.number
}