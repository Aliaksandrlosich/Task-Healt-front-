import Button from '../../components/button'
import { useAuth } from '../../api/auth'

const texts = {
  addButton: 'Add',
  logoutButton: 'Logout'
}


const HomePage = () => {
  const auth = useAuth()
  const onLogout = async (event) => {
    await auth.logout()
  }
  return (
    <div>
      <Button text={texts.addButton}/>
      <Button
        text={texts.logoutButton}
        onClick={onLogout}
      />
    </div>
  );
}

export default HomePage
