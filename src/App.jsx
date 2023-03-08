import { marked } from "marked"
import { useEffect, useState } from "react"

function App() {

    const [firstpreview, setFirstpreview] = useState("")
    const [isInView, setIsInView] = useState(1)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const ChangeContent = () => {
        const editorText = document.getElementById("editor").value
        const textarea = editorText
        const parsed = marked.parse(textarea)
        setFirstpreview(parsed)
    }

    useEffect(() => {
        ChangeContent()
    }, [])

    return (
        <>
            <button className="savework">
                {!isLoggedIn ? 'Login & Save' : 'Save'}
            </button>
            <button className="toggleButton"
                onClick={() => {
                    if (isInView === 1) setIsInView(2)
                    else setIsInView(1)
                }}
            >
                {isInView === 1 ? 'See Preview' : 'See Editor'}
            </button>

            <div className={isInView === 1 ? "editorWrap" : "editorWrap hide"}>
                <div className="editorTitle">
                    Only edit this area:
                </div>
                <textarea id="editor" onChange={() => ChangeContent()}>
                    # Welcome to my React Markdown Previewer !
                </textarea>
            </div>
            <div className={isInView === 2 ? "previewWrap" : "previewWrap hide"}>
                <div className="previewTitle">Your preview is here</div>
                <div id="preview"
                    dangerouslySetInnerHTML={{ __html: firstpreview }}
                ></div>
            </div>
        </>
    )
}

export default App
