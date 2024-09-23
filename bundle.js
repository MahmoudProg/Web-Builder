



import _1_Section_JS from './scripts/Section1.js';
import _2_Section_JS from './scripts/Section2.js';
import _3_Section_JS from './scripts/Section3.js';
import _Button_JS from './scripts/Button.js';
import _divider_JS from './scripts/divider.js';
import _3_7_Section_JS from './scripts/Section3_7.js';
import _Text_JS from './scripts/Text.js';
import _BigText_JS from './scripts/BigText.js';
import _Label_JS from './scripts/Label.js';
import _Link_JS from './scripts/Link.js';
import _Hero_Section_JS from './scripts/Hero_Section.js';
import _Image_JS from './scripts/Image.js';
import _Video_JS from './scripts/Video.js';
import _Map_JS from './scripts/Map.js';
import _Quote_JS from './scripts/Quote.js';




var editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  height: '100%',
  width: 'auto',
  storageManager: false,
});





const __1_Section_JS = _1_Section_JS();
editor.BlockManager.add(__1_Section_JS.label, __1_Section_JS);

const __2_Section_JS = _2_Section_JS();
editor.BlockManager.add(__2_Section_JS.label, __2_Section_JS);

const __3_Section_JS = _3_Section_JS();
editor.BlockManager.add(__3_Section_JS.label, __3_Section_JS);

const __3_7_Section_JS = _3_7_Section_JS();
editor.BlockManager.add(__3_7_Section_JS.label, __3_7_Section_JS);

const __Button_JS = _Button_JS();
editor.BlockManager.add(__Button_JS.label, __Button_JS);

const __divider_JS = _divider_JS();
editor.BlockManager.add(__divider_JS.label, __divider_JS);

const __Text_JS = _Text_JS();
editor.BlockManager.add(__Text_JS.label, __Text_JS);

// const __BigText_JS = _BigText_JS();
// editor.BlockManager.add(__BigText_JS.label, __BigText_JS);

// const __Label_JS = _Label_JS();
// editor.BlockManager.add(__Label_JS.label, __Label_JS);

const __Link_JS = _Link_JS();
editor.BlockManager.add(__Link_JS.label, __Link_JS);

const __Hero_Section_JS = _Hero_Section_JS();
editor.BlockManager.add(__Hero_Section_JS.label, __Hero_Section_JS);

const __Image_JS = _Image_JS();
editor.BlockManager.add(__Image_JS.label, __Image_JS);

const __Video_JS = _Video_JS();
editor.BlockManager.add(__Video_JS.label, __Video_JS);

// const __Map_JS = _Map_JS();
// editor.BlockManager.add(__Map_JS.label, __Map_JS);

const __Quote_JS = _Quote_JS();
editor.BlockManager.add(__Quote_JS.label, __Quote_JS);



