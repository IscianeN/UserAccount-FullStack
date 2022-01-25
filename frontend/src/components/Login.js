import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <>
            <div>
                <form>
                    <input type = "email" name = "email" placeholder = "email..." required></input>
                    <input type ="password" name = "password" placeholder = "password..." required></input>
                </form>
            </div>
            </>
        )
    }
}