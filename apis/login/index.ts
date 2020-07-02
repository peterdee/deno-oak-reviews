import { Router } from 'https://deno.land/x/oak@v5.3.1/mod.ts';

import controller from './login.controller.ts';

const router = new Router({ prefix: '/api' });
router.post('/login', controller);

export default router;
