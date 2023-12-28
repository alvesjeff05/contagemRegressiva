import Title from './componentes/Title'
import NewYear from './assets/newYear.png'
import Contagem from './componentes/contagem'
import useCountDown from './hooks/userCountDown'
import './App.css'

function App() {
  const [day, hour, minute, second] = useCountDown('Jan 1, 2024 00:00:00')
  return (
    <div className="App" style={{backgroundImage:`url(${NewYear})`}}>
      <div className="container">
      {/* <Title title="Contagem Regressiva"/> */}
      <div className="contagem-regressiva">
      <Contagem title="Dias" number={day}/>
      <Contagem title="Horas" number={hour}/>
      <Contagem title="Minutos" number={minute}/>
      <Contagem title="Segundos" number={second}/>
      </div>
      </div>
    </div>
  )
}

export default App