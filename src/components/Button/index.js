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
}

export default Button;