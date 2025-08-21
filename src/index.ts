import {Client} from "pg";

const pgClient =new Client('puturdbconnectionstringherebaby');



async function main(){

    await pgClient.connect();//this is an asynchronous function 
    //Database is always in some other continent
    
    const response = await pgClient.query("SELECT * from users")

    console.log(response); 
}


main();