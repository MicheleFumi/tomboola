
import SingleNumber from '../components/SingleNumber'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
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

      <div className="container">
        <div className="row d-flex">
          <div className="col">
            {fillArray.map(number => (
              <SingleNumber key={number} number={number} />
            ))}

          </div>
          <div className="col">
            <div>Ultimo numero estratto</div>
          </div>
        </div>

      </div>




    </>
  )
}

export default App
