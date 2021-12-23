
import { ref as VueRef } from 'vue'
import { initializeApp } from 'firebase/app'
import {
    getDatabase, ref, onValue,
    set, push, child, remove
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

// Main funtion to get products
const getProducts = () => {
    const topRatedProducts = VueRef([])
    const hookProducts = VueRef([])
    const adProducts = VueRef([])
    const weeklyTopRatedProducts = VueRef([])

    const inCartProducts = VueRef(null)

    const allProducts = VueRef([])

    // Store queryed one product for details here
    const oneProduct = VueRef(null)

    // Store any occured
    const error = VueRef(null)

    // const load data function
    const load = async (category, storeIn) => {
      const loadFrom = ref(db, category)

      onValue(loadFrom, (snapshot) => {
        const data = snapshot.val()
        storeIn.value = { ...data }
      })
    }

    // get one product
    const getOneProduct = (category, productId) => {
      const getProduct = ref(db, 'products/' + category +"/"+ productId);
      onValue(getProduct, (snapshot) => {
        const data = snapshot.val()
        oneProduct.value = { ...data }
      })
    }

    // add product to cart
    const addToCart = (name, image, price, productID) => {
      const newInCartProductKey = push(child(ref(db), "inCart")).key;
      set(ref(db, "inCart/" + newInCartProductKey), {
        id: productID,
        name: name,
        price: price,
        image: image
      })
    }

    // remove product from cart
    const removeFromCart = () => {
      console.log("Clicked")
      remove(ref(db, "inCart/-Mr_MqfpdSU7GaqVEJcw"))
    }

    // ====================================
    // function to add product to firebase
    // const addProduct = (name, description, rate, image) => {
    //   const newPostProductKey = push(child(ref(db), 'products')).key;
    //   set(ref(db, 'products/category' + newPostProductKey), {
    //     id: newPostProductKey,
    //     name: name,
    //     description: description,
    //     image: image,
    //     rate: rate,
    //     review: [{"username": "John Doe", "message": "I love the products"}]
    //   })
    // }
    // ====================================

    return {
      load, topRatedProducts, hookProducts, adProducts, weeklyTopRatedProducts, allProducts,
      getOneProduct, oneProduct, inCartProducts,
      // addProduct,
      addToCart, removeFromCart,
      error
    }
}

export default getProducts