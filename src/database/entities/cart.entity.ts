import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CartItems } from './cartItem.entity';

export enum CART_STATUS {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

@Entity('carts')
export class Carts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @Column({ type: 'date', nullable: false })
  created_at: Date;

  @Column({ type: 'date', nullable: false })
  updated_at: Date;

  @Column({ type: 'enum', enum: CART_STATUS, nullable: false })
  status: CART_STATUS;

  @OneToMany(
    () => CartItems,
    cartItem => cartItem.cart_id,
  )
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
  items: CartItems[];
}
