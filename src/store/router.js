import { createRouter } from '@storeon/router';

const router = createRouter([
  ['/', () => ({ page: 'homepage' })],
  ['/dashboards/*', (id) => ({ page: 'dashboards', params: { id } })],
]);

export default router;
