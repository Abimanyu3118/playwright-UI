import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

/**
 * Fetch a row by testCaseId from CSV
 * Automatically trims and ignores empty cells
 */
export function fetchRowById(fileName: string, testCaseId: string, scenarioId: string): Record<string, string | undefined> | undefined {
  const filePath = path.resolve(__dirname, `../../src/testData/${fileName}`);
  const csvContent = fs.readFileSync(filePath, 'utf-8');

  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string | undefined>[];

  const row = records.find(r => r.testCaseId === testCaseId && r.scenarioId == scenarioId);

  if (!row) return undefined;

  // Normalize empty strings → undefined
  Object.keys(row).forEach(key => {
    if (row[key] === '' || row[key] === null) row[key] = undefined;
  });

  return row;
}
