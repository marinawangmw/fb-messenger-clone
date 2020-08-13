import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

const Message = forwardRef(({ username, text }, ref) => {
    const isUser = username === text.username;
    return (
        // pongo ref en el componente donde quiero q haga la animacion
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser? "message__userCard" : 'message__guestCard'}>
                <CardContent>
                    <Typography 
                        color="white" 
                        variant="span"
                        component="span"
                    >
                            {!isUser && `${text.username || 'Stranger'}: ` } { text.message }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
});

export default Message;