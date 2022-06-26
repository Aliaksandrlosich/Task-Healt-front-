import { memo } from 'react'
import MuiDialog from '@mui/material/Dialog'
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'

import Button from '../button'

const Dialog = memo(({
 title = 'Dialog', children, isOpen = false, buttonRejectText = 'Reject',
 buttonSuccessText = 'Success', handleClose = () => {}, handleSuccess = () => {}
}) => {
 return (<MuiDialog onClose={handleClose} open={isOpen}>
  <DialogTitle>{title}</DialogTitle>
  <DialogContent>
   {children}
  </DialogContent>
  <DialogActions>
   <Button text={buttonRejectText} variant={'text'} onClick={handleClose}/>
   <Button text={buttonSuccessText} variant={'text'} onClick={handleSuccess}/>
  </DialogActions>
 </MuiDialog>)
})

export default Dialog
