import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { User, Role } from '../types';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  isAdmin: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        const userDocRef = doc(db, 'users', fbUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setCurrentUser(userDoc.data() as User);
        } else {
          // Create new user if doesn't exist
          const newUser: User = {
            id: fbUser.uid,
            name: fbUser.displayName || 'Guest',
            email: fbUser.email || '',
            role: fbUser.email === 'cascokroll@gmail.com' ? 'admin' : 'customer', // Set master admin if email matches
            photo: fbUser.photoURL || '',
          };
          await setDoc(userDocRef, newUser);
          setCurrentUser(newUser);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    isAdmin: currentUser?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
