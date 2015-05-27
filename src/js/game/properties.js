var npmProperties = require('../../../package.json');

module.exports =
  { title: 'Resonant Waves'
  , description: npmProperties.description
  , port: 3017
  , liveReloadPort: 3018
  , mute: false
  , showStats: true
  , size:
    { x: 1024
    , y: 360
    }
  , analyticsId: 'UA-50892214-2'
  };
