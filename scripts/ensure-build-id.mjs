import { existsSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";

const buildIdPath = ".next-build/BUILD_ID";

// Next 15 can omit BUILD_ID on Node 24/Windows even after a successful build.
// `next start` only needs a stable opaque identifier, so provide one if absent.
if (!existsSync(buildIdPath)) {
  writeFileSync(buildIdPath, `portfolio-${randomBytes(8).toString("hex")}`);
  console.log("Created missing .next-build/BUILD_ID for production start.");
}
