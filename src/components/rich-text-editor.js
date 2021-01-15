import React, {Component} from "react"
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"

export default class RichTextEditor extends Component {
    constructor(props){
        super(props)

        this.state = {
            editorSate: EditorState.createEmpty()
        }
    }

    render(){
        return(
            <div>
                <Editor editorSate={this.state.editorSate}  
                wrapperClassName="demo-wrapper" 
                editorClassName="demo-editor"
                />
            </div>
        )
    }
}