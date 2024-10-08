export default function _Map_JS() {
  return {
    label: 'Map',
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    media: `
            <svg Class="SVG" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"></path>
            </svg>`,
    content: `
      <iframe src="https://maps.google.com/maps?&amp;z=1&amp;t=q&amp;output=embed" frameborder="0" class="gjs-no-pointer" style="height: 100%; width: 100%;"></iframe>
      `
    ,
  }
}
