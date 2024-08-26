import { parse } from "csv-parse/.";
import fs from "fs";

export class CsvConverter {
  public results: string | null = null;

  constructor(private csv: string) {
    this.csv = csv;
  }

  public async convert(): Promise<void> {
    let results: string[] = [];

    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(this.csv)
        .pipe(parse({ columns: true }))
        .on("data", (row: any) => {
          results.push(row);
        })
        .on("end", () => {
          this.results = JSON.stringify(results);
          resolve();
        })
        .on("error", (error: any) => {
          reject(error);
        });
    });
  }
}
