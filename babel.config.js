module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],

    // below line is added by us
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],


};