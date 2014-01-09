var groups = [];

/*
    loading and updating messages via api
*/
var contacts = function() {

    groups = [
        {
            groupid:'1',
            name : 'Team Bobby',
            members: ['1','2']
        },
        {
            groupid:'2',
            name : 'Team Jamie Bate',
            members: ['1','2']
        },
        {   groupid:'3',
            name : 'Team Willow',
            members: ['1','2']
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
    return cb(groups);  
}


module.exports = contacts;