const  positionsTpl = require("../views/position.art");
const positionsAddTpl  = require("../views/positions-add.art");



class ListPositions {
    listPositions(router){
        return async(req,res,)=>{
            res.render(positionsTpl())
           
        }
    }
}

export default ListPositions;