import React, { Component } from 'react';
import ProduitService from '../services/ProduitService'
class ListProduitComposant extends Component {
    constructor(props){
        super(props)

        this.state = {
            produits: []
            
        }
        this.ajouterProduit = this.ajouterProduit.bind(this);
        this.editProduit = this.editProduit.bind(this);
    }

    editProduit(idProd){
        this.props.history.push(`/modifier-produit/${idProd}`);
    }
    componentDidMount(){
        ProduitService.getProduits().then((res) => {
            this.setState({ produits: res.data});
        });
    }

    ajouterProduit(){
        this.props.history.push('/ajouter-produit');
    }

    modifierProduit(){
        
    }

    
    render() {
        return (
            <div>
                <h2 className='text-center'>Liste des produits: </h2>
                <div className="row-">
                    <button className="btn btn-primary" onClick={this.ajouterProduit}> Ajouter un Produit </button>
                </div>
                <br/>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Intitule </th>
                                <th> Categorie </th>
                                <th> Date d'entrer au stock </th>
                                <th> Prix </th>
                                <th> Quantite </th>
                                <th> Action </th> 
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.produits.map(
                                    produit =>
                                    <tr key={produit.idProd}>
                                        <td>{produit.intitule}</td>
                                        <td>{produit.categorie}</td>
                                        <td>{produit.date_entrer}</td>
                                        <td>{produit.prix}</td>
                                        <td>{produit.quantite}</td>
                                        <td>
                                            <button onClick={ () => this.editProduit(produit.idProd) } className= 'btn btn-info'>Modifier </button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListProduitComposant;