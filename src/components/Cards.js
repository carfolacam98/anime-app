import PropTypes from "prop-types"

function Card({ children, spacing ,  wrap  }) {
  const style = {
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
  }
  return <div className="card" style={style}>{children}</div>
}

Card.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
}
Card.defaultProps={
  spacing:"2",
  wrap:false,
}


export default Card