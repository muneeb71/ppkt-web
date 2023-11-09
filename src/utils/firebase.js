import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  //   apiKey: "AIzaSyCmIJ_fnIISF2pRcLW48puJ1TRMdfcWE14",
  // authDomain: "metaversedog-42f3d.firebaseapp.com",
  // projectId: "metaversedog-42f3d",
  // storageBucket: "metaversedog-42f3d.appspot.com",
  // messagingSenderId: "1055903085959",
  // appId: "1:1055903085959:web:37af113308e42c22fccf22",
  // measurementId: "G-NJR7NY411R"

  apiKey: "AIzaSyAaqgdnFQDO-HWC29uE7fIMiPcYCz5E7xE",
  authDomain: "metaversedog-2d21f.firebaseapp.com",
  projectId: "metaversedog-2d21f",
  storageBucket: "metaversedog-2d21f.appspot.com",
  messagingSenderId: "139790214408",
  appId: "1:139790214408:web:8cdcc356e56598ce5d38bd",
  measurementId: "G-YM4CTB69DY",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
