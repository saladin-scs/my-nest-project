// importer NestFactory pour créer l'application
import { NestFactory } from '@nestjs/core';
// importer le module principal
import { AppModule } from './app.module';

async function bootstrap() {
  // Crée une application Nest à partir du module racine AppModule
  const app = await NestFactory.create(AppModule);

  // Choisir le port sur lequel lancer l’application
  await app.listen(3000);
  console.log(`🚀 Application running on: http://localhost:3000`);
}

// Exécuter la fonction bootstrap
bootstrap();
