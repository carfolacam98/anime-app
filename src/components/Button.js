import PropTypes from "prop-types"

function Button({type, label, size, handleClick }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  }

  let arr = [`button-${type}`,"button"]
  
  return (
    <button className={arr.join(" ")} onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary","outline"])
  
}
Button.defaultProps={
  type: "primary",
  size: "md",
  label:"Hi,button here",
}


export default Button