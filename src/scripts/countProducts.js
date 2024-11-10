import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const countProducts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const count = data ? JSON.parse(data) : [];

  return count.length;
};

console.log(await countProducts());
