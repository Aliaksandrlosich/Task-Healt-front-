import { memo } from 'react'
import { PropTypes } from 'prop-types'
import MuiButton from '@mui/material/Button'

import './button.css'

const Button = memo(({ classes = '', variant = 'contained', onClick = () => {}, text = 'Button' }) =>
 <div className="button__wrapper">
  <MuiButton
   variant={variant}
   className={classes}
   onClick={onClick}>
   {text}
  </MuiButton>
 </div>)

Button.propTypes = {
 classes: PropTypes.string,
 variant: PropTypes.string,
 text: PropTypes.string,
 onClick: PropTypes.func,
}

export default Button
