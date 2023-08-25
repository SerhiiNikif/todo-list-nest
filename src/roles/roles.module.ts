import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesService } from './roles.service';
import { Role } from './roles.model';

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [
        SequelizeModule.forFeature([Role])
    ]
})
export class RolesModule {}
