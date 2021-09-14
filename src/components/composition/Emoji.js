import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text) => `${'❤'} ${text} ${'❤'}`;

    render() {
        return this.props.children({addEmoji: this.addEmoji});
    }
}