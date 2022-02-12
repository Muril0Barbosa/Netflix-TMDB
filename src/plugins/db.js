import app from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

export const db = getDatabase(app);
//const userName = ref("user/name");
//const WhatchList = ref( "user/watchlist");

export function writeUserName(user) {
    set(ref(db, 'user/name'), {
       nome: user
      });

}

export function writeWhatchList(JSON) {
    set(ref(db, 'user/watchlist'), {
        nomeDoFilme: JSON
       });
}



  

