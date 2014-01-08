var messages = [];

/*!
 * messaging data
 */

module.exports = function () {

    messages = [
        {
            id:'1',
            groupid:'1',
            text: 'Awesome drone clips! Those TdF helicopter camera crews should be taking note :)'
        },
        {
            id:'2',
            groupid:'1',
            text: 'Aren\'t crit\'s supposed to have tight corners and run over a short course? Looks more like a Kermese to me?'
        },
        {   id:'3',
            groupid:'2',
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
