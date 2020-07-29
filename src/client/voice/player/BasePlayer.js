'use strict';

const EventEmitter = require('events');

/**
 * An Audio Player for a Voice Connection.
 * @private
 * @extends {EventEmitter}
 */
class BasePlayer extends EventEmitter {
  constructor() {
    super();

    this.dispatcher = null;

    this.streamingData = {
      channels: 2,
      sequence: 0,
      timestamp: 0,
    };
  }

  destroy() {
    this.destroyDispatcher();
  }

  destroyDispatcher() {
    if (this.dispatcher) {
      this.dispatcher.destroy();
      this.dispatcher = null;
    }
  }

  playUnknown() {
    throw new Error('Voice support is disabled');
  }

  playPCMStream() {
    throw new Error('Voice support is disabled');
  }

  playOpusStream() {
    throw new Error('Voice support is disabled');
  }

  createDispatcher() {
    throw new Error('Voice support is disabled');
  }
}

module.exports = BasePlayer;
