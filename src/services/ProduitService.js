import axios from 'axios';

const PRODUIT_API_BASE_URL = "http://localhost:8080/gestion-des-ventes/produits";

class ProduitService {

    getProduits(){
        return axios.get(PRODUIT_API_BASE_URL+"/liste-des-produits");
    }

    ajoutProduit (produit){
        return axios.post(PRODUIT_API_BASE_URL+"/ajout-produit/", produit ) ;
    
    }
    modifierProduit(produit){
        return axios.post(PRODUIT_API_BASE_URL+"/modifier-produit/", produit ) ;
    }

    supprimerProduit(idProd){
        return axios.delete(PRODUIT_API_BASE_URL +"/supprimer-produit/"+ idProd ) ;
    }

}

export default new ProduitService()