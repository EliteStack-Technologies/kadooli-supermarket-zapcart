"use server";

import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

export const readExcelFile = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "products.xlsx");
    const fileBuffer = fs.readFileSync(filePath);

    const workbook = XLSX.read(fileBuffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Error reading Excel file:", error);
    return [];
  }
};
