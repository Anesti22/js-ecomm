module.exports = ({ content }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>title</title>
        </head>
        <body>
            ${content}
        </body>
        </html>
    `;
};