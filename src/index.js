import EditorJS from '@editorjs/editorjs';
const Table = require('editorjs-table');
const List = require('editorjs-list');
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
        }
    },
    data: {
        blocks: []
    }
})

export default editor;
