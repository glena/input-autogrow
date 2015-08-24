var InputAutogrow = function(ele) {

  if (typeof(ele) === 'string') {
    this.element = document.getElementById(ele);
  } else {
    this.element = ele;
  }

  this.placeholder = (this.element.placeholder || '');

  this.wrapper = document.createElement('div');
  this.wrapper.style.display = 'inline-block';
  this.wrapper.style.position = 'relative';
  document.body.insertBefore(this.wrapper, this.element);

  this.content = document.createElement('span');
  this.content.innerHTML = this.placeholder;
  this.content.style.color = 'transparent';
  this.content.style.display = 'inline-block';
  this.wrapper.appendChild(this.content);

  this.element.style.position = 'absolute';
  this.element.style.top = 0;
  this.element.style.bottom = 0;
  this.element.style.left = 0;
  this.element.style.top = 0;
  this.wrapper.appendChild(this.element);

  var self = this;
  var updateContent = function () {
    self.content.innerHTML = (this.value == "" ? self.placeholder : this.value.replace(' ', '&nbsp;'));
    if (window.getComputedStyle) {
      var styles = window.getComputedStyle(self.content);
      this.style.width = styles.width;
    }
  }

  var event = 'oninput' in document.createElement('input') ? 'input' : 'keydown';
  if (this.element.addEventListener) {
    this.element.addEventListener(event, updateContent);
  } else {
    this.element.onchange = updateContent;
  }
}
