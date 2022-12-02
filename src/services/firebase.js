import { initializeApp } from "firebase/app";
import {
      getFirestore,
      collection,
      getDocs,
      doc,
      getDoc,
      query,
      where,
      addDoc,
      writeBatch,
      documentId,
    } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCA-_GK5SNRcrR4-nKoMfZQAQi1LNHrHfE",
  authDomain: "percha-proyectocoder.firebaseapp.com",
  projectId: "percha-proyectocoder",
  storageBucket: "percha-proyectocoder.appspot.com",
  messagingSenderId: "825983495503",
  appId: "1:825983495503:web:078daa7990f4f9c00fe93a"
};


const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);


export async function getSingleItemFromAPI(id) {
  try { 
    const docRef = doc(DB, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("El producto no existe");
    }
  }
  catch(error){
    throw error;
  }
}


export async function getItemsFromAPI() {
  try {
    const collectionProducts = collection(DB, "products");
    let respuesta = await getDocs(collectionProducts);
    const products = respuesta.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));

  const productsSnap = await getDocs(myQuery);

  const emptyArray = productsSnap.docs.length < 1;
  if (emptyArray) throw new Error("Categoría sin resultados");

  const products = productsSnap.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });

  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);

  return docRef.id;
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductsRef = collection(DB, "products");
  const collectionOrdersRef = collection(DB, "buyorders");
  const batch = writeBatch(DB);

  let arrayIds = buyOrderData.items.map((item) => {
    return item.id;
  });

  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

  let productsSnapshot = await getDocs(q);

  productsSnapshot.docs.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
    let stockActualizado = stockActual - itemInCart.count;

    batch.update(doc.ref, { stock: stockActualizado });
  });

  const docOrderRef = doc(collectionOrdersRef);
  batch.set(docOrderRef, buyOrderData);

  batch.commit();

  return docOrderRef.id;
}
