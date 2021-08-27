const userIdString = 'userId';

// We'll use localstorage to store a unique identifier for the user. Don't mistake this for security - it's easily spoofable.
export const getUserId = () => {
    const storage = window.localStorage;

    // Get existing userId from storage
    const userId = storage.getItem(userIdString);
    if (userId) {
        return userId;
    }

    // Alternatively generate a new userId
    const newUserId = generateUid();
    storage.setItem(userIdString, newUserId);
    return newUserId;
};

function generateUid() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
}
