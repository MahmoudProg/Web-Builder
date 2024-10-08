
export default function _BigText_JS() {
  return {
    label: 'BigText',
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    media: `
            <svg Class="SVG" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z"></path>
    </svg>`,
    content: `
      <textarea style="
            outline: none;
            padding: 10px 14px;
            margin: 10px;
            width: 100%;
            border: 1px solid #d5dce1;
            border-radius: 4px;
        "
        ></textarea>
      `
    ,
  }
}
