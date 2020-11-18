// Updated EditorJS
import EditorJS from 'editorjs-updated';
// updated Plugins
const Table = require('editorjs-table');
const List = require('editorjs-list');
// plugins from editorJs
const Checklist = require('@editorjs/checklist');
const Marker = require('@editorjs/marker');
const LinkTool = require('@editorjs/link');
const Embed = require('@editorjs/embed');
const Header = require('@editorjs/header');
const Quote = require('@editorjs/quote');
const SimpleImage = require('@editorjs/simple-image');
const Warning = require('@editorjs/warning');
const RawTool = require('@editorjs/raw');
const Delimiter = require('@editorjs/delimiter');
const CodeTool = require('@editorjs/code');
const InlineCode = require('@editorjs/inline-code');
const saveButton = document.getElementById('saveButton');

const editor = new EditorJS({
    autofocus: true,
    data: {
        version: '2.18.0',
    },
    placeholder: 'click add button to get tools',
    holder: 'editorjs',
    tools: {
        list : {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
        },
        table: {
            class: Table,
            inlineToolbar: true,
            config: {
                rows: 0,
                cols: 0
            },
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },
        linkTool: {
            class: LinkTool,
            config: {
              endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
            }
        },
        embed: Embed, 
        header: Header,
        quote: Quote,
        image: SimpleImage,
        warning: Warning,
        raw: RawTool,
        delimiter: Delimiter,
        code: CodeTool,
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
    },
    data: {
        blocks: [
            {
                type : "image",
                data : {
                    url : "https://images.pexels.com/photos/3657423/pexels-photo-3657423.jpeg",
                    caption : "Images for Test",
                    withBorder : false,
                    withBackground: false,
                    stretched : false,
                    width: '448px',
                    height: '560px'
                }
            },
            {
              type: "image",
              data: {
                url: "https://images.pexels.com/photos/1442486/pexels-photo-1442486.jpeg",
                caption: "Image Test",
                withBorder: false,
                withBackground: false,
                stretched: false
              }
            },
        ]
    },
    onReady: function(){
        saveButton.click();
    }
})
saveButton.addEventListener('click', function () {
    editor.save().then((savedData) => {
      cPreview.show(savedData, document.getElementById("output"));
    });
});
export default editor;