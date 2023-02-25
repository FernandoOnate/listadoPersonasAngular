import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/environments/environment";

@Injectable()
export class LoginService {
    token: string;
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
}