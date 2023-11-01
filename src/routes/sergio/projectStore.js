import { writable } from "svelte/store";

function getProjectSchema() {
  const projectSchema = {
    metadata: {
      title: "",
      author: "",
      date: Date.now(),
    },
    collectionStore: writable([])
  }
  return writable(projectSchema)
}

export let projectStore = getProjectSchema();