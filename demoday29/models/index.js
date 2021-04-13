let data = {
    db:()=>{
        return Promise.resolve('this is a fake data from database');
    },
    db1:()=>{
        return Promise.resolve('this is the second data from database');
    }
}

module.exports = data;