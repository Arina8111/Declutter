const summarySection=document.getElementById("list")
const loading=document.getElementById("loading")
const clearAll=document.getElementById("clear-btn")
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type==="send data") {
        const newDiv=document.createElement('div');
        newDiv.className="entry";
        const newTitle=document.createElement('h2');
        newTitle.textContent=message.content_data["title"]
        const newPara=document.createElement('p');
        newPara.className="summary";
        newPara.textContent=message.content_data["content"]
        const goToTab=document.createElement('a')
        goToTab.href=message.content_data["tabUrl"]
        goToTab.textContent="go to tab"
        loading.remove()
        newDiv.appendChild(newTitle)
        newDiv.appendChild(newPara)
        newDiv.appendChild(goToTab)
        summarySection.appendChild(newDiv)
    }
})
