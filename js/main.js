const $ = (selector) => {
    const result = document.querySelectorAll(selector);
    if (result.length === 1) {
        return result[0];
    }
    if (result instanceof NodeList && result.length > 1) {
        return result;
    }
    return undefined;
};

const randomString = (length = 10) => {
    charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 4; i++) {
      const array = charset.split(''); // Convert string to array
      array.sort(() => 0.5 - Math.random()); // Random comparator
      const shuffle = array.join('');
      randomString += shuffle;
    }

    return randomString.substring(0, length);
}

const progress = (progressID, durationEnd = 6000, interval = 10) => {
    const progressBar = document.getElementById(progressID);
    let currentProgress =  0;
    
    const clearProgress  = (id) =>  {
        clearInterval(myInterval);
        $(`#${progressID.replace('progress_', '')}`).remove()
    }
    
    const progressCB = () => {
        if (currentProgress === durationEnd) {
            clearProgress()
        }
        progressBar.style.width = `${(1 - (currentProgress/durationEnd)) * 100}%`
        currentProgress += 10;
    }
    
    const myInterval = setInterval(progressCB, interval);
    
    
    
}

class SnackBar {
    constructor(message= '', type = 'info', options) {
        this.message = message
        this.type = type
        this.setUpOptions(options)
        this.render()
      }

      setUpOptions(options){
        return this.options = {
            duration: 6000,
            url: null,
            dismissible:false,
            id:randomString(),
            container: '#snackbarContainer',
            ...options
        }
      }
    
      getUrlAnchor () { 
        return this.options.url ? `<a href="${this.options.url}">Ouvrir</a>` : ''
    }

      getProgressBar() {
        return `<div class="snackbar-progress bg-${this.type}" id="progress_${this.options.id}"></div>`
    }
      
      render() {
        const html = `
            <div class="snackbar text-bg-white" onclick="this.closest('.snackbar').remove()" id="${this.options.id}">
                <div class="snackbar-body">
                    ${this.message}
                    
                    ${ this.options.url ? this.getUrlAnchor() : '' }
                    
                    ${this.getProgressBar()}
                </div>
            </div>`

        $(this.options.container).insertAdjacentHTML('afterbegin', html)

        progress(`progress_${this.options.id}`, this.options.dismissible ? this.options.duration : 15000)
      }
      
}