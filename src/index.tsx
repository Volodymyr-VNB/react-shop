import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facilis aperiam id, omnis voluptatem laboriosam quo ex
                porro magni alias eum earum. At, est dolorem odit eaque nam
                voluptates deserunt.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facilis aperiam id, omnis voluptatem laboriosam quo ex
                porro magni alias eum earum. At, est dolorem odit eaque nam
                voluptates deserunt.
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title title="App" num={10} />
            <Title title="Vov" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
