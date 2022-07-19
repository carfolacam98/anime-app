import PropTypes from "prop-types"

function Input({ label,size,type}) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
      padding: `${scale * 0.5}rem ${scale * 1}rem`,
    }
  
  return (
    <input style={style} type={type} placeholder={label}/>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email","date"])
}
Input.defaultProps={
    label: "Hi,there",
    type: "text"
}


export default Input