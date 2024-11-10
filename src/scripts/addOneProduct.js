import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';

export const addOneProduct = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    products.push(createFakeProduct());
    await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

addOneProduct();
