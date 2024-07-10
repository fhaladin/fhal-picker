class FhalPicker {
  constructor() {
    this.init()
  }

  init() {
    console.log('Init class')
    const newButton = document.createElement('button');
    newButton.textContent = 'Click me!';
    newButton.addEventListener('click', () => {
      alert('Button clicked!');
    });

    document.body.appendChild(newButton);

    this.renderCalendar()
  }

  renderCalendar() {
    const body = document.querySelector('body')
    let html = ''

    html += `
      <div>
        <button>My Button</button>
      </div>
    `

    const htmlEl = document.createElement('div')
    htmlEl.innerHTML = html

    body.appendChild(htmlEl)
  }
  
  doSomething () {
    console.log('this is my first package')
  }
} 
