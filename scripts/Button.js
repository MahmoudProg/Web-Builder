
export default function _Button_JS() {
  return {
    label: 'Button',
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    media: `
            <svg class="SVG" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z"></path>
            </svg>`,
    content: `
      <button style="
                  outline: none;
                  border: none;
                  background: #2196F3;
                  color: white;
                  border-radius: 4px;
                  padding: 5px 10px;
                  margin: 10px;
                  cursor: pointer;
                  ">
      Button
      </button>
      `
    ,
  }
}
