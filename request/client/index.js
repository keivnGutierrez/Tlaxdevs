import { db } from '../../firebaseConf/index'

// Add a second document with a generated ID.
export const addPosibleClient = async ({
    name = '',
    mail = "",
    phone = ""
}) => {
    try {
        const docRef = await db.collection("posibleClients").add({ name, mail, phone });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const addSuscribe = async ({ mail = "" }) => {
    try {
        const docRef = await db.collection("ListEmailSuscribe").add({ mail });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}