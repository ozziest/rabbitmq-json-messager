var test = require('unit.js');
var RabbitMQ = require('../src/RabbitMQ.js')

describe('RabbitMQ implementation', function(){
  
  it('must be work correctly!', function() {
    
    var channel = {
      assertQueue: function (channelName, options) {
        test.must(channelName).be.a.string('foo_channel');
        test.value(options.durable).isEqualTo(false);
      },
      consume: function (channelName, callback) {
        test.must(channelName).be.a.string('foo_channel');
        callback({content: JSON.stringify({level: "warning"})});
      }
    };
    
    var connection = {
      createChannel: function (callback) {
        test.must(typeof callback).be.a.string('function');
        callback(false, channel);
      }
    };
    
    var amqp = {
      connect: function (hostname, callback) {
        test.must(hostname).be.a.string('amqp://localhost');
        test.must(typeof callback).be.a.string('function');
        callback(false, connection);
      }
    };
    
    var callback = function (message) {
      test.value(message.level).isEqualTo('warning');
    };
    
    process.env.AMQP_HOSTNAME = "amqp://localhost";
    process.env.AMQP_CHANNEL = "foo_channel";
    
    var rabbitMq = new RabbitMQ(amqp, callback);

  });
  
});
