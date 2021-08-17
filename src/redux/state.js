let state = {

    profilePage: {
        posts: [
            { id: 2, message: "I love React!", likes: 12 },

            { id: 1, message: "It`s my first post.", likes: 22 }
        ]
    },

    messagesPage: {
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' }
        ],
        dialogs: [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Masha' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Dasha' },
            { id: 5, name: 'Liza' }
        ]
    }
}

export default state;

