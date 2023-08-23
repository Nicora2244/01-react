  /*
  const MyFirstApp = ({ title }) => {
      return (
        <>
          <h1> { title } </h1>
          <span> 10</span>
      </>
      )
  }
  */

  import PropTypes from 'prop-types';

  const MyFirstApp = ( { title, sum } )  => {
      return (
        <>
            <hi> { title } </hi>
            <span> { sum } </span>
        </>
      )
  }

  MyFirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
  }







  export default MyFirstApp;