// interface User {
//     name:string,
//     address:string,
//     age:number
// }


// class Grandparents implements User{
//     constructor(name:string,address:string,age:number){
//         this.name=name,
//         this.address=address,
//         this.age=age
//     }
// }

// let user1=new Grandparents("hukum","sarmoli",78)
// console.log(user1);

// abstract class User2{
//     name1:string;
//     age1:number;

//     func1(){
//         console.log("this is abstract class ");
//     }
// }

// class Grandparents2 extends User2{
//     name:string;age:number
//     constructor(name:string,age:number){
//         super(name,age)
//         this.name=name,
//         this.age:age
//     }
//     func1()
// }
// }



interface User{
    name:string,
    lastname:string,
    age:number
}

function legal(user:User[]){
    return 

        user.filter(a=>a.age> 18 ? "allowed": "not allowed")
    }

const a=legal([{"ap","efeg",12},{"grgr","vgrgrgrg",56}])
console.log(a);