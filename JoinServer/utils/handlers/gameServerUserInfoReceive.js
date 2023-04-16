const packetManager = require('@mu-online-js/mu-packet-manager');
const structs = packetManager.getStructs();

/**
 * Handles GameServerUserInfo request coming from GS.
 * @param {Buffer} data
 * @param {Socket} socket
 */
const gameServerUserInfoReceive = (data, socket) => {
  const serverUserInfo = new packetManager().fromBuffer(data)
    .useStruct(structs.GSJSUserInfoSend).toObject();

  const gameServerUserInfo = {
    userCount: serverUserInfo.currentUserCount,
    maxUserCount: serverUserInfo.maxUserCount,
    internalId: socket.remotePort
  };
  console.log(gameServerUserInfo);
};

module.exports = gameServerUserInfoReceive;