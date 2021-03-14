import { join } from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const types = loadFilesSync(join(__dirname, "/types"), {
  extensions: ["graphql"],
});

const typeDefs = mergeTypeDefs(types);

export { typeDefs };
