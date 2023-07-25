const fileChange = document.getElementById('thefile');

fileChange.addEventListener('change',function(){
    let file = this.files[0]

    let message = ''
    message += `File name: ${file.name}\n`;
    message += `File type: ${file.type}\n`;
    message += `File size: ${file.size} byte\n`;
    message += `Last modified: ${file.lastModifiedDate} byte\n`;


    document.getElementById('fileInfo').value = message;
})
