interface SnackBarOption {
  duration?: number
  url?:string
  dismissible?:boolean
}
type SnackBarType = 'warning' | 'info' | 'success' | 'danger'
class SnackBar {

  message = ''
  type = 'info'
  options: SnackBarOption = {
    dismissible: false,
    url: undefined,
    duration: 6000
  }


  constructor(message: string = '', type: SnackBarType = 'info', options: SnackBarOption) {
    this.message = message
    this.type = type
    this.options = options
    this.render()
  }

  getCloseButton= () => this.options.url && `<a href=# onclick="{}">Fermer</a>`

  getUrlAnchor = () => this.options.url && `<a href="${this.options.url}">Ouvrir</a>`

  getTemplate() {
    const start:string = `<div id="snackbarContainer">
        <div class="snackbar text-bg-white" id="${'iii'}">
            <div class="snackbar-body">
                Test message d'erreur
                
                <!-- ${this.getCloseButton()} -->
                <!-- // Si options.url  -->
                
                <div class="snackbar-progress bg-primary" id="progress"></div>
            </div>
            <!-- // Si this.options.dismissible -->
        </div>
    </div>`
  }
  

  progress () {
    if (this.currentProgress === this.duration) {
      clearProgress()
    }
    progressBar.style.width = `${(1 - (currentProgress/duration)) * 100}%`
    this.currentProgress += 10;
  }

  const myInterval = setInterval(progress, 10);

  const clearProgress = (cb) => {
    clearInterval(myInterval);
    document.querySelector('.snackbar').remove()
  }

  render():string {
    return '';
  }
}