import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();


const useFirebase = () => {

    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // const signInWithGithub = () => {
    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             setUser(result.user)
    //             setError('')
    //         })
    //         .catch(error => {
    //             setError(error.message)
    //         })
    // }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            user && setUser(user)
        })
    }, [])
    return {
        signInWithGoogle,
        user,
        error,
        logout,
        // signInWithGithub
    }
}

export default useFirebase;