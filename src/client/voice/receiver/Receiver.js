'use strict';

const EventEmitter = require('events');
const PacketHandler = require('./PacketHandler');
const { Error } = require('../../../errors');

/**
 * Receives audio packets from a voice connection.
 * @example
 * const receiver = connection.createReceiver();
 * // opusStream is a ReadableStream - that means you could play it back to a voice channel if you wanted to!
 * const opusStream = receiver.createStream(user);
 */
class VoiceReceiver extends EventEmitter {
  constructor(connection) {
    super();
    this.connection = connection;
    this.packets = new PacketHandler(this);
    /**
     * Emitted whenever there is a warning
     * @event VoiceReceiver#debug
     * @param {Error|string} error The error or message to debug
     */
    this.packets.on('error', err => this.emit('debug', err));
  }

  /**
   * Options passed to `VoiceReceiver#createStream`.
   * @typedef {Object} ReceiveStreamOptions
   * @property {string} [mode='opus'] The mode for audio output. This defaults to opus, meaning discord.js won't decode
   * the packets for you. You can set this to 'pcm' so that the stream's output will be 16-bit little-endian stereo
   * audio
   * @property {string} [end='silence'] When the stream should be destroyed. If `silence`, this will be when the user
   * stops talking. Otherwise, if `manual`, this should be handled by you.
   */

  /**
   * Creates a new audio receiving stream. If a stream already exists for a user, then that stream will be returned
   * rather than generating a new one.
   */
  createStream() {
    throw new Error('Voice support is disabled');
  }
}

module.exports = VoiceReceiver;
