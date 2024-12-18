/*---IdP-SAML---*/

import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as session from 'express-session';
import { SamlController } from './saml.controller';
import { SamlService } from './saml.service';
import { AuthMiddleware } from '../middleware/middleware.saml';

@Module({
  imports: [],
  controllers: [SamlController],
  providers: [SamlService],
})
export class SamlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply AuthMiddleware to all routes within the AppModule
    consumer
      .apply(AuthMiddleware)
      .exclude('/saml/login', '/saml/logout')
      .forRoutes({ path: 'saml*', method: RequestMethod.ALL });
  }
}
