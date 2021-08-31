// TODO:
// - Проверить какого типа сообщение
// - Привязать нотификацию к DOM-элементу
// - Обратный отсчет для удаления таймера


export default class NotificationMessage {
  // Паттерн проектирования - синглтон
  static currentInstance;
  types = ['success', 'error'];

  constructor({
    duration = 0,
    type = ''
  } = {}) {
    this.duration = duration;

    if (this.types.include(type)) {
      this.type = type;
    }

    if (NotificationMessage.currentInstance) {
      NotificationMessage.currentInstance.destroy();
    }

    NotificationMessage.currentInstance = this;

    this.render();
    this.initEventListeners();
  }

  render() {
    const element = document.createElement('div'); // (*)
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }


  show() {
  //  Метод добавляет элемент в дом-дерево и ставит таймер для обратного отсчета
  }

  initCountdown() {

  }

  get template() {
    return `
      <div class="notification ${this.type}" style="--value:${this.LIFETIME}">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            Hello world
          </div>
        </div>
      </div>
    `;
  }

  initEventListeners () {
    // NOTE: в данном методе добавляем обработчики событий, если они есть
  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
    NotificationMessage.currentInstance = null;
    // NOTE: удаляем обработчики событий, если они есть
  }
}

const defaultComponent = new DefaultComponent();
const element = document.getElementById('root');

element.append(defaultComponent.element);
