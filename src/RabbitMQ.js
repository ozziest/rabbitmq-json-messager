'use strict';

module.exports = function(amqp, callback) {
  
    amqp.connect(process.env.AMQP_HOSTNAME, function(err, connection) {
        connection.createChannel(function(err, ch) {
            ch.assertQueue(process.env.AMQP_CHANNEL, { durable: false });
            ch.consume(process.env.AMQP_CHANNEL, function(message) {
                callback(JSON.parse(message.content.toString()));
            }, { noAck: true });
        });
    });

};
