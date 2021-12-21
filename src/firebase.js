
import { ref as VueRef } from 'vue'
import { initializeApp } from 'firebase/app'
import {
    getDatabase, ref, onValue,
    set, get, push, child
} from 'firebase/database'

// Configs
const firebaseConfig = {
  apiKey: "AIzaSyDkyKYbItBat6mwJbX6xR10yyGgD7uAw6Y",
  authDomain: "see-flower.firebaseapp.com",
  databaseURL: "https://see-flower-default-rtdb.firebaseio.com",
  projectId: "see-flower",
  storageBucket: "see-flower.appspot.com",
  messagingSenderId: "558040913033",
  appId: "1:558040913033:web:08ac6c6555404ab8b06258"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getDatabase()

//  --------- get top rated products --------
const getProducts = () => {
    const products = VueRef([])
    const oneProduct = VueRef(null)
    const error = VueRef(null)
    
    const load = async() => {
        const allProducts = ref(db, 'products/');

        onValue(allProducts, (snapshot) => {
          const data = snapshot.val();
          products.value = { ...data }
        })
    }
    
    const getOneProduct = (productId) => {
      const getProduct = ref(db, 'products/' + productId);
      onValue(getProduct, (snapshot) => {
        const data = snapshot.val()
        oneProduct.value = { ...data }
      })
    }
    
    const addProduct = (name, description, rate, image) => {
      const newPostProductKey = push(child(ref(db), 'products')).key;
      set(ref(db, 'products/' + newPostProductKey), {
        name: name,
        description: description,
        image: image,
        rate: rate
      })
    }
    return { products, error, load, addProduct, getOneProduct, oneProduct }
}

export default getProducts









//  --------- get ads products --------
// const getAdProducts = () => {
//     const adProducts = VueRef([])
    
//     const loadAd = () => {
//         const allAdProducts = ref(db, 'products/ad-products/');

//         get(allAdProducts)
//         .then((snapshot) => {
//           if(snapshot) {
//               const data = snapshot.val()
//               adProducts.value = data
//           } else {
//             alert("No data Found")
//           }
//         })
//         .catch((err) => {
//           console.log(err.message)
//         })
//     }
//     return { adProducts, loadAd }
// }

// export default { getTopRatedProducts, getAdProducts }

