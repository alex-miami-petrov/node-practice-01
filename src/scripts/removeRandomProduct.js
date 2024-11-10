import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { readFile } from '../utils/readFile.js';
import { writeFile } from '../utils/writeFile.js';

export const removeRandomProduct = async () => {
  const data = await readFile(PATH_DB);
  if (!data.length) return;
  const randomIdx = Math.floor(Math.random() * data.length);
  data.splice(randomIdx, 1);
  await writeFile(PATH_DB, data);
};

removeRandomProduct();
