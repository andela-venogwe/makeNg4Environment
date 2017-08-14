import fs from 'fs';
import rimraf from 'rimraf';
import dotenv from 'dotenv';

const makeNg4Environrment = (
  filepath = './src/env.ts',
  environmentVariables = dotenv.config().parsed
) => rimraf(filepath, {}, deleteError => deleteError || (fs
  .writeFile(
    filepath,
    `export const environment = ${JSON.stringify(environmentVariables)}`,
    (error) => {
      if (error) throw error;
    })));

export default makeNg4Environrment;
