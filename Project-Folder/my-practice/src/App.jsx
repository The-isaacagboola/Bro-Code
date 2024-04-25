import Practice1 from "./Practice1/ex1"
import Card from "./Practice2/Card"
import Student from "./Practice3 - Props/student"
import UserGreeting from "./UserGreeting"

function App() {


  return (
    <>
    <Practice1/>
    <Card/>
    <Student name="isaac" age="22" isStudent={true} />
    <UserGreeting/>
    </>
  )
}

export default App
