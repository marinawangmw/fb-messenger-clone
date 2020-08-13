import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

const Message = ({ username, text }) => {
    const isUser = username === text.username;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser? "message__userCard" : 'message__guestCard'}>
                <CardContent>
                    <Typography 
                        color="white" 
                        variant="h5"
                        component="h2"
                    >
                            { text.username }: { text.message }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Message;