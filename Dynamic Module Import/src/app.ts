// import User,{printUser} from "./User";


//import(url).then ((module)=>{})
//({default:User}) === import {defualt as User,printUser}

// setTimeout(()=>{
//     import('./User').then(({default:User,printUser}) =>{
//         const user = new User("Terry","Yan");
//         printUser(user);
//     })
// },5000)



// ((locale:string) => {
//     const user = { locale, }
//     switch (user.locale) {
//         case user.locale:
//             return import(`./translation/${user.locale}-translations`)
//             .then(({ default: translations }) => {
//                 const { HI } = translations
//                 console.log(HI);
//             })
//             .catch(()=>{
//                 console.log("the language does not exist")
//             })
//         default:
//             return;
//     };
// })("cn")

const shapes = [
    {type:"rectangle"},
    {type:"triangle"},
    {type:"triangle"},
    {type:"triangle"},
]

shapes.forEach(async shape=>{
    try{
        const {render} = await import(`./Shape/${shape.type}`)
        render();
    }catch(err){
        console.log(err);
    }

})
