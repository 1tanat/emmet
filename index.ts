import { readAbbreviation } from "./reader.ts";
import { tokenizeText } from "./tokenizer";
import fs from "fs";

export function emmet(): void {
  const html = fs.readFileSync("index.html", "utf-8");
  console.log(html);
}
