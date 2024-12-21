
import SingleNumber from '../components/SingleNumber'
import './App.css'

function App() {


  function numbers() {
    let array = []
    for (let i = 1; i <= 100; i++) {

      array.push(i)


    }

    return array
  }
  const fillArray = (numbers())


  return (
    <>

      {fillArray.map(number => (
        <SingleNumber key={number} number={number} />
      ))}



    </>
  )
}

export default App
