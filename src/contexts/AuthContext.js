import React, { useContext, useState, useEffect } from "react";
import { auth, database } from "../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    function signup(email, password, name) {
        auth.createUserWithEmailAndPassword(email, password);
        auth.onAuthStateChanged((user) => {
            if (user) {
                database.ref("users/" + user.uid).set({
                    username: name,
                    email: email,
                });
            }
        });
    }

    function login(email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                setCurrentUser(response.user);
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(
                    `An error happened! ${error.message}, the error code is ${error.code}`
                );
                setErrorMessage(`An error happened! ${error.message}`);
            });
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setCurrentUser(null);
        }, 60 * 1000 * 60 * 8);

        if (currentUser === null) {
            auth.signOut();
        }

        return () => clearTimeout(timeOut);
    }, [currentUser]);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        errorMessage,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
