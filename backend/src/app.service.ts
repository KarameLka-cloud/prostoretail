import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '../generated/prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
