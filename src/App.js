import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignIn from './signin/signin';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default App;
