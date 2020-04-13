async function hi(){
    return "Hi!";
}

async function test(){
    const response = await hi();

    console.log(response);
}

