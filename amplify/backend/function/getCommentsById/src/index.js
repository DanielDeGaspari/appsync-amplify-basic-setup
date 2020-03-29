
exports.handler = async (event) => {
    const id = event.arguments.input;
    let response;
    if (id === 1) {
        response = "Comment with ID 1";
    } else if (id === 2) {
        response = "Comment with ID 2"
    }
    return response;
};
