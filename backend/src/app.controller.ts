import { All, Controller, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import {
  createProxyMiddleware,
  fixRequestBody,
  Options,
} from 'http-proxy-middleware';

const proxy = createProxyMiddleware<Request, Response>({
  target: 'https://analytics.zwisler.dev/',
  changeOrigin: true,
  pathRewrite: (path, req) => req.url?.replace('/sa', ''),
  on: {
    proxyReq: fixRequestBody,
  },
} as Options);

@Controller()
export class AppController {
  @All('/sa/*')
  proxyRequest(@Req() req, @Res() res) {
    proxy(req, res, () => {});
  }
}
