
export async function get(){
    // connect to db and get data

    // fake data from db;
    const guides = [
        {id:1, title: 'Some title'},
        {id:2, title: 'Some title 2'},
        {id:3, title: 'Some title 3'},
        {id:4, title: 'Some title 4'},
        {id:5, title: 'Some title 5'}
    ]

    return{
        status: 200,
        body: {
            guides
        }
    }
}