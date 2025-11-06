import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Bienvenue sur mon premier projet NestJS 🎉';
  }
}
