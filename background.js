const redirect = document.getElementById('redirect')
redirect.addEventListener('click',function(){
  chrome.tabs.create({ url: "https://mserp.hindustanuniv.ac.in/Academic/iitmsPFkXjz+EbtRodaXHXaPVt3dlW3oTGB+3i1YZ7alodHeRzGm9eTr2C53AU6tMBXuOXVbvNfePRUcHp4rLz3edhg==?enc=3Q2Y1k5BriJsFcxTY7ebQh0hExMANhAKSl1CmxvOF+Y="});
  
})
// calcbutton.addEventListener('click',function(){
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files:['contentScript.js']
//   });
// })

  

  