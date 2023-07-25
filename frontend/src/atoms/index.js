import { atom, useRecoilState } from "recoil"


const AuthState = atom({
    key: "AuthState" , 
    default: {loggedIn: false}

})

export const useAuthState = () => useRecoilState(AuthState)


const PostState = atom({
    key: "PostState" , 
    default: []
})

export const usePostState = () => useRecoilState(PostState)



