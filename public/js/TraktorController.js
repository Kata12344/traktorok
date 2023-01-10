import TraktorModel from "./TraktorModel.js";
import TraktorView from "./TraktorView.js";
import TraktorokView from "./TraktorokView.js";

class TraktorController{
    constructor(){
    const token = $('meta[name="csrf-token"]').attr("content");
    const trakimodel = new TraktorModel(token);
    this.vegpont = "api/traktors";
    trakimodel.adatBe(this.vegpont, this.traktorAdatok)

    $(window).on("modosit", (event)=>{
        //console.log(event.detail);
        trakimodel.adatModosit(this.vegpont, event.detail);
    });

    $(window).on("torol", (event)=>{
        //console.log(event.detail);
        trakimodel.adatTorol(this.vegpont, event.detail);
        location.reload();
    });

    $(window).on("uj", (event)=>{
        //console.log(event.detail);
        trakimodel.adatUj(this.vegpont, event.detail);
    });

    }

    traktorAdatok(tomb){
        const szuloElem = $("main");
        new TraktorokView(tomb, szuloElem)
    }
}

export default TraktorController;