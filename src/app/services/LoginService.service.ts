import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/environments/environment";
import { signOut } from "firebase/auth";


@Injectable()
export class LoginService {
    token:any;
    constructor(private router: Router) {
    }
    logIn(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
            .then(
                (credencialesUsuario) => {
                    // Signed in
                    const user = credencialesUsuario.user;
                    // console.log('Logueado: ', user);
                    user.getIdToken().then(
                        token => {
                            this.token = token;
                            this.router.navigate(['/']);
                        }
                    );
                }
            ).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('No logueado: ', errorCode, errorMessage);
            });
    }
    getIdToken() {
        return this.token;
    }
    isAuth() {
        return this.token != null
    }
    logOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('deslogueado')
            this.token = null;
            this.router.navigate(['login']);
        }).catch((error) => {
            // An error happened.
            console.log('error al desloguear',error)
        });
    }
}