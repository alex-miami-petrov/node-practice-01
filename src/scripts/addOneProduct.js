import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readFile } from '../utils/readFile.js';
import { writeFile } from '../utils/writeFile.js';

export const addOneProduct = async () => {
  try {
    const data = await readFile(PATH_DB);
    data.push(createFakeProduct());
    await writeFile(PATH_DB, data);
  } catch (error) {
    console.log(error);
  }
};

addOneProduct();
