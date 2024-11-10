import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

export const removeRandomProduct = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  if (!data) return;
  const parsedData = JSON.parse(data);
  const randomIdx = Math.floor(Math.random() * parsedData.length);
  parsedData.splice(randomIdx, 1);
  await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
};

removeRandomProduct();
