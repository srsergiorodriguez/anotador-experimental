import { writable } from "svelte";

function getCollectionSchema() {
  const collectionSchema = {
    title: "",
    author: "",
    date: Date.now(),
    inventory: writable([])
  }
  return writable(collectionSchema)
}

export let collectionStore = getCollectionSchema();