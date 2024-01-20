const _sessionStorage = {}

const sessionStorage = {
  setItem: (key, value) => _sessionStorage[key] = value,
  getItem: (key) => _sessionStorage[key],
  removeItem: (key) => delete _sessionStorage[key],
  length: () => {
    return JSON.stringify(_sessionStorage).length
  },
  key: (num) => {
    return _sessionStorage[Object.keys(_sessionStorage).at(num)]
  },
  clear: () => {
    for(key in _sessionStorage){
      delete _sessionStorage[key]
    }
  },
}

module.exports = sessionStorage

