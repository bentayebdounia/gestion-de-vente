import React, { Component } from 'react';
import ProduitService from '../services/ProduitService';

class AjouterProduitComposant extends Component {

    constructor(props){
        super(props)

        this.state = {
            intitule:'',
            categorie:'',
            date_entrer:'',
            prix:'',
            quantite:''
            
        }
        this.changeIntituleHandler = this.changeIntituleHandler.bind(this);
        this.changeCategorieHandler = this.changeCategorieHandler.bind(this);
        this.changeDateProductionHandler = this.changeDateProductionHandler.bind(this);
        this.changePrixHandler = this.changePrixHandler.bind(this);
        this.changeQuantiteHandler = this.changeQuantiteHandler.bind(this);

        this.saveproduit = this.saveproduit.bind(this);
    }

    saveproduit = (e) => {
        e.preventDefault();

         let produit = {
            intitule: this.state.intitule,
            categorie: this.state.categorie,
            date_entrer: this.state.date_entrer,
            prix: this.state.prix,
            quantite: this.state.quantite
         };
         console.log('produit =>' + JSON.stringify(produit));

         ProduitService.ajoutProduit(produit).then(res=>{
            this.props.history.push('/produit');
         });

    }

    changeIntituleHandler= (event) =>{
        this.setState({intitule: event.target.value});
    }

    changeCategorieHandler= (event) =>{
        this.setState({categorie: event.target.value});
    }

    changeDateProductionHandler= (event) =>{
        this.setState({date_entrer: event.target.value});
    }

    changePrixHandler= (event) =>{
        this.setState({prix: event.target.value});
    }

    changeQuantiteHandler= (event) =>{
        this.setState({quantite: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/produit');
    }

    render() {
        return (
            <div>
                   <div className="containee">
                       <div className='row'>  
                            <div className='card col-md-6 offset-md-3'>  
                                <h3 className='text-center'> Ajouter Produit</h3>
                                <div className='card-body'>

                                    <form>
                                        <div className='form-group'>
                                            
                                            <label> Intitulé </label>
                                            <input placeholder='Intitulé' name='intitule' className='form-control'
                                            value={this.state.intitule} onChange={this.changeIntituleHandler} />
                                        </div> 

                                        <div className='form-group'> 
                                            <label> Categorie </label>
                                            <select class="form-select" aria-label="Default select example" value={this.state.categorie} onChange={this.changeCategorieHandler} >
                                                <option selected></option>
                                                <option value="vetements">vetements</option>
                                                <option value="accesoires">accesoires</option>
                                                <option value="chaussures">chaussures</option>
                                            </select>
                                        </div>

                                        <div className='form-group'>  
                                            <label> Date de stock </label>
                                            <input  placeholder='yyyy-mm-dd' name='dateProduction' className='form-control' 
                                            value={this.state.date_entrer} onChange={this.changeDateProductionHandler} />
                                        </div> 

                                        <div className='form-group'>   
                                            <label> Prix </label>
                                            <input  placeholder='prix' name='prix' className='form-control' 
                                            value={this.state.prix} onChange={this.changePrixHandler} />
                                            <label> Quantite </label>
                                            <input placeholder='quantite' name='quantite' className='form-control' 
                                            value={this.state.quantite} onChange={this.changeQuantiteHandler} />

                                        </div>
                                        
                                        <br/>
                                        <button className='btn btn-success' onClick={this.saveproduit}>enregistrer</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>annuler</button>
                                          

                                    </form>
                                </div>

                            </div>

                       </div>

                   </div>
            </div>
        );
    }
}

export default AjouterProduitComposant;