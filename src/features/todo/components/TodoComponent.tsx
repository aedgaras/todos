import { AddCircleOutlined, DeleteOutlined } from '@mui/icons-material';
import { Checkbox, IconButton, Input } from '@mui/joy';
import React, { useContext, useState } from 'react';
import { useQueryClient } from 'react-query';
import { SessionContext } from '../../../lib/session';
import { addTodo } from '../api/addTodo';
import { deleteTodo } from '../api/deleteTodo';
import { useAutoSaveTask } from '../hooks';
import { Todo } from '../types';

export const TodoComponent: React.FC<Partial<Todo>> = (props) => {
    const sessionContext = useContext(SessionContext);
    const client = useQueryClient();
    const [isChecked, setIsChecked] = useState<boolean>(props.completed ?? false);
    const [task, setTask] = useState<string>(props.task ?? '');

    useAutoSaveTask(props.id, task, isChecked);

    return (
        <Input
            sx={{
                width: '100%',
                borderRadius: 'sm',
                px: 2,
                py: 1,
                textDecoration: isChecked ? 'line-through' : 'none',
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !props.id) {
                    if (task.trim().length !== 0) {
                        addTodo(client, task, sessionContext?.user.id).then(() => {
                            setTask('');
                        });
                    }
                }
            }}
            variant="outlined"
            startDecorator={
                props.id ? (
                    <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                ) : null
            }
            endDecorator={
                props.id ? (
                    <IconButton
                        variant="plain"
                        size="md"
                        onClick={() => deleteTodo(client, props.id).then((r) => r)}
                    >
                        <DeleteOutlined />
                    </IconButton>
                ) : (
                    <IconButton
                        variant="plain"
                        size="md"
                        onClick={() => {
                            if (task.trim().length !== 0) {
                                addTodo(client, task, sessionContext?.user.id).then(() => {
                                    setTask('');
                                });
                            }
                        }}
                    >
                        <AddCircleOutlined />
                    </IconButton>
                )
            }
            value={task}
            onChange={(e) => {
                setTask(e.target.value);
            }}
        />
    );
};
