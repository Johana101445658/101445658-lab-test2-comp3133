
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/101445658-lab-test2-comp3133/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/101445658-lab-test2-comp3133"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 538, hash: '59a609d9f2c756a876edb67b30a44ae9ad5517588a41d7f027ff2a9b269857a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '31841b85a10e410c963d42ea79788430535ea3244f3fdcd0eff42f67417085b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20898, hash: '538f307b88e33bab6ce2da3d536762d78b31bf05611913599dd18fdaddc6f2f6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
