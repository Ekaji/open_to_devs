import { NextRequest, NextResponse } from "next/server";
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest, res: NextResponse ) {
    const jsonDirectory = path.join(process.cwd(), 'data');

    const fileContents = await fs.readFile(jsonDirectory + '/countries+states+cities.json', 'utf8');
   return NextResponse.json(JSON.parse(fileContents));
}
