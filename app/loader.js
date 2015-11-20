function load() {
 chrome.windows.create({ url: 'http://codeboard1-env.elasticbeanstalk.com/new', type: 'panel' });
}
document.getElementsByTagName('body')[0].onload = function() { load(); };