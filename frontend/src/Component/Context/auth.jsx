// // import { createContext, useContext, useState, ReactNode } from "react";

// // interface Auth {
// //   user: null | string |object;
// //   token: string;
// // }

// // interface AuthContextType {
// //   auth: Auth;
// //   setAuth: React.Dispatch<React.SetStateAction<Auth>>;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // interface AuthProviderProps {
// //   children: ReactNode;
// // }

// // const AuthProvider = ({ children }: AuthProviderProps) => {
// //   const [auth, setAuth] = useState<Auth>({
// //     user: null,
// //     token: "",
// //   });

// //   return (
// //     <AuthContext.Provider value={{ auth, setAuth }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (context === undefined) {
// //     throw new Error("useAuth must be used within an AuthProvider");
// //   }
// //   return context;
// // };

// // export { useAuth, AuthProvider };

// import { createContext,useContext, useState } from "react";

// const AuthContext  =createContext();

// const AuthProvider  =({children})=>{
// const [auth,setAuth] =useState({
//     user:null,
//     token:""
// })

// return(
//     <AuthContext.Provider value={{auth,setAuth}}>
//     {children}
//     </AuthContext.Provider>
// )

// }

// const useAuth =useContext(AuthContext)
// export {useAuth,AuthProvider}
