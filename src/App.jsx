import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import './assets/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
