/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
export const str2ab = (str: string) => {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  const strLen = str.length;
  for (let i = 0; i < strLen; ++i) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

export const ab2str = (ab: ArrayBuffer) => {
  const bufView = new Uint8Array(ab);
  return String.fromCharCode.apply(String, bufView as unknown as number[]);
};

export const pemToAb = (pem: string) => {
  // fetch the part of the PEM string between header and footer
  const pemContents = pem.replace(/-----.*?-----/g, '').replace(/[\s\n]/g, '');

  // base64 decode the string to get the binary data
  const binaryDerString = atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return binaryDer;
};
