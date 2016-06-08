# RabbitMQ JSON Messager [![Build Status][1]][2]

This library helps you to handle all messages have been published in the host and the channel which you have defined.

```
$ npm install rabbit-mq-json-messager --save
```


### Configurations

```.env
AMQP_HOSTNAME=amqp://localhost
AMQP_CHANNEL=hello
```

### Usage

```js
var amqp = require('amqplib/callback_api');
var rabbitMq = new RabbitMQ(amqp, function (message) {
  console.log(message);
});
```

[1]: https://travis-ci.org/ozziest/rabbitmq-json-messager.png?branch=master
[2]: https://travis-ci.org/ozziest/rabbitmq-json-messager
