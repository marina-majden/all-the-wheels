import './App.css';
import { StoreProvider } from './stores/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import Home from './pages/Home';
import AddVehicle from './pages/AddVehicle';




const App = observer(() => {

    return (
    <StoreProvider>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/add" element={<AddVehicle />} />
      </Routes>
    </BrowserRouter>
    </StoreProvider>

    );
})

export default App;
