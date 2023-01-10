import TraktorView from "./TraktorView.js";

class TraktorokView{
    constructor(tomb, szuloElem){
        
        szuloElem.html(`<table class="table table-hover">
        <thead>
        <tr>
        <th>ID</th>
        <th>Neve</th>
        <th>Súlya</th>
        <th>Fajtája</th>
        <th>Színe</th>
        <th></th>
        <th></th>
        </tr>
        </thead>
        <tbody></tbody>
        </table>`);

        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody");

        tomb.forEach(traktor =>{
            const traktorom = new TraktorView(traktor, this.tbodyElem)
        })
        
    }
}

export default TraktorokView;