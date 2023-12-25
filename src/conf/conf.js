const conf = {
    appwriteUrl: String(process.env.JSON_JOURNAL_APPWRITE_URL),
    appwriteProjectId: String(process.env.JSON_JOURNAL_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.JSON_JOURNAL_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.env.JSON_JOURNAL_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(process.env.JSON_JOURNAL_APPWRITE_BUCKET_ID)
}

export default conf