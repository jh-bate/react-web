var people = [];

/*
    loading and updating messages via api
*/
var contacts = function() {

    people = [
        {
            id:'1',
            groups: ['1'],
            name : 'Jamie Bate'
        },
        {
            id:'2',
            groups: ['1','2'],
            name : 'Jamie Bate'
        },
        {   id:'3',
            groupid:'2',
            name : 'Jamie Bate'
        }
    ];

    return {
        load : load
    };
};

/*
    Load via the API
*/
function load(cb){
    return cb(people);  
}


module.exports = contacts;