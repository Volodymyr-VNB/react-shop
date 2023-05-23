import { text } from "stream/consumers"

type TitlePro = {
    
    text1: string
    text2: string
}
export const Content = ( {text1, text2} :TitlePro) => {
    return (
        <>
            <p className="red">
                
                {text1}
            </p>
            <p>
                {text2}
            </p>
        </>
    )
}
// export default Content