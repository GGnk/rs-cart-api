CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS cart_items (
    cart_id uuid NOT NULL FOREIGN KEY carts(id) REFERENCES carts(id),
    product_id uuid NOT NULL default uuid_generate_v4(),
    count integer
);

INSERT INTO cart_items (cart_id, count) VALUES 
    ('31f8c3cf-a506-401c-bed1-3f2928c0e370', 2),
    ('01eb5b15-3fcb-42df-9a84-bace2c305edd', 1),
    ('c9dc67ab-942c-4547-ab3b-7d39e6edf3e6', 3);