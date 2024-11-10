import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readFile } from '../utils/readFile.js';
import { writeFile } from '../utils/writeFile.js';

export const generateProducts = async (number) => {
  try {
    const data = await readFile(PATH_DB);
    for (let i = 0; i < number; i++) {
      const newProducts = createFakeProduct();
      data.push(newProducts);
    }
    await writeFile(PATH_DB, data);
  } catch (error) {
    console.error(error);
  }
};

generateProducts(5);
