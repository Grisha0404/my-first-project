let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounts: 11},
            {id: 2, message: "It's my first post!", likesCounts: 25}
        ]
    },
    messagesPage: {
        dialogs: [
            {
                id: 1,
                name: 'Pasha',
                ava: <img src='https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png' alt={'ava'}/>
            },
            {id: 2, name: 'Olya', ava: <img src='https://cdn-icons-png.flaticon.com/512/194/194938.png' alt={'ava'}/>},
            {id: 3, name: 'Sasha', ava: <img src='https://iconape.com/wp-content/png_logo_vector/avatar-11.png' alt={'ava'}/>},
            {
                id: 4,
                name: 'Leha',
                ava: <img
                    src='https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf' alt={'ava'}/>
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
export let addPosts = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCounts: 2
    };
    state.profilePage.posts.push(newPost)
}

export default state;