class Abc {
    constructor(){

    }

    a(){
        return (req,res)=>{
            res.send(`this is aaa page`)
        }
    }
    b(){
        return (req,res)=>{
            res.send(`this is aaa page`)
        }
    }
    c(){
        return (req,res)=>{
            res.send(`this is aaa page`)
        }
    }
}

module.exports = Abc