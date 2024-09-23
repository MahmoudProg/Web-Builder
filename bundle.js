//import _1_Section_JS from '/scripts/_1_Section.js';
// import _2_Section_JS from './scripts/_2_Section.js';
// import _3_Section_JS from './scripts/_3_Section.js';
// import _Button_JS from './scripts/_Button.js';
// import _divider_JS from './scripts/_divider.js';
// import _3_7_Section_JS from './scripts/_3_7_Section.js';
// import _Text_JS from './scripts/_Text.js';
// import _BigText_JS from './scripts/_BigText.js';
// import _Label_JS from './scripts/_Label.js';
// import _Link_JS from './scripts/_Link.js';
// import _Hero_Section_JS from './scripts/_Hero_Section.js';
// import _Image_JS from './scripts/_Image.js';
// import _Video_JS from './scripts/_Video.js';
// import _Map_JS from './scripts/_Map.js';
// import _Quote_JS from './scripts/_Quote.js';

import _2_Section_JS from './scripts/Axs.js';




var editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  height: '100%',
  width: 'auto',
  storageManager: false,
});


editor.TraitManager.addType('number-unit', {
  createInput({ trait }) {
    const el = document.createElement('div');
    el.style.display = 'flex';

    // Create the number input
    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.style.flex = '1';
    numberInput.value = trait.target.get(trait.name) || 150;

    // Create the unit selector
    const unitSelect = document.createElement('select');
    const units = ['px', '%'];
    units.forEach(unit => {
      const option = document.createElement('option');
      option.value = unit;
      option.text = unit;
      unitSelect.appendChild(option);
    });
    unitSelect.style.marginLeft = '5px';

    // Set initial value for the unit selector
    const currentValue = trait.target.get(trait.name) || '150px';
    unitSelect.value = currentValue.includes('%') ? '%' : 'px';

    // Handle changes
    numberInput.oninput = () => this.onChange();
    unitSelect.onchange = () => this.onChange();

    // Append inputs to the container
    el.appendChild(numberInput);
    el.appendChild(unitSelect);

    // Save references to inputs
    this.numberInput = numberInput;
    this.unitSelect = unitSelect;

    return el;
  },

  onUpdate({ elInput }) {
    const currentValue = this.model.getValue() || '150px';
    const number = parseInt(currentValue, 10);
    const unit = currentValue.includes('%') ? '%' : 'px';

    this.numberInput.value = number;
    this.unitSelect.value = unit;
  },

  onEvent() {
    const value = `${this.numberInput.value}${this.unitSelect.value}`;
    this.model.setValue(value);
  }
});

