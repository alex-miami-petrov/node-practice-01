import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const getAllProducts = async () => {
  const getFile = await fs.readFile(PATH_DB, 'utf-8');

  return JSON.parse(getFile);
};

console.log(await getAllProducts());
