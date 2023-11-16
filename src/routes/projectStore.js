import { writable } from "svelte/store";

function getProjectSchema() {
  const projectSchema = {
    metadata: {
      title: "TEST TITLE",
      author: "TEST AUTHOR",
      date: Date.now(),
    },
    collectionStore: writable([]) // {uid (generado por el programa), name, manifest, urlIIIF}
  }
  return writable(projectSchema)
}

export let projectStore = getProjectSchema();