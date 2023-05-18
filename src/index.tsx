import React from 'react'
import ReactDOM from 'react-dom/client'
// const title = React.createElement('h1', { id: 'title' }, 'hellow react')
// console.log(title)
// jsx
// const app = (
//     <div>
//         <h1 id="text">Hello App</h1>
//         <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
//             nobis et in fugit sequi natus, iure dicta aliquam rem, eaque qui
//             minima molestias fuga voluptatum doloremque. Veniam minima ducimus
//             in.
//         </p>
//     </div>
// )

const Title = () => {
    return <h1>Hello App component</h1>
}
const Content = () => {
    return (
        <>
            <p>
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
        </>
    )
}
const App = () => {
    return (
        <>
            <Title />
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
