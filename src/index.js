// Updated EditorJS
import EditorJS from 'editorjs-updated';
// updated Plugins
const Table = require('editorjs-table');
const List = require('editorjs-list');
// plugins from editorJs
const Checklist = require('@editorjs/checklist');
const Marker = require('@editorjs/marker');
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
          }
    },
    data: {
        blocks: []
    }
})

export default editor;