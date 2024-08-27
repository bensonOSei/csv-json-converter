import { parse } from "csv-parse";
import fs from "fs";

export class CsvConverter<T = Record<string, any>> {
  public results: T[] = [];

  constructor(private readonly csvFilePath: string) {}

  public async convert(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.createReadStream(this.csvFilePath)
        .pipe(parse({ columns: true }))
        .on("data", (row: T) => {
          this.results.push(row);
        })
        .on("end", () => resolve())
        .on("error", (error: Error) => reject(error));
    });
  }
}
