import ToDo from "./ToDo/ToDo";
import { Provider } from "react-redux";
import store from "./redux/store";

function App(){
  return(
    <Provider store = {store}>
      <div>
          <ToDo />
      </div>
    </Provider>
  )
}

export default App