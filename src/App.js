import Header from './layouts/Header'
//import Footer from './layouts/Footer'
import Routes from './Routes'


function App() {
  return (
    <div>
		<Header title={'Productos CRUD'} />
		<div className="container">
			<Routes />
		</div>		
    </div>
  );
}

export default App;
