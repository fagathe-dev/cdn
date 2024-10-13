class SnackBar {
    constructor(message = '', type = 'info', options) {
        this.message = '';
        this.type = 'info';
        this.options = {
            dismissible: false,
            url: undefined,
            duration: 6000
        };
        this.getCloseButton = () => this.options.url && `<a href=# onclick="{}">Fermer</a>`;
        this.getUrlAnchor = () => this.options.url && `<a href="${this.options.url}">Ouvrir</a>`;
        this.myInterval = setInterval(progress, 10);
        this.clearProgress = (cb) => {
            clearInterval(myInterval);
            document.querySelector('.snackbar').remove();
        };
        this.message = message;
        this.type = type;
        this.options = options;
        this.render();
    }
    getTemplate() {
        const start = `<div id="snackbarContainer">
        <div class="snackbar text-bg-white" id="${'iii'}">
            <div class="snackbar-body">
                Test message d'erreur
                
                <!-- ${this.getCloseButton()} -->
                <!-- // Si options.url  -->
                
                <div class="snackbar-progress bg-primary" id="progress"></div>
            </div>
            <!-- // Si this.options.dismissible -->
        </div>
    </div>`;
    }
    progress() {
        if (this.currentProgress === this.duration) {
            clearProgress();
        }
        progressBar.style.width = `${(1 - (currentProgress / duration)) * 100}%`;
        this.currentProgress += 10;
    }
    render() {
        return '';
    }
}
//# sourceMappingURL=index.js.map