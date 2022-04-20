/* import keys */

import { pemToAb } from './utils';

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
export const importPrivateKey = (pem: string) =>
  crypto.subtle.importKey(
    'pkcs8',
    pemToAb(pem),
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256', // or SHA-512
    },
    true,
    ['decrypt']
  );

export const importPublicKey = (pem: string) =>
  crypto.subtle.importKey(
    'spki',
    pemToAb(pem),
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    true,
    ['encrypt']
  );

/* crypto */

export const encrypt = (input: ArrayBuffer, key: CryptoKey) =>
  crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP',
    },
    key,
    input
  );

export const decrypt = (input: ArrayBuffer, key: CryptoKey) =>
  crypto.subtle.decrypt(
    {
      name: 'RSA-OAEP',
    },
    key,
    input
  );
