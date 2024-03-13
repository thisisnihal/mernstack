import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

/* https://appwrite.io/docs/products/databases/quick-start  */
export class Service {
    const client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client); 
    } 

    // post related service

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // used as unique ID
                // object to store
                {
                    title,
                    content,
                    featuredImage, // fileId not the actual blob file
                    status,
                    userId,
                }

            )
        } catch (error) {
            console.error("Appwrite service :: createPost :: error", error)
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
           return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug, // documnet id
            {
                title,
                content,
                featuredImage,  // fileId
                status
            }
           )
        } catch (error) {
            console.error("Appwrite service :: updatePost :: error", error)
        }
    }
    async deletePost(slug) {
        try {
             await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug // documnet id
           )
           return true; // successfully deleted
        } catch (error) {
            console.error("Appwrite service :: deletePost :: error", error);
            return false; // error while deleteting;
        }
    }
    async getPost(slug) {
        try {
           return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug // documnet id
           )
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", error);
        }
    }
    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
             return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,

            // query to filter data (if nothing is passed in paramter then we can use the below code)
            // [
            //     Query.equal('status', "active");
            // ]
           )
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", error);
        }
    }

    // file services

    // parameter is file is of type "blob"
    async uploadFile(file) {
        try {
            // it will return an ID
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", error);
            return false; // error while uploading 
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }
    // this method is fast so we dont need async await
    getFilePreview(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();
export default Service;
