import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}
type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Сергій',
            text: 'Гарний телефон. Як завжди. Однак, батарея до вечора не доживає',
        },
        {
            name: 'Олексій Гапонов',
            text: 'Перша покупка з флагманів iphone.Дивовижні враження швидкості і все без лагів.Як кажуть політ нормальний.',
        },
        {
            name: 'Микола',
            text: 'Задоволені покупкою. Все оперативно. Апарат топ.',
        },
    ]
    const [review, setReview] = useState<Review[]>(arrReviews)
    const [newreview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
        text: e.target.value,
        }))
    }

    const onSend = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(newreview.name ===""|| newreview.text===""){
            alert("All fielsd are re")
        }
        else {
            setReview((prevState) => {
                return [...prevState,newreview]
            })

            setNewReview({
                name:"",
                text:"",
            })
        }
    }
    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Reviews
                {/* {arrReviews
                .map(({name,text,
                    }) => (
                        <>
                        <h4>{name}</h4>
                        <h4>{text}</h4>
                        </>
                    )
                )}; */}
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card variant="outlined" sx={{ margin: '30px 0' }}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newreview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newreview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Reviews
