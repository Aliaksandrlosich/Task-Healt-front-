import Button from '../../components/button'
import { useAuth } from '../../api/auth'
import Table from '../../components/table'

const texts = {
  addButton: 'Add'
}
const theadArray = [
 {name: 'Name'},
 {name: 'Description'},
 {name: 'Initial count'},
 {name: 'Destination count'}
]

const HomePage = () => {
  const auth = useAuth()

  return (
    <div>
     <Table theadArray={theadArray}/>
      <Button text={texts.addButton}/>
    </div>
  );
}

export default HomePage
