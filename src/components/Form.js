import React from "react";

export default class Form extends React.Component {
    state={
        title:'Javascript',
        text:'Javascript is nice',
        library:'React',
        isAwesome: true,
    }

    handleChange = (e) => {
        if(e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            })
        } else if(e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            })
        }else if(e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            })
        }else if(e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            })
        }
        
    }

    submitHandler = (e) => {
        const {title, text, library, isAwesome} = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome)
    }

    render() {
        const {title, text, library, isAwesome} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                     type='text' 
                     placeholder="Title" 
                     value={title}
                     onChange={this.handleChange}                     
                     />
                    <br />
                    <hr />
                    <textarea
                     name='text'
                     value={text}
                     onChange={this.handleChange}
                    />
                    <br />
                    <hr />
                    <select 
                     value={library}
                     onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <hr />
                    <input 
                     type='checkbox' 
                     checked={isAwesome}
                     onChange={this.handleChange} />
                    <br />
                    <hr />
                    <input 
                     type='submit' 
                     value='submit' />

                </form>
            </div>
        );
    }
}