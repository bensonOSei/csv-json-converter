import { parse } from "csv-parse";
import fs from "fs";

export class CsvConverter {
  public results: string[] = [];

  constructor(private csv: string) {
    this.csv = csv;
  }

  public async convert(): Promise<void> {

    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(this.csv)
        .pipe(parse({ columns: true }))
        .on("data", (row: any) => {
          this.results.push(row);
        })
        .on("end", () => {
          resolve();
        })
        .on("error", (error: any) => {
          reject(error);
        });
    });
  }
}
