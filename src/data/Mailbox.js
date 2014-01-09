var messages = [];

/*!
 * messaging data
 */

module.exports = function () {

    messages = [
        {
            id:'1',
            groupid:'1',
            name: 'Jamie Bate',
            time: 'Dec 21',
            text: 'Awesome drone clips! Those TdF helicopter camera crews should be taking note :)'
        },
        {
            id:'2',
            groupid:'1',
            name: 'Fred Dagg',
            time: 'Dec 23',
            text: 'Aren\'t crit\'s supposed to have tight corners and run over a short course? Looks more like a Kermese to me?'
        },
        {   id:'3',
            groupid:'2',
            name: 'Bobby Orange',
            time: 'Jan 4',
            text: 'This example fetches the desired Github user\'s latest gist:'
        }
    ];

    var mailBox = {};

    mailBox.load = function(cb){
        return cb(messages);
    };

    mailBox.update = function(){
        messages = updatedMessages;
        cb(messages);
    };

    return mailBox;
  
};
