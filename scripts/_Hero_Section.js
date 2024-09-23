

export default function _Hero_Section_JS() {
  return {
    label: 'Hero Section',
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    media: `
            <svg Class="SVG" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z"></path>
    </svg>`,
    content: `
    <div class="hero">
    
    <h1>Insert title here</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
      `
    ,
  }
}
