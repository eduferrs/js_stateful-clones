'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateCopy = Object.assign({}, state);
  let statesHistory = [];

  for (let i = 0; i < actions.length; i++) {
    
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(stateCopy, actions[i].extraData);
        statesHistory.push(Object.assign({}, stateCopy));
        break;
      case 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete stateCopy[actions[i].keysToRemove[j]];
        }
        statesHistory.push(Object.assign({}, stateCopy));
        break;
      case 'clear':
        stateCopy = {};
        statesHistory.push(Object.assign({}, stateCopy));
        break;
      default:
        break;
    }
  }

  return statesHistory;
}

module.exports = transformStateWithClones;
