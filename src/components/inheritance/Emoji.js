import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render(updatedText) {
        let text = "I am emoji Component";

        if(updatedText)
            text = updatedText;

        return <div>{text}</div>
    }
}