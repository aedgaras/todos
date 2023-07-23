import { DeleteOutlined } from '@mui/icons-material';
import { Checkbox, IconButton, Input } from '@mui/joy';
import React, { useState } from 'react';
import { Todo } from '../types';

export const TodoComponent: React.FC<Todo> = (props) => {
    const [isChecked, setIsChecked] = useState<boolean>(props.isDone);
    const [task, setTask] = useState<string>(props.task);

    return (
        <Input
            sx={{
                width: '100%',
                borderRadius: 'sm',
                px: 2,
                py: 1,
                textDecoration: isChecked ? 'line-through' : 'none',
            }}
            variant="outlined"
            startDecorator={
                <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            }
            endDecorator={
                <IconButton variant="plain" size="md">
                    <DeleteOutlined />
                </IconButton>
            }
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
    );
};
