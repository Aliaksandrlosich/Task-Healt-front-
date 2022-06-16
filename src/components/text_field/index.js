import React from 'react'
import { PropTypes } from 'prop-types'
import MuiTextField from '@mui/material/TextField'

import './text_field.css'

const TextField = ({
                     label = '', classes = '', id = '', defaultValue = '', helperText = '',
                     variant = 'standard', type = 'text', isError = false,
                   }) =>
  <MuiTextField
    error={isError}
    className={classes}
    id={id}
    label={label}
    defaultValue={defaultValue}
    helperText={helperText}
    type={type}
    variant={variant}/>

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  classes: PropTypes.string,
  helperText: PropTypes.string,
  variant: PropTypes.string,
  isError: PropTypes.bool,
}

export default TextField
