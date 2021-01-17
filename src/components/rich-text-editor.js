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
    //READER IS A PROMISE 
    //READER AS RESULT TAKES THE IMAGE AND RETURNS A STRING VERSION IT RETURNS A 
    //RESULT THAT WE CALL IN THE CALLBACK FUNCTION
    getBase64 = (file, callback) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => callback(reader.result)
        reader.onerror = error => {}
    }

    uploadFile = (file) => {
        return new Promise((resolve, reject) => {
            this.getBase64(file, data => resolve({data: {link: data}}))
        })
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