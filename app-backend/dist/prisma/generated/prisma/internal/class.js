"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "sqlite",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../prisma/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\nmodel User {\n  id           Int      @id @default(autoincrement())\n  name         String\n  email        String   @unique\n  createdAt    DateTime @default(now())\n  profile      Profile?\n  passwordHash String   @default(\"$2b$10$21V92Zk9GwSDXAdgqRr/oul1AN7/roDDo.q/eqCW35OdH1wUQDg9O\")\n}\n\nmodel Profile {\n  id        Int       @id @default(autoincrement())\n  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId    Int       @unique\n  fullName  String\n  birthDate DateTime?\n  avatarUrl String?\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n}\n\nmodel Plan {\n  id    Int    @id @default(autoincrement())\n  name  String\n  price Float\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"profile\",\"kind\":\"object\",\"type\":\"Profile\",\"relationName\":\"ProfileToUser\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Profile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProfileToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fullName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Plan\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"user\",\"profile\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Profile.findUnique\",\"Profile.findUniqueOrThrow\",\"Profile.findFirst\",\"Profile.findFirstOrThrow\",\"Profile.findMany\",\"Profile.createOne\",\"Profile.createMany\",\"Profile.createManyAndReturn\",\"Profile.updateOne\",\"Profile.updateMany\",\"Profile.updateManyAndReturn\",\"Profile.upsertOne\",\"Profile.deleteOne\",\"Profile.deleteMany\",\"Profile.groupBy\",\"Profile.aggregate\",\"Plan.findUnique\",\"Plan.findUniqueOrThrow\",\"Plan.findFirst\",\"Plan.findFirstOrThrow\",\"Plan.findMany\",\"Plan.createOne\",\"Plan.createMany\",\"Plan.createManyAndReturn\",\"Plan.updateOne\",\"Plan.updateMany\",\"Plan.updateManyAndReturn\",\"Plan.upsertOne\",\"Plan.deleteOne\",\"Plan.deleteMany\",\"Plan.groupBy\",\"Plan.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"price\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"userId\",\"fullName\",\"birthDate\",\"avatarUrl\",\"createdAt\",\"updatedAt\",\"email\",\"passwordHash\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"disconnect\",\"delete\",\"connect\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "kwEfMAkCAABtACA-AABsADA_AAAGABBAAABsADBBAgAAAAFCAQBZACFTQABpACFVAQAAAAFWAQBZACEBAAAAAQAgCwEAAGoAID4AAGYAMD8AAAMAEEAAAGYAMEECAFgAIU8CAFgAIVABAFkAIVFAAGcAIVIBAGgAIVNAAGkAIVRAAGkAIQEAAAADACABAAAAAQAgCQIAAG0AID4AAGwAMD8AAAYAEEAAAGwAMEECAFgAIUIBAFkAIVNAAGkAIVUBAFkAIVYBAFkAIQECAACOAQAgAwAAAAYAIAUAAAcAMAYAAAEAIAMAAAAGACAFAAAHADAGAAABACADAAAABgAgBQAABwAwBgAAAQAgBgIAAI0BACBBAgAAAAFCAQAAAAFTQAAAAAFVAQAAAAFWAQAAAAEBCgAACwAgBUECAAAAAUIBAAAAAVNAAAAAAVUBAAAAAVYBAAAAAQEKAAANADABCgAADQAwBgIAAIcBACBBAgB1ACFCAQBzACFTQAB-ACFVAQBzACFWAQBzACECAAAAAQAgCgAAEAAgBUECAHUAIUIBAHMAIVNAAH4AIVUBAHMAIVYBAHMAIQIAAAAGACAKAAASACACAAAABgAgCgAAEgAgAwAAAAEAIBEAAAsAIBIAABAAIAEAAAABACABAAAABgAgBRcAAIIBACAYAACDAQAgGQAAhgEAIBoAAIUBACAbAACEAQAgCD4AAGsAMD8AABkAEEAAAGsAMEECAE4AIUIBAE8AIVNAAF4AIVUBAE8AIVYBAE8AIQMAAAAGACAFAAAYADAWAAAZACADAAAABgAgBQAABwAwBgAAAQAgCwEAAGoAID4AAGYAMD8AAAMAEEAAAGYAMEECAAAAAU8CAAAAAVABAFkAIVFAAGcAIVIBAGgAIVNAAGkAIVRAAGkAIQEAAAAcACABAAAAHAAgAwEAAIEBACBRAAB2ACBSAAB2ACADAAAAAwAgBQAAHwAwBgAAHAAgAwAAAAMAIAUAAB8AMAYAABwAIAMAAAADACAFAAAfADAGAAAcACAIAQAAgAEAIEECAAAAAU8CAAAAAVABAAAAAVFAAAAAAVIBAAAAAVNAAAAAAVRAAAAAAQEKAAAjACAHQQIAAAABTwIAAAABUAEAAAABUUAAAAABUgEAAAABU0AAAAABVEAAAAABAQoAACUAMAEKAAAlADAIAQAAfwAgQQIAdQAhTwIAdQAhUAEAcwAhUUAAfAAhUgEAfQAhU0AAfgAhVEAAfgAhAgAAABwAIAoAACgAIAdBAgB1ACFPAgB1ACFQAQBzACFRQAB8ACFSAQB9ACFTQAB-ACFUQAB-ACECAAAAAwAgCgAAKgAgAgAAAAMAIAoAACoAIAMAAAAcACARAAAjACASAAAoACABAAAAHAAgAQAAAAMAIAcXAAB3ACAYAAB4ACAZAAB7ACAaAAB6ACAbAAB5ACBRAAB2ACBSAAB2ACAKPgAAWwAwPwAAMQAQQAAAWwAwQQIATgAhTwIATgAhUAEATwAhUUAAXAAhUgEAXQAhU0AAXgAhVEAAXgAhAwAAAAMAIAUAADAAMBYAADEAIAMAAAADACAFAAAfADAGAAAcACAGPgAAVwAwPwAANwAQQAAAVwAwQQIAAAABQgEAWQAhQwgAWgAhAQAAADQAIAEAAAA0ACAGPgAAVwAwPwAANwAQQAAAVwAwQQIAWAAhQgEAWQAhQwgAWgAhAAMAAAA3ACAFAAA4ADAGAAA0ACADAAAANwAgBQAAOAAwBgAANAAgAwAAADcAIAUAADgAMAYAADQAIANBAgAAAAFCAQAAAAFDCAAAAAEBCgAAPAAgA0ECAAAAAUIBAAAAAUMIAAAAAQEKAAA-ADABCgAAPgAwA0ECAHUAIUIBAHMAIUMIAHQAIQIAAAA0ACAKAABBACADQQIAdQAhQgEAcwAhQwgAdAAhAgAAADcAIAoAAEMAIAIAAAA3ACAKAABDACADAAAANAAgEQAAPAAgEgAAQQAgAQAAADQAIAEAAAA3ACAFFwAAbgAgGAAAbwAgGQAAcgAgGgAAcQAgGwAAcAAgBj4AAE0AMD8AAEoAEEAAAE0AMEECAE4AIUIBAE8AIUMIAFAAIQMAAAA3ACAFAABJADAWAABKACADAAAANwAgBQAAOAAwBgAANAAgBj4AAE0AMD8AAEoAEEAAAE0AMEECAE4AIUIBAE8AIUMIAFAAIQ0XAABSACAYAABTACAZAABSACAaAABSACAbAABSACBEAgAAAAFFAgAAAARGAgAAAARHAgAAAAFIAgAAAAFJAgAAAAFKAgAAAAFLAgBWACEOFwAAUgAgGgAAVQAgGwAAVQAgRAEAAAABRQEAAAAERgEAAAAERwEAAAABSAEAAAABSQEAAAABSgEAAAABSwEAVAAhTAEAAAABTQEAAAABTgEAAAABDRcAAFIAIBgAAFMAIBkAAFMAIBoAAFMAIBsAAFMAIEQIAAAAAUUIAAAABEYIAAAABEcIAAAAAUgIAAAAAUkIAAAAAUoIAAAAAUsIAFEAIQ0XAABSACAYAABTACAZAABTACAaAABTACAbAABTACBECAAAAAFFCAAAAARGCAAAAARHCAAAAAFICAAAAAFJCAAAAAFKCAAAAAFLCABRACEIRAIAAAABRQIAAAAERgIAAAAERwIAAAABSAIAAAABSQIAAAABSgIAAAABSwIAUgAhCEQIAAAAAUUIAAAABEYIAAAABEcIAAAAAUgIAAAAAUkIAAAAAUoIAAAAAUsIAFMAIQ4XAABSACAaAABVACAbAABVACBEAQAAAAFFAQAAAARGAQAAAARHAQAAAAFIAQAAAAFJAQAAAAFKAQAAAAFLAQBUACFMAQAAAAFNAQAAAAFOAQAAAAELRAEAAAABRQEAAAAERgEAAAAERwEAAAABSAEAAAABSQEAAAABSgEAAAABSwEAVQAhTAEAAAABTQEAAAABTgEAAAABDRcAAFIAIBgAAFMAIBkAAFIAIBoAAFIAIBsAAFIAIEQCAAAAAUUCAAAABEYCAAAABEcCAAAAAUgCAAAAAUkCAAAAAUoCAAAAAUsCAFYAIQY-AABXADA_AAA3ABBAAABXADBBAgBYACFCAQBZACFDCABaACEIRAIAAAABRQIAAAAERgIAAAAERwIAAAABSAIAAAABSQIAAAABSgIAAAABSwIAUgAhC0QBAAAAAUUBAAAABEYBAAAABEcBAAAAAUgBAAAAAUkBAAAAAUoBAAAAAUsBAFUAIUwBAAAAAU0BAAAAAU4BAAAAAQhECAAAAAFFCAAAAARGCAAAAARHCAAAAAFICAAAAAFJCAAAAAFKCAAAAAFLCABTACEKPgAAWwAwPwAAMQAQQAAAWwAwQQIATgAhTwIATgAhUAEATwAhUUAAXAAhUgEAXQAhU0AAXgAhVEAAXgAhCxcAAGIAIBoAAGUAIBsAAGUAIERAAAAAAUVAAAAABUZAAAAABUdAAAAAAUhAAAAAAUlAAAAAAUpAAAAAAUtAAGQAIQ4XAABiACAaAABjACAbAABjACBEAQAAAAFFAQAAAAVGAQAAAAVHAQAAAAFIAQAAAAFJAQAAAAFKAQAAAAFLAQBhACFMAQAAAAFNAQAAAAFOAQAAAAELFwAAUgAgGgAAYAAgGwAAYAAgREAAAAABRUAAAAAERkAAAAAER0AAAAABSEAAAAABSUAAAAABSkAAAAABS0AAXwAhCxcAAFIAIBoAAGAAIBsAAGAAIERAAAAAAUVAAAAABEZAAAAABEdAAAAAAUhAAAAAAUlAAAAAAUpAAAAAAUtAAF8AIQhEQAAAAAFFQAAAAARGQAAAAARHQAAAAAFIQAAAAAFJQAAAAAFKQAAAAAFLQABgACEOFwAAYgAgGgAAYwAgGwAAYwAgRAEAAAABRQEAAAAFRgEAAAAFRwEAAAABSAEAAAABSQEAAAABSgEAAAABSwEAYQAhTAEAAAABTQEAAAABTgEAAAABCEQCAAAAAUUCAAAABUYCAAAABUcCAAAAAUgCAAAAAUkCAAAAAUoCAAAAAUsCAGIAIQtEAQAAAAFFAQAAAAVGAQAAAAVHAQAAAAFIAQAAAAFJAQAAAAFKAQAAAAFLAQBjACFMAQAAAAFNAQAAAAFOAQAAAAELFwAAYgAgGgAAZQAgGwAAZQAgREAAAAABRUAAAAAFRkAAAAAFR0AAAAABSEAAAAABSUAAAAABSkAAAAABS0AAZAAhCERAAAAAAUVAAAAABUZAAAAABUdAAAAAAUhAAAAAAUlAAAAAAUpAAAAAAUtAAGUAIQsBAABqACA-AABmADA_AAADABBAAABmADBBAgBYACFPAgBYACFQAQBZACFRQABnACFSAQBoACFTQABpACFUQABpACEIREAAAAABRUAAAAAFRkAAAAAFR0AAAAABSEAAAAABSUAAAAABSkAAAAABS0AAZQAhC0QBAAAAAUUBAAAABUYBAAAABUcBAAAAAUgBAAAAAUkBAAAAAUoBAAAAAUsBAGMAIUwBAAAAAU0BAAAAAU4BAAAAAQhEQAAAAAFFQAAAAARGQAAAAARHQAAAAAFIQAAAAAFJQAAAAAFKQAAAAAFLQABgACELAgAAbQAgPgAAbAAwPwAABgAQQAAAbAAwQQIAWAAhQgEAWQAhU0AAaQAhVQEAWQAhVgEAWQAhVwAABgAgWAAABgAgCD4AAGsAMD8AABkAEEAAAGsAMEECAE4AIUIBAE8AIVNAAF4AIVUBAE8AIVYBAE8AIQkCAABtACA-AABsADA_AAAGABBAAABsADBBAgBYACFCAQBZACFTQABpACFVAQBZACFWAQBZACENAQAAagAgPgAAZgAwPwAAAwAQQAAAZgAwQQIAWAAhTwIAWAAhUAEAWQAhUUAAZwAhUgEAaAAhU0AAaQAhVEAAaQAhVwAAAwAgWAAAAwAgAAAAAAABXgEAAAABBV4IAAAAAV8IAAAAAWAIAAAAAWEIAAAAAWIIAAAAAQVeAgAAAAFfAgAAAAFgAgAAAAFhAgAAAAFiAgAAAAEAAAAAAAABXkAAAAABAV4BAAAAAQFeQAAAAAEFEQAAjwEAIBIAAJIBACBZAACQAQAgWgAAkQEAIF0AAAEAIAMRAACPAQAgWQAAkAEAIF0AAAEAIAECAACOAQAgAAAAAAAHEQAAiAEAIBIAAIsBACBZAACJAQAgWgAAigEAIFsAAAMAIFwAAAMAIF0AABwAIAZBAgAAAAFQAQAAAAFRQAAAAAFSAQAAAAFTQAAAAAFUQAAAAAECAAAAHAAgEQAAiAEAIAMAAAADACARAACIAQAgEgAAjAEAIAgAAAADACAKAACMAQAgQQIAdQAhUAEAcwAhUUAAfAAhUgEAfQAhU0AAfgAhVEAAfgAhBkECAHUAIVABAHMAIVFAAHwAIVIBAH0AIVNAAH4AIVRAAH4AIQMRAACIAQAgWQAAiQEAIF0AABwAIAMBAACBAQAgUQAAdgAgUgAAdgAgBUECAAAAAUIBAAAAAVNAAAAAAVUBAAAAAVYBAAAAAQIAAAABACARAACPAQAgAwAAAAYAIBEAAI8BACASAACTAQAgBwAAAAYAIAoAAJMBACBBAgB1ACFCAQBzACFTQAB-ACFVAQBzACFWAQBzACEFQQIAdQAhQgEAcwAhU0AAfgAhVQEAcwAhVgEAcwAhAQIEAgEBAAEAAAAFFwAHGAAIGQAJGgAKGwALAAAAAAAFFwAHGAAIGQAJGgAKGwALAQEAAQEBAAEFFwAQGAARGQASGgATGwAUAAAAAAAFFwAQGAARGQASGgATGwAUAAAABRcAGhgAGxkAHBoAHRsAHgAAAAAABRcAGhgAGxkAHBoAHRsAHgMCAQQFAQcIAQgJAQkKAQsMAQwOAw0PBA4RAQ8TAxAUBRMVARQWARUXAxwaBh0bDB4dAh8eAiAgAiEhAiIiAiMkAiQmAyUnDSYpAicrAygsDiktAiouAisvAywyDy0zFS41Fi82FjA5FjE6FjI7FjM9FjQ_AzVAFzZCFjdEAzhFGDlGFjpHFjtIAzxLGT1MHw"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map