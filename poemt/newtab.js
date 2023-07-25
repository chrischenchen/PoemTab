// window.onload = () => {
//   chrome.storage.sync.get('poem', (data) => {
//     document.getElementById('content').textContent = data.poem.content;
//     document.getElementById('origin').textContent = data.poem.origin;
//     document.getElementById('author').textContent = data.poem.author;
//   });
// };

fetch('https://v1.jinrishici.com/all.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data.content)
    document.getElementById('content').textContent = data.content;
    document.getElementById('origin').textContent = data.origin;
    document.getElementById('author').textContent = data.author;
    
  })
  .catch(error => console.error('Error:', error));