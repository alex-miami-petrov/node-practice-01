import * as fs from 'node:fs/promises';

export const writeFile = async (path, data) => {
  await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8');
};
