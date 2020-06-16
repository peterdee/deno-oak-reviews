import { Status } from 'https://deno.land/x/oak/mod.ts';

import bodyParser from '../../utilities/body-parser.ts';
import database, { collections, generateId } from '../../database/index.ts';
import { Context, UpdateUserData } from './types.ts';
import response from '../../utilities/response.ts';
import sanitize from '../../utilities/sanitize.ts';
import { SERVER_MESSAGES } from '../../config/index.ts';

/**
 * Update user data
 * @param {Context} ctx - context
 * @returns {Promise<void>}
 */
export default async function (ctx: Context): Promise<void> {
  try {
    // TODO

    return response(ctx, Status.OK, SERVER_MESSAGES.ok);
  } catch (error) {
    return response(
      ctx,
      Status.InternalServerError,
      SERVER_MESSAGES.internalServerError,
      error,
    );
  }
};