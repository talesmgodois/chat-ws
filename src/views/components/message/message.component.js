import React, { Component } from 'react';
import Message from '../../../domain/message.domain';

// import { Container } from './styles';

export default class MessageComponent extends Component {
    render() {
        const msg = new Message({ content: 'hi how are you?' });
        return <div>{msg}</div>;
    }
}
