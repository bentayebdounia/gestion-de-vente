import React, { Component ,useState} from 'react';
import ProduitService from '../services/ProduitService'



class ListProduitComposant extends Component {
    constructor(props){
        super(props)

        this.state = {
            produits: [],
            
            
        }
       this.mode=-1
       //const [editMode,setEditMode] = useState(-1)
        
        this.ajouterProduit = this.ajouterProduit.bind(this);
        this.editProduit = this.editProduit.bind(this);
        this.deleteProduit =this.deleteProduit.bind(this);
        this.toggle = this.toggle.bind(this)
        //this.boutton = this.boutton.bind(this);
    }

   
    componentDidMount(){
        
        ProduitService.getProduits().then((res) => {
            this.setState({ produits: res.data});
        });
    }


    ajouterProduit(){
        this.props.history.push('/ajouter-produit');
    }

    

    editProduit(idProd,key){
        // this.props.history.push(`/modifier-produit/${idProd}`);
        this.n=false
        console.log("edit Click" , {idProd})
        const prix = 1200
        const produitCopy = this.state.produits
        produitCopy[key].prix = prix
        console.log({idProd}, "produitCopy[idProd] ",produitCopy[idProd] ," " , produitCopy)
        this.setState( produitCopy)
 
     }

     deleteProduit(idProd , key){
        console.log("delete Click" , {idProd})
        const produitCopy = this.state.produits
        produitCopy.splice(key,1)
        this.setState( produitCopy)
        ProduitService.supprimerProduit(idProd)
     }
   

    annuler(){
        this.n=true
        this.label()
    }
    toggle(produit , key){
        return this.n ? this.deleteProduit(produit , key) : this.annuler()
        
    }
    label(){
       return this.n ?   'Supprimer' : 'Annuler'

    }
    
    render() {
        
        return (
            <div className='app-container'>
                <form>
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
                                        (produit , key) =>
                                            
                                                <tr key={key}>
                                                    <td>{produit.intitule}</td>
                                                    <td>{produit.categorie}</td>
                                                    <td>{produit.date_entrer}</td>
                                                    <td>{produit.prix}</td>
                                                    <td>{produit.quantite}</td>
                                                    <td>
                                                    <button onClick={ () => this.editProduit(produit.idProd , key) } className= 'btn btn-info'>Modifier </button>
                                                    <button style={{marginLeft:"30px"}} onClick={() => this.toggle(produit.idProd , key) }  className= 'btn btn-danger'>{this.label()}</button>
                                                    </td>

                                                </tr>
                                                
                                            )
                                }
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        );
    }
}

export default ListProduitComposant;