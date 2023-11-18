import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Carts } from './cart.entity';

@Entity('cart_items')
export class CartItems {
  @Column({ type: 'uuid', nullable: false })
  product_id: string;

  @Column({ type: 'integer', nullable: false })
  count: number;

  @ManyToOne(() => Carts)
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart_id: string;
}
