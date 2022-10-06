
import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
//import ListProduitComposant from './composants/ListProduitComposant';
import FooterComposants from './composants/FooterComposants';
import HeaderComposants from './composants/HeaderComposants';
import AjouterProduitComposant from './composants/AjouterProduitComposant';
//import ModifierProduit from './composants/ModifierProduit';
import ListProduit from './composants/ListProduit';

//<Route path = "/modifier-produit/:id" component ={ModifierProduit}></Route> 

function App() {
  return (
    <div >
      <HeaderComposants/>
      
      <Router>
      

              <div className='container'>
                  <Switch>
                      <Route path = "/" exact component ={ListProduit}></Route>
                      <Route path = "/produit" component ={ListProduit}></Route>
                      <Route path = "/ajouter-produit" component ={AjouterProduitComposant}></Route>
                      
                     
                  </Switch>
              </div>
        
      </Router>

      <FooterComposants/>
      
      
      
    </div>
  );
}

export default App;
