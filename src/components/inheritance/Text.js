import Emoji from "./Emoji";

export default class Text extends Emoji {
    // constructor(props){
    //     super(props);
    // }
    render() {
        const newText = this.addEmoji("This is JS", "emo");
        return super.render(newText);
    }
}