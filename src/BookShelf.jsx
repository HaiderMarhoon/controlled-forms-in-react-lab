import { useState } from 'react';

function MyForm() {
    const [inputs, setInput] = useState({})

    const handleChange = (event) => {
        const title = event.target.title;
        const author = event.target.author
        setInput(values => ({ ...values, [title]: author }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:
                <input
                    type="text"
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Author:
                <input
                    type="text"
                    name="author"
                    value={inputs.author || ""}
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}



function BookShelf() {
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <MyForm />
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )
}

export default BookShelf