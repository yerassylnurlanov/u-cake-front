const aliases = (prefix = `src`) => ({
    '@assets': `${prefix}/assets`,
    '@store': `${prefix}/store`,
    '@features':`${prefix}/features`,
    '@pages':`${prefix}/pages`,
    '@api':`${prefix}/api`,
    '@ui':`${prefix}/ui`,
    '@lib':`${prefix}/lib`
  });
  
  module.exports = aliases;