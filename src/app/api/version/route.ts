/* eslint-disable @typescript-eslint/no-unused-vars */
import versionPackage from "../../../../package.json";

export async function GET(request: Request) {
  const newVersion = versionPackage.version;
  return Response.json({ newVersion });
}
