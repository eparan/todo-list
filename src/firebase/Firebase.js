import { db } from './firebase.config';

const collection = "tasks";

export const addTaskRequest = async (task) => {
    return await db.collection(collection)
        .add(task);
}

export const getTasksRequest = async () => {
    return await db.collection(collection).get().then(res => {
        let tasks = [];
        res.docs.map(doc => {
            let data = doc.data();
            let { isChecked, description, created } = data;
            tasks.push({
                id: doc.id,
                isChecked,
                description,
                created
            })
        })
        return tasks;
    })
}

export const checkTaskRequest = async (id, isChecked) => {
    return await db.collection(collection)
        .doc(id)
        .set({
            isChecked
        }, { merge: true })
}

export const removeTaskRequest = async (id) => {
    return await db.collection(collection)
        .doc(id)
        .delete()
}

