import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import findDiffrence from '../src';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

describe('findDiffrence', () => {
  context('compare json files', () => {
    it('returns difference in json files', () => {
      const result = findDiffrence(getFixturePath('before.json'), getFixturePath('after.json'));
      const expected = fs.readFileSync(getFixturePath('result1'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare yaml files', () => {
    it('returns difference in yaml files', () => {
      const result = findDiffrence(getFixturePath('before.yaml'), getFixturePath('after.yaml'));
      const expected = fs.readFileSync(getFixturePath('result2'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare ini files', () => {
    it('returns difference in ini files', () => {
      const result = findDiffrence(getFixturePath('before.ini'), getFixturePath('after.ini'));
      const expected = fs.readFileSync(getFixturePath('result3'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});
