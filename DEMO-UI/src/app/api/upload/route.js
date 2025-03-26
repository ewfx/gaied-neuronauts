import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) return NextResponse.json({ message: "No file uploaded" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public/uploads", file.name);

    await writeFile(filePath, buffer);
    return NextResponse.json({ message: "✅ File uploaded successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "❌ Upload failed!" }, { status: 500 });
  }
}