// Adding the card component with the new custom trait
editor.DomComponents.addType('card-component', {
  isComponent: el => el.classList && el.classList.contains('card-component'),
  model: {
    defaults: {
      tagName: 'div',
      draggable: true,
      droppable: false,
      attributes: { class: 'card-component' },
      components: `
        <div class="card-image" style="background-image: url('https://via.placeholder.com/150'); height: 150px; background-position: center; background-size: cover;"></div>
        <div class="card-body">
          <h2 class="card-title">Card Title</h2>
          <p class="card-description">Card description goes here.</p>
        </div>
      `,
      traits: [
        {
          type: 'text',
          label: 'Title',
          name: 'title',
          changeProp: 1
        },
        {
          type: 'textarea',
          label: 'Description',
          name: 'description',
          changeProp: 1
        },
        {
          type: 'text',
          label: 'Image URL',
          name: 'image',
          changeProp: 1
        },
        {
          type: 'select',
          label: 'Background Size',
          name: 'backgroundSize',
          options: [
            { value: 'cover', name: 'Cover' },
            { value: 'contain', name: 'Contain' },
            { value: 'auto', name: 'Auto' },
            { value: '100% 100%', name: '100% 100%' },
            { value: '50% 50%', name: '50% 50%' },
          ],
          changeProp: 1
        },
        {
          type: 'select',
          label: 'Background Position',
          name: 'backgroundPosition',
          options: [
            { value: 'center', name: 'Center' },
            { value: 'top', name: 'Top' },
            { value: 'bottom', name: 'Bottom' },
            { value: 'left', name: 'Left' },
            { value: 'right', name: 'Right' },
            { value: 'top left', name: 'Top Left' },
            { value: 'top right', name: 'Top Right' },
            { value: 'bottom left', name: 'Bottom Left' },
            { value: 'bottom right', name: 'Bottom Right' }
          ],
          changeProp: 1
        },
        {
          type: 'number-unit',  // Use the custom trait type
          label: 'Image Height',
          name: 'imageHeight',
          changeProp: 1
        }
      ],
    },
    init() {
      // this.on('change:title change:description change:image change:backgroundSize change:backgroundPosition change:imageHeight', this.updateCard);
      this.on('change:buttonText', () => {
        const newText = this.get('buttonText') || 'Button Text';
        button.innerHTML = newText;
      });
    },
    updateCard() {
      const title = this.get('title');
      const description = this.get('description');
      const image = this.get('image');
      const backgroundSize = this.get('backgroundSize') || 'cover';
      const backgroundPosition = this.get('backgroundPosition') || 'center';
      const imageHeight = this.get('imageHeight') || '150px';

      const el = this.getEl();

      const titleEl = el.querySelector('.card-title');
      const descEl = el.querySelector('.card-description');
      const imgEl = el.querySelector('.card-image');

      if (titleEl) titleEl.innerHTML = title || 'Card Title';
      if (descEl) descEl.innerHTML = description || 'Card description goes here.';
      if (imgEl) {
        imgEl.style.backgroundImage = `url(${image || 'https://via.placeholder.com/150'})`;
        imgEl.style.backgroundSize = backgroundSize;
        imgEl.style.backgroundPosition = backgroundPosition;
        imgEl.style.height = imageHeight;  // Apply the height with the selected unit
      }
    },
  },
  view: {
    onRender() {
      console.log('Card component rendered');
    },
  },
});

// Adding the card component to the block manager
editor.BlockManager.add('card-component-block', {
  label: 'Card Component',
  content: { type: 'card-component' },
  category: 'Basic',
});


const __1_Section_JS = _1_Section_JS();
editor.BlockManager.add(__1_Section_JS.label, __1_Section_JS);

// const __2_Section_JS = _2_Section_JS();
// editor.BlockManager.add(__2_Section_JS.label, __2_Section_JS);

// const __3_Section_JS = _3_Section_JS();
// editor.BlockManager.add(__3_Section_JS.label, __3_Section_JS);

// const __3_7_Section_JS = _3_7_Section_JS();
// editor.BlockManager.add(__3_7_Section_JS.label, __3_7_Section_JS);

// const __Button_JS = _Button_JS();
// editor.BlockManager.add(__Button_JS.label, __Button_JS);

// const __divider_JS = _divider_JS();
// editor.BlockManager.add(__divider_JS.label, __divider_JS);

// const __Text_JS = _Text_JS();
// editor.BlockManager.add(__Text_JS.label, __Text_JS);

// // const __BigText_JS = _BigText_JS();
// // editor.BlockManager.add(__BigText_JS.label, __BigText_JS);

// // const __Label_JS = _Label_JS();
// // editor.BlockManager.add(__Label_JS.label, __Label_JS);

// const __Link_JS = _Link_JS();
// editor.BlockManager.add(__Link_JS.label, __Link_JS);

// const __Hero_Section_JS = _Hero_Section_JS();
// editor.BlockManager.add(__Hero_Section_JS.label, __Hero_Section_JS);

// const __Image_JS = _Image_JS();
// editor.BlockManager.add(__Image_JS.label, __Image_JS);

// const __Video_JS = _Video_JS();
// editor.BlockManager.add(__Video_JS.label, __Video_JS);

// // const __Map_JS = _Map_JS();
// // editor.BlockManager.add(__Map_JS.label, __Map_JS);

// const __Quote_JS = _Quote_JS();
// editor.BlockManager.add(__Quote_JS.label, __Quote_JS);



