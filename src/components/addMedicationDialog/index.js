import { memo, useState } from 'react'

import Button from '../button'
import Dialog from '../dialog'
import TextField from '../text_field'

import './addMedicationDialog.css'

const texts = {
 addButton: 'Add',
 title: 'Add new medication',
 name: 'Name',
 description: 'Description',
 initCount: 'Init count',
 destinationCount: 'Destination count',
 nameInputErrorText: 'Empty name'
}

const MedicationDialog = memo(({
 successApi, isOpen, openButtonText = texts.addButton,
 medication = { name: '', description: '', initCount: 0, destinationCount: 0, id: undefined }
}) => {
 const [open, setOpen] = useState(isOpen)
 const [form, setForm] = useState(medication)
 const [isNameInputError, setNameInputError] = useState(false)
 const title = texts.title
 const handleClose = () => {
  setOpen(false)
 }

 const handleSuccess = async () => {
  if (form.name) {
   const result = await successApi({ ...form })
   setOpen(false)
  } else {
   setNameInputError(true)
  }
 }

 const openDialog = (event) => {
  event.stopPropagation()
  setOpen(true)
 }

 const onChangeHandler = event => setForm({ ...form, [event.target.name]: event.target.value })
 const nameInputErrorText = isNameInputError ? texts.nameInputErrorText : ''
 return (
  <>
   <Button text={openButtonText} onClick={openDialog}/>
   <Dialog title={title} isOpen={open} handleClose={handleClose} handleSuccess={handleSuccess}>
    <div className="medication-dialog__content-wrapper" onChange={onChangeHandler}>
     <TextField id={'addName'}
                label={texts.name}
                classes={'medication-dialog__text-field'}
                name={'name'}
                helperText={nameInputErrorText}
                isError={isNameInputError}
                defaultValue={medication.name}/>
     <TextField id={'initCount'}
                label={texts.initCount}
                classes={'medication-dialog__text-field'}
                type={'number'}
                name={'initCount'}
                defaultValue={medication.initCount}/>
     <TextField id={'destinationCount'}
                label={texts.destinationCount}
                classes={'medication-dialog__text-field'}
                type={'number'}
                name={'destinationCount'}
                defaultValue={medication.destinationCount}/>
     <TextField id={'description'}
                label={texts.description}
                classes={'medication-dialog__text-field'}
                name={'description'}
                multiline={true}
                defaultValue={medication.description}/>
    </div>
   </Dialog>
  </>
 )

})

export default MedicationDialog
