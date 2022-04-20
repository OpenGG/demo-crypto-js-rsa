import './style.css';

import { KEY_PRIVATE, KEY_PUBLIC } from './constants';
import { decrypt, encrypt, importPrivateKey, importPublicKey } from './crypto';
import { error, log } from './logger';
import { ab2str, str2ab } from './utils';

const main = async () => {
  const pubKey = await importPublicKey(KEY_PUBLIC);
  log('pubKey:', pubKey);

  const privKey = await importPrivateKey(KEY_PRIVATE);
  log('privKey:', privKey);

  const msg = 'test test hello hello';

  log('msg:', msg);

  const encrypted = await encrypt(str2ab(msg), pubKey);

  log('encrypted:', encrypted);

  const decrypted = await decrypt(encrypted, privKey);

  log('decrypted:', ab2str(decrypted));
};

main().then(
  () => {
    log('Finish');
  },
  (err) => {
    error('Error:');
    error(err.stack || err);
  }
);

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
