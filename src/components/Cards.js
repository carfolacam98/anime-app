import PropTypes from "prop-types"

function Card({ children, spacing ,  wrap  }) {
  const style = {
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
  }
  return <div style={style}>{children}</div>
}

Card.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row"]),
}
Card.defaultProps={
  spacing:"2",
  wrap:false,
}


export default Card