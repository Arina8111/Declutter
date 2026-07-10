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
        goToTab.href="#"
        goToTab.textContent="Go to tab"
        goToTab.addEventListener("click", async (event) => {
            event.preventDefault()
            const [tab] = await chrome.tabs.query({
                currentWindow: true,
                url: message.content_data["tabUrl"],
            })

            if (tab) {
                await chrome.tabs.update(tab.id, { active: true })
                await chrome.windows.update(tab.windowId, { focused: true })
            }
        })
        loading.remove()
        newDiv.appendChild(newTitle)
        newDiv.appendChild(newPara)
        newDiv.appendChild(goToTab)
        summarySection.appendChild(newDiv)
    }
})
