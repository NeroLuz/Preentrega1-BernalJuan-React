import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <section>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a nuestra tienda!!"}/>
    </section>
  )
}

export default App
