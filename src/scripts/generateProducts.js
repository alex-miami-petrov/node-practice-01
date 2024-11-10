import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';

export const generateProducts = async (number) => {
  try {
    const readFile = await fs.readFile(PATH_DB, 'utf-8');
    const data = readFile ? JSON.parse(readFile) : [];
    for (let i = 0; i < number; i++) {
      const newProducts = createFakeProduct();
      data.push(newProducts);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

generateProducts(5);
