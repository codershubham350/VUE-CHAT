import { projectFirestore } from "../firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log("snapshot");
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.error(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
