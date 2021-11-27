import React from "react";


class Button extends React.Component {
    render() {
        return <button>수박 먹고 싶다</button>
    }
}


class AppShell extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world </h1>
                <h1>Hello world </h1>

                <Button/>
                <Button/>
                <Button/>

            </div>
        )
    }
}

export default AppShell;