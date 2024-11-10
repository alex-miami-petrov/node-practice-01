import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const removeRandomProduct = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const randomIdx = Math.floor(Math.random() * data.length);
  data.splice(randomIdx, 1);
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
};

removeRandomProduct();
