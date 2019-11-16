const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//kreator akcji
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: commentId
    }
}

function thumbUpComment(text) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

function thumbDownComment(text) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}


export {ADD_COMMENT,addComment,EDIT_COMMENT,editComment,THUMB_UP_COMMENT,thumbUpComment,THUMB_DOWN_COMMENT,thumbDownComment};

