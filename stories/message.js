import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '../src/domain/message.domain';
import MessageComponent from '../src/views/components/message.component';

storiesOf('Message Default', module)
    .add('Message rendering', () => {
        const msg = new Message({ content: 'Hi how are you?' });
        return <MessageComponent msg={msg} />;
    })

    .add('Message other size', () => {
        const msg = new Message({ content: 'Hi how are you?' });
        return (
            <div style={{ width: 200 }}>
                <MessageComponent msg={msg} />
            </div>
        );
    })

    .add('Long message', () => {
        const msg = new Message({
            content:
                'Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?'
        });
        return (
            <div style={{ width: 320 }}>
                <MessageComponent msg={msg} />
            </div>
        );
    });
