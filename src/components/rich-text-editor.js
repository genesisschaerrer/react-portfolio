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

    onEditorStateChange = (editorSate) => {
        this.setState({editorSate},
            this.props.handleRichTextEditorChange(
                draftToHtml(convertToRaw(this.state.editorSate.getCurrentContent()))
            )
        )
    }

    uploadFile(file){
        console.log("upload file, ", file)
    }

    render(){
        return(
            <div>
                <Editor editorSate={this.state.editorSate}  
                wrapperClassName="demo-wrapper" 
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    inline: {inDropdown: true },
                    list: {inDropdown: true},
                    textAlign: {inDropdown: true},
                    link: {inDropdown: true},
                    history: {inDropdown: true},
                    image: {
                        uploadCallback: this.uploadFile,
                        alt: {present: true, mandatory: false},
                        previewImage: true,
                        inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
                    }
                }}
                />
            </div>
        )
    }
}