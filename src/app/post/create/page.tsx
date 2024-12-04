'use client'

import { useState } from "react"

export default function CreateBlogPage() {
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch("http://localhost:3003/api/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({title, content})
        })
        setTitle("")
        setContent("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            Content:
            <input value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">post</button>
    </form>
  )
}
