import {
  bold,
  cyan,
  green,
  magenta,
  red,
} from 'https://deno.land/std@0.53.0/fmt/colors.ts';

/**
 * Logger middleware
 * @param {RouterContext} ctx - context
 * @param {*} next - call the next middleware
 * @returns {Promise<any>}
 */
export default async function (ctx: any, next: any): Promise<any> {
  await next();
  const responseTime = ctx.response.headers.get('X-Response-Time');
  const { response: { status = 200 } = {} } = ctx;
  let color = green;
  if (status >= 300) color = cyan;
  if (status >= 400) color = red;
  console.log(
    `${magenta(ctx.request.method)} ${ctx.request.url.pathname} ${color(`${status}`)} - ${
      bold(
        `${responseTime}`,
      )
    }`,
  );
}
