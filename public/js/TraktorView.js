class TraktorView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem = elem;

        szuloElem.append(`<tr>
            <td>${elem.id}</td>
            <td>${elem.neve}</td>
            <td>${elem.sulya} kg</td>
            <td>${elem.fajtaja}</td>
            <td>${elem.szine}</td>
            <td><button id="mod${elem.id}">Módosít</button></td>
            <td><button id="del${elem.id}">Töröl</button></td>
        </tr>`)
        this.sorElem = szuloElem.children("tr:last-child");

        //gombok eseménykezelői
        this.cimElem = $(``)
        this.modositElem = $(`#mod${elem.id}`);
        this.torolElem =$(`#del${elem.id}`);

        this.modositElem.on("click", ()=>{
            console.log("Módosít a View-ban")
            this.kattintastrigger("modosit");
        })

        this.torolElem.on("click", ()=>{
            this.kattintastrigger("torol");
        });
        }

        kattintastrigger(esemenyNeve){
            const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.id})
            window.dispatchEvent(esemeny);
        }
    

    
}

export default TraktorView;