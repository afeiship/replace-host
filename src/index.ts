import extractDomain from '@jswork/extract-domain';
import isValidURL from '@jswork/is-valid-url';
declare var wx: any;

const replaceHost = (inUrl1: string, inUrl2?: string): string => {
  const domain1 = extractDomain(inUrl1);
  const domain2 = extractDomain(inUrl2);

  if (domain1 === domain2) return inUrl1;
  if (!isValidURL(inUrl1)) return inUrl1;
  if (!inUrl2) return inUrl1;

  // inURL2 is a hostname
  if (!domain2 && typeof inUrl2 === 'string') return inUrl1.replace(domain1, inUrl2);

  return inUrl1.replace(domain1, domain2);
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = replaceHost;
}

export default replaceHost;
