import React, {Component} from 'react';
import classes from './auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/input'

export default class Auth extends Component {

    loginHandler = () => {
        console.log('Login')
    }
    
    registerHandler = () => {
        console.log('register')
    }

    submitHandler = (e) => {
       e.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input label='Email' type='text' errorMessage='No Email'/>
                        <Input label='Password' type='text' />

                        <Button type='success' onClick={this.loginHandler}>
                            Войти
                        </Button>

                        <Button type='primary' onClick={this.registerHandler}>
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}