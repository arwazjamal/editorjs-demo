// Updated EditorJS
import EditorJS from 'editorjs-updated';
// updated Plugins
const Table = require('editorjs-table');
const List = require('editorjs-list');
const SimpleImage = require('editorjs-simple-image-updated');
// plugins from editorJs
const Checklist = require('@editorjs/checklist');
const Marker = require('@editorjs/marker');
const LinkTool = require('@editorjs/link');
const Embed = require('@editorjs/embed');
const Header = require('@editorjs/header');
const Quote = require('@editorjs/quote');
const Warning = require('@editorjs/warning');
const RawTool = require('@editorjs/raw');
const Delimiter = require('@editorjs/delimiter');
const CodeTool = require('@editorjs/code');
const InlineCode = require('@editorjs/inline-code');
const FontFamily = require('editorjs-inline-font-family-tool');
const FontSize = require('editorjs-inline-font-size-tool');
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
        fontSize: FontSize,
        fontFamily: FontFamily,
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
    },
    data: {
        blocks: [
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "<span style=\"font-size:12pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">RECIPE</span><span style=\"font-size:32pt;font-family:'Playfair Display',serif;color:#f75d5d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"><br></span><span style=\"font-size:32pt;font-family:'Playfair Display',serif;color:#f75d5d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Strawberry Vanilla Pancakes</span>"
                }
            },
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Ready in </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">20 minutes</span>"
                }
            },
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Serves </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">8 people</span>"
                }
            },
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">280 calories</span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">&nbsp;</span>"
                }
            },
            {
                "type" : "header",
                "data" : {
                    "text" : "<span style=\"font-size:16pt;font-family:'Playfair Display',serif;color:#f75d5d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Ingredients</span>",
                    "level" : 1
                }
            },
            {
                "type" : "list",
                "data" : {
                    "style" : "unordered",
                    "items" : [
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet</span>",
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Consectetuer adipiscing elit</span>",
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Suspendisse scelerisque</span>",
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Libero interdum auctor</span>"
                    ]
                }
            },
            {
                "type" : "table",
                "data" : {
                    "content" : [
                        [
                            "Bali",
                            "Kyoto",
                            "Helsinki",
                            "Nusa Tenggara"
                        ],
                        [
                            "Marco Polo",
                            "Marcus Aurelius",
                            "Cleanthes",
                            "Epictetus"
                        ]
                    ]
                }
            },
            {
                "type" : "image",
                "data" : {
                    "url" : "https://images.pexels.com/photos/3657423/pexels-photo-3657423.jpeg",
                    "caption" : "Images for Test",
                    "withBorder" : false,
                    "withBackground" : false,
                    "stretched" : false,
                    "width" : "448px",
                    "height" : "560px"
                }
            },
            {
                "type" : "image",
                "data" : {
                    "url" : "https://images.pexels.com/photos/1442486/pexels-photo-1442486.jpeg",
                    "caption" : "Image Test",
                    "withBorder" : false,
                    "withBackground" : false,
                    "stretched" : false,
                    "width" : "650px",
                    "height" : "433px"
                }
            },
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "<span style=\"box-sizing: inherit; display: block; position: relative; margin-right: 12px; float: left; font-size: 66px; line-height: 0.83; padding-top: 7px; color: rgb(41, 41, 41); font-family: fell, Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; letter-spacing: -0.063px; background-color: rgb(255, 255, 255);\">I</span><span style=\"color: rgb(41, 41, 41); font-family: fell, Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 21px; letter-spacing: -0.063px; background-color: rgb(255, 255, 255);\">love&nbsp;</span><span style=\"box-sizing: inherit; color: rgb(41, 41, 41); font-family: fell, Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 21px; letter-spacing: -0.063px; background-color: rgb(255, 255, 255);\"><span style=\"box-sizing: inherit;\"><span style=\"box-sizing: inherit;\"><span style=\"box-sizing: inherit;\"><span style=\"box-sizing: inherit;\"><span style=\"box-sizing: inherit;\"><span style=\"box-sizing: inherit;\">s</span></span></span></span></span></span></span><span style=\"color: rgb(41, 41, 41); font-family: fell, Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 21px; letter-spacing: -0.063px; background-color: rgb(255, 255, 255);\">wimming because it always makes me feel like I’m on vacation. I equate moving through water with the ultimate indulgence. It’s better than chocolate.</span>"
                }
            },
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "<span style=\"color: rgb(41, 41, 41); font-family: fell, Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif; font-size: 21px; letter-spacing: -0.063px; background-color: rgb(255, 255, 255);\">I’d been learning to live in the new reality of my husband’s stage 4 cancer when I ordered myself a one-piece Speedo, swim cap, and goggles, so I could get reacquainted with our local community center pool for some vacation-reminiscent escape. As an additional plus, no one can see or hear you when you sob into pool water.</span>"
                }
            },
            {
                "type" : "list",
                "data" : {
                    "style" : "unordered",
                    "items" : [
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Test for sublist</span>",
                        [
                            "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Kyoto is in japan</span>",
                            "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Some string for sub list&nbsp;</span>",
                            "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">New String for sub list</span>"
                        ],
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">New Sublist for testing</span>"
                    ]
                }
            },
            {
                "type" : "list",
                "data" : {
                    "style" : "ordered",
                    "items" : [
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Test string</span>",
                        [
                            "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">NEW TEST STRING</span>",
                            "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">BEST TEST</span>",
                            "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">SOME TEST</span>"
                        ],
                        "<span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Normal Test</span>"
                    ]
                }
            }
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