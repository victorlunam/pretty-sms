import apiHandler from "./apiHandler"

function findMultipleDocuments<T>(data: {
  collection: string
}) {
  return apiHandler.post<{
    documents: T[]
  }>("action/find", data)
}

function insertDocument<T>(data: T & { collection: string }) {
  const { collection, ...rest } = data

  return apiHandler.post("action/insertOne", {
    collection: collection,
    document: rest
  })
}

export default {
  findMultipleDocuments,
  insertDocument
}