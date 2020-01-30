import StyledButton from './styles';
import { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state({
            test: '',
        });
    }

    handleOnClick = (e) => {
        this.setState({
            test: e.target,
        });
    }
    

    // render() {
    //     const { name } = this.props;
    //     return (
    //         <StyledButton onClick={this.handleOnClick}>Hello {name}</StyledButton>
    //     );
    // }
}

// const Button = (props) => {
//     <StyledButton>Hello {props.name}</StyledButton>
// };

export default Button;