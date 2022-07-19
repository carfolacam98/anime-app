import PropTypes from "prop-types"

function Heading({ label}) {

  return (
    <h1>
      {label}
    </h1>
  )
}

Heading.propTypes = {
  label: PropTypes.string,
}
Heading.defaultProps={
    label: "Hi,there",
}


export default Heading