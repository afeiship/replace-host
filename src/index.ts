declare var wx: any;

const ReplaceHost = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = ReplaceHost;
}

export default ReplaceHost;
