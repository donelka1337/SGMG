import { Injectable } from '@nestjs/common';
import { Role } from 'src/modules/users/entity/role.entity';

@Injectable()
export class RoleService {
  private readonly role: Role[] = [];

  findAllRole(): Role[] {
    return this.role;
  }

  createRole(role: Role) {
    this.role.push(role);
  }
}
