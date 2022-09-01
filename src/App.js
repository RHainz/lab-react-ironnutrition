import './App.css';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox';

function App() {
  return (<div className="App">
      
      {console.log (foods)} 

      {foods.map((current) => {
        return (<div>
        <p>{current.name}</p>
        <img src={current.image} alt={current.name} width={30}/>
        </div>
      )})};
      
      <FoodBox foods={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />

      {/* <FoodBox name={"Orange 2"} calories={890} image={"https://uol.com.br"} servings={1}}  */}

  </div>
  
)};

export default App;
