import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import findDiffrence from '../src';

const getRigthPath = {
  json: fileName => path.join(__dirname, '__fixtures__/json', fileName),
  yaml: fileName => path.join(__dirname, '__fixtures__/yaml', fileName),
  ini: fileName => path.join(__dirname, '__fixtures__/ini', fileName),
};

describe('findDiffrence', () => {
  context('compare json files', () => {
    it('returns difference in json files', () => {
      const result = findDiffrence(getRigthPath.json('before.json'), getRigthPath.json('after.json'));
      const expected = fs.readFileSync(getRigthPath.json('result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare yaml files', () => {
    it('returns difference in yaml files', () => {
      const result = findDiffrence(getRigthPath.yaml('before.yaml'), getRigthPath.yaml('after.yaml'));
      const expected = fs.readFileSync(getRigthPath.yaml('result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare ini files', () => {
    it('returns difference in ini files', () => {
      const result = findDiffrence(getRigthPath.ini('before.ini'), getRigthPath.ini('after.ini'));
      const expected = fs.readFileSync(getRigthPath.ini('result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});

describe('\n  findDiffrence in recursive files', () => {
  context('compare json files', () => {
    it('returns difference in json files', () => {
      const result = findDiffrence(getRigthPath.json('recursive_before.json'), getRigthPath.json('recursive_after.json'));
      const expected = fs.readFileSync(getRigthPath.json('recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare yaml files', () => {
    it('returns difference in yaml files', () => {
      const result = findDiffrence(getRigthPath.yaml('recursive_before.yaml'), getRigthPath.yaml('recursive_after.yaml'));
      const expected = fs.readFileSync(getRigthPath.yaml('recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare ini files', () => {
    it('returns difference in ini files', () => {
      const result = findDiffrence(getRigthPath.ini('recursive_before.ini'), getRigthPath.ini('recursive_after.ini'));
      const expected = fs.readFileSync(getRigthPath.ini('recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});
