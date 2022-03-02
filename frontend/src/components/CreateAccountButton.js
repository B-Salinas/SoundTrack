import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signup } from '../store/session';

import {
    Alert,
    AlertIcon,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'


function CreateAccountButton({size, mt}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState([ ]);

    const handleCreateAccount = () => {
        if (confirmPassword === password) {
            dispatch(signup({
                username,
                email,
                password
            })).then(() => {
                onClose()
                history.push('/explore');
            }).catch(async (res) => {
                const message = await res.json();
                setErrors(message.errors);
            })
        } else {
            setErrors([...errors, 'Confirm Password must be the same as Password.'])
        }
    }

    const handleClick = () => setShow(!show)


    return (
        <>
            <Button onClick={onOpen} size={size} mt={mt} colorScheme={'orange'} >
                Create an Account
            </Button>

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={8}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                placeholder='Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        {errors.length > 0 &&
                            <Stack spacing={3} mt={4}>
                                {errors.map((error)=> {
                                    return (
                                        <Alert status='error'>
                                            <AlertIcon />
                                            {error}
                                        </Alert>
                                    )
                                })}
                            </Stack>
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='orange' mr={3} onClick={handleCreateAccount}>
                            Create Account
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateAccountButton;