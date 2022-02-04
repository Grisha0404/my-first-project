type PostType = {
    id: number
    message: string
    likesCounts: number
}
type DialogsType = {
    id: number
    name: string
    ava: string
}
type MessagesType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: PostType
    newPostText: string
}
type MessagesPageType = {
    dialogs: DialogsType
    messages: MessagesPageType
}

type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

let rerenderEntireTree = () => {
    console.log('change')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounts: 11},
            {id: 2, message: "It's my first post!", likesCounts: 25}
        ],
        newPostText: 'it-kamasutra'
    },
    messagesPage: {
        dialogs: [
            {
                id: 1,
                name: 'Pasha',
                ava: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png'
            },
            {
                id: 2,
                name: 'Olya',
                ava: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
            },
            {
                id: 3,
                name: 'Sasha',
                ava: 'https://iconape.com/wp-content/png_logo_vector/avatar-11.png'
            },
            {
                id: 4,
                name: 'Leha',
                ava: 'https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf'
            }
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'}
        ]
    }
}
export let addPosts = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounts: postMessage.length
    };
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}
export let addMessage = (textMessage) => {
    let newMessage = {
        id: 5,
        message: textMessage
    };
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree();
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;